"use client";
import { useState, useEffect } from "react";
import { StarIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface GoogleReview {
  author_name: string;
  author_url?: string;
  language?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GoogleReviewsData {
  result: {
    name: string;
    rating: number;
    reviews: GoogleReview[];
  };
  fromCache?: boolean;
  lastFetched?: string;
  nextFetchDate?: string;
  error?: string;
}
interface Review {
  id: string;
  name: string;
  title: string;
  rating: number;
  feedback: string;
  profilePhoto?: string;
  companyLogos: { label: string; img: string }[];
  isGoogle: boolean;
}

// Fallback testimonials
const fallbackTestimonials = [
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center space-x-0.5 mb-1">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
        />
      ))}
    </div>
  );
}

function GoogleReviewBadge() {
  return (
    <div className="flex items-center space-x-1 mt-1">
      <svg className="w-4 h-4" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
      <span className="text-xs text-gray-600 font-medium">Google Review</span>
    </div>
  );
}

// Review Feedback component with expand/collapse functionality
function ReviewFeedback({ feedback }: { feedback: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (feedback.length <= 150) {
    return <div className="text-gray-700 text-sm mb-2">{feedback}</div>;
  }

  return (
    <div className="text-gray-700 text-sm mb-2">
      {isExpanded ? feedback : `${feedback.slice(0, 150)}...`}
      <button 
        className="text-blue-600 text-xs font-bold ml-1 hover:text-blue-800 transition-colors"
        onClick={toggleExpanded}
      >
        {isExpanded ? 'SHOW LESS ↑' : 'READ MORE →'}
      </button>
    </div>
  );
}

export default function ReviewWidget() {
  const [open, setOpen] = useState(false);
  const [reviews, setReviews] = useState<Review[]>(fallbackTestimonials);
  const [globalRating,setGlobalRating] =  useState<string | number>('');
  const [loading, setLoading] = useState(false);
  const [googleReviewsInfo, setGoogleReviewsInfo] = useState<{
    fromCache: boolean;
    lastFetched?: string;
    error?: string;
  }>({ fromCache: false });
  useEffect(() => {
    fetchGoogleReviews();
  }, []);

  const fetchGoogleReviews = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/google-reviews');
      const data: GoogleReviewsData = await response.json();
      setGlobalRating(data.result.rating)
      
      if (data.error) {
        console.error('Google Reviews API error:', data.error);
        setGoogleReviewsInfo({ fromCache: false, error: data.error });
        return;
      }

      if (data.result?.reviews) {
        // Transform Google reviews to match your testimonial format
        const googleReviews = data.result.reviews.map((review, index) => ({
          id: `google-${index}`,
          name: review.author_name,
          title: review.relative_time_description,
          rating: review.rating,
          feedback: review.text,
          profilePhoto: review.profile_photo_url,
          companyLogos: [],
          isGoogle: true,
        }));

        // Combine Google reviews with fallback testimonials
        setReviews([...googleReviews, ...fallbackTestimonials]);
        setGoogleReviewsInfo({
          fromCache: data.fromCache || false,
          lastFetched: data.lastFetched,
          error: undefined,
        });
      }
    } catch (error) {
      console.error('Error fetching Google reviews:', error);
      setGoogleReviewsInfo({ 
        fromCache: false, 
        error: 'Failed to fetch reviews' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed left-6 bottom-6 z-80 flex flex-col items-start space-y-2">
      {open && (
        <div className="mb-2 bg-white shadow-xl rounded-xl p-4 w-80 max-h-120 flex flex-col justify-between border border-gray-200 animate-fadeIn">
          <div className="flex justify-between items-center mb-2">
            <div className="flex flex-col">
              <span className="font-bold text-lg">Reviews</span>
              {googleReviewsInfo.error && (
                <span className="text-xs text-red-500">
                  {googleReviewsInfo.error}
                </span>
              )}
            </div>
            <button className="cursor-pointer" onClick={() => setOpen(false)}>
              <XMarkIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          
          {loading && (
            <div className="text-center py-4">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="text-sm text-gray-600 mt-2">Loading reviews...</p>
            </div>
          )}
          
          <div className="flex-1 overflow-y-auto space-y-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-50 rounded-lg p-3 flex flex-col relative"
              >
                <div className="flex items-center mb-2">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                    {review.profilePhoto ? (
                      <Image
                        src={review.profilePhoto}
                        alt={review.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover rounded-full"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
                        {review.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 leading-tight">
                      {review.name}
                    </div>
                    <div className="text-gray-500 text-sm font-semibold">
                      {review.title}
                    </div>
                  </div>
                </div>
                <Stars count={review.rating} />
                
                {/* Updated feedback section with ReviewFeedback component */}
                <ReviewFeedback feedback={review.feedback} />
                
                {/* Google Review Badge */}
                {review.isGoogle && <GoogleReviewBadge />}
                
                {/* Company Logos for non-Google reviews */}
                {!review.isGoogle && review.companyLogos.length > 0 && (
                  <div className="flex space-x-3 mt-1">
                    {review.companyLogos.map(({ label, img }) => (
                      <div key={label} className="flex items-center relative w-8 h-8">
                        <Image
                          src={img}
                          fill
                          style={{ objectFit: "contain" }}
                          alt={label}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
         <div className="mt-4 grid grid-cols-1 gap-3">
  <button
    className="flex items-center justify-center w-full gap-2 bg-white border border-blue-600 text-blue-700 font-semibold rounded-lg py-2 shadow-sm hover:bg-blue-50 transition"
    onClick={() =>
      window.open(
        'https://www.google.com/maps/place/GP+Motors+(Teddington)+Ltd/@51.4290313,-0.3520135,17z/data=!4m8!3m7!1s0x48760b60757abfa3:0x85aaf42d11a7299b!8m2!3d51.4290313!4d-0.3520135!9m1!1b1!16s%2Fg%2F1thxkk14?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D',
        '_blank'
      )
    }
    aria-label="See more reviews on Google"
  >
    More Reviews
  </button>

  <button
    className="flex items-center justify-center w-full gap-2 bg-blue-600 text-white font-semibold rounded-lg py-2 shadow hover:bg-blue-700 transition"
    onClick={() =>
      window.open(
        'https://www.google.com/maps/place/GP+Motors+(Teddington)+Ltd/@51.4290313,-0.3520135,17z/data=!4m8!3m7!1s0x48760b60757abfa3:0x85aaf42d11a7299b!8m2!3d51.4290313!4d-0.3520135!9m1!1b1!16s%2Fg%2F1thxkk14?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D',
        '_blank'
      )
    }
    aria-label="Leave a Google Review"
  >
    Leave a Google Review
  </button>
</div>

        </div>
      )}
      
      <button
        className="bg-gradient-to-r cursor-pointer from-blue-600 to-blue-700 text-white rounded-full p-4 shadow-lg hover:bg-blue-500 transition"
        onClick={() => setOpen((v) => !v)}
        aria-label="Show reviews"
      >
        {globalRating}
      </button>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease;
        }
      `}</style>
    </div>
  );
}
