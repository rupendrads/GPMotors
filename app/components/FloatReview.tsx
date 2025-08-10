"use client";
import { useState } from "react";
import { StarIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// Car repair shop testimonials for GP Motors
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    title: "Customer at GP Motors, Mumbai",
    rating: 5,
    feedback:
      "GP Motors fixed my Honda in record time. Honest pricing, polite staff, and transparent service. Will definitely recommend to my friends!",
    companyLogos: [{ label: "Honda", img: "/logos/honda.png" }],
  },
  {
    id: 2,
    name: "Rahul Sen",
    title: "Regular Customer, GP Motors",
    rating: 4,
    feedback:
      "The team at GP Motors always delivers quality repairs. The workshop is clean and the staff explain everything clearly.",
    companyLogos: [{ label: "Suzuki", img: "/logos/suzuki.png" }],
  },
  {
    id: 3,
    name: "Meena Gupta",
    title: "Car Owner, Thane",
    rating: 5,
    feedback:
      "Got my car serviced here twice. Both times, their pickup and drop facility and prompt updates made it a breeze. Highly trustworthy!",
    companyLogos: [{ label: "Hyundai", img: "/logos/hyundai.png" }],
  },
  {
    id: 4,
    name: "Aakash Verma",
    title: "Swift Owner",
    rating: 5,
    feedback:
      "Very professional. My Swift’s clutch was replaced quickly and runs better than ever. GP Motors is my go-to garage in Mumbai.",
    companyLogos: [{ label: "Maruti Suzuki", img: "/logos/maruti.png" }],
  },
  {
    id: 5,
    name: "Sameer Dixit",
    title: "Freelancer, Andheri",
    rating: 5,
    feedback:
      "Excellent diagnostic skills at GP Motors. Spotted issues other garages missed. My car is running smooth since their tune-up!",
    companyLogos: [],
  },
];

function Stars({ count }) {
  return (
    <div className="flex items-center space-x-0.5 mb-1">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-4 h-4 ${i < count ? "text-blue-400" : "text-gray-200"}`}
          fill="currentColor"
        />
      ))}
    </div>
  );
}

export default function ReviewWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed left-6 bottom-6 z-50 flex flex-col items-start space-y-2">
      {open && (
        <div className="mb-2 bg-white shadow-xl rounded-xl p-4 w-80 max-h-120 flex flex-col justify-between border border-gray-200 animate-fadeIn">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-lg">Testimonials</span>
            <button className="cursor-pointer" onClick={() => setOpen(false)}>
              <XMarkIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-4">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-gray-50 rounded-lg p-3 flex flex-col relative"
              >
                <div className="flex items-center mb-2">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3" />
                  <div>
                    <div className="font-bold text-gray-900 leading-tight">
                      {t.name}
                    </div>
                    <div className="text-gray-500 text-sm font-semibold">
                      {t.title}
                    </div>
                  </div>
                </div>
                <Stars count={t.rating} />
                <div className="text-gray-700 text-sm mb-2">
                  {t.feedback.length > 98 ? (
                    <>
                      {t.feedback.slice(0, 98)}...
                      <button className="text-blue-600 text-xs font-bold ml-1">
                        READ MORE →
                      </button>
                    </>
                  ) : (
                    t.feedback
                  )}
                </div>
                {t.companyLogos.length > 0 && (
                  <div className="flex space-x-3 mt-1">
                    {t.companyLogos.map(({ label, img }) => (
                      <div key={label} className="flex items-center">
                        <Image
                          src={img}
                          layout="fill"
                          objectFit="contain"
                          alt={label}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <button
            className="mt-4 w-full cursor-pointer bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
            onClick={() => alert("Leave a review clicked!")}
          >
            Leave a Review
          </button>
        </div>
      )}
      <button
        className="bg-gradient-to-r cursor-pointer from-blue-600 to-blue-700 text-white rounded-full p-4 shadow-lg hover:bg-blue-500 transition"
        onClick={() => setOpen((v) => !v)}
        aria-label="Show reviews"
      >
        <StarIcon className="h-6 w-6 text-white" />
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
