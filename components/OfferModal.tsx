"use client";

import { useEffect, useState } from "react";
import { X, Phone, Check, Star, HeartHandshake, Tag, Gift } from "lucide-react";
import Link from "next/link";

interface OfferContent {
  id: number;
  heading_line1: string;
  heading_line2: string;
  description: string;
  original_price: number;
  offer_price: number;
  discount_percent: number;
  perks: string[];
  testimonial_text: string;
  testimonial_author: string;
  rating: number;
  review_count: number;
  cta_button_text: string;
  cta_button_link: string;
  phone_number: string;
  badge_text: string;
  image_url: string;
  is_active: boolean;
  show_delay_ms: number;
}

// Default content as fallback
const defaultContent: OfferContent = {
  id: 1,
  heading_line1: "Your Car Deserves",
  heading_line2: "The Best.",
  description: "Get a full professional service with 30% off as our thank-you for trusting G.P. Motors.",
  original_price: 199,
  offer_price: 139,
  discount_percent: 30,
  perks: [
    "50-point inspection — every detail covered",
    "Genuine parts & certified technicians",
    "Same-day turnaround on most services",
  ],
  testimonial_text: "Fast, honest, and genuinely friendly. My car's never run better!",
  testimonial_author: "Sarah M., Teddington",
  rating: 4.9,
  review_count: 380,
  cta_button_text: "Claim Your Welcome Offer",
  cta_button_link: "/book-appointment",
  phone_number: "020 8943 4103",
  badge_text: "Welcome Offer For Our Community",
  image_url: "/images/garage-hero.jpg",
  is_active: false,
  show_delay_ms: 800,
};

export function OfferModal() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [content, setContent] = useState<OfferContent>(defaultContent);
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false); // Start as inactive until API confirms

  // Fetch offer content from API
  useEffect(() => {
    const fetchOfferContent = async () => {
      try {
        const response = await fetch("/api/offer");
        const data = await response.json();
        
        // Check if offer is active from API response
        if (data && !data.error) {
          // Handle is_active - could be 0, 1, true, false, or "0", "1"
          const active = data.is_active === true || data.is_active === 1 || data.is_active === "1";
          setIsActive(active);
          
          if (active) {
            setContent({
              ...defaultContent,
              ...data,
              is_active: active,
              perks: Array.isArray(data.perks) ? data.perks : defaultContent.perks,
            });
          }
        } else {
          // API error or no offer found - keep inactive
          setIsActive(false);
        }
      } catch (error) {
        console.error("Failed to fetch offer content:", error);
        setIsActive(false);
      } finally {
        setLoading(false);
      }
    };

    fetchOfferContent();
  }, []);

  // Show modal after delay (only after content is loaded and active)
  useEffect(() => {
    if (!loading && isActive) {
      const t = setTimeout(() => setOpen(true), content.show_delay_ms);
      return () => clearTimeout(t);
    }
  }, [loading, isActive, content.show_delay_ms]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => {
    setOpen(false);
    setDismissed(true);
  };

  // Don't render if still loading or offer is not active
  if (loading) return null;
  if (!isActive) return null;

  if (!open) {
    if (!dismissed) return null;
    return (
      <button
        onClick={() => { setOpen(true); setDismissed(false); }}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-red-600 px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-red-700 md:px-5 md:py-3.5 animate-bounce"
        aria-label="Reopen welcome offer"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
          <Gift className="h-4 w-4" />
        </span>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[9px] font-bold uppercase tracking-widest opacity-90">Welcome Offer</span>
          <span className="text-sm font-black uppercase">{content.discount_percent}% Off — £{content.offer_price}</span>
        </span>
      </button>
    );
  }

  return (
    <>
      {/* CSS Keyframes */}
      <style jsx global>{`
        @keyframes modalSlideIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(220, 38, 38, 0.4); }
          50% { box-shadow: 0 0 40px rgba(220, 38, 38, 0.7); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center p-4"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          backdropFilter: "blur(8px)",
          animation: "fadeIn 0.3s ease-out",
          width: "100vw",
          height: "100vh",
        }}
        onClick={close}
        role="dialog"
        aria-modal="true"
        aria-labelledby="offer-title"
      >
        <div
          className="relative grid w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white md:grid-cols-[1fr_1fr] md:max-h-[85vh]"
          style={{
            boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)",
            animation: "modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            margin: "auto",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={close}
            aria-label="Close offer"
            className="absolute right-4 top-4 z-20 rounded-full bg-gray-100 p-2.5 text-gray-600 shadow-lg transition-all duration-200 hover:scale-110 hover:rotate-90 hover:bg-red-100 hover:text-red-600"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Content side */}
          <div className="relative order-2 flex flex-col gap-4 overflow-y-auto overflow-x-hidden bg-gradient-to-br from-white via-gray-50 to-red-50 p-5 pt-12 md:order-1 md:gap-5 md:p-8 md:pt-8">
            {/* Decorative background elements */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />

            {/* Trust bar */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600">
                <HeartHandshake className="h-3.5 w-3.5 text-white" />
              </span>
              {content.badge_text}
            </div>

            {/* Heading */}
            <div>
              <h1 id="offer-title" className="text-2xl font-black uppercase leading-tight tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
                {content.heading_line1}{" "}
                <span className="text-red-600">{content.heading_line2}</span>
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
                {content.description}
              </p>
            </div>

            {/* Price reveal */}
            <div className="flex flex-col gap-3 rounded-2xl border-2 border-red-100 bg-gradient-to-r from-red-50 to-yellow-50 px-5 py-4 md:flex-row md:items-center md:gap-5">
              <div className="flex items-center gap-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Was</p>
                  <p className="text-xl font-bold text-gray-400 line-through">£{content.original_price}</p>
                </div>
                <div className="h-12 w-px bg-red-200" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-red-600">Now Only</p>
                  <p className="text-3xl font-black leading-none text-red-600 md:text-4xl">£{content.offer_price}</p>
                </div>
              </div>
              <span className="w-fit inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-4 py-2 text-sm font-black uppercase text-white shadow-lg md:ml-auto">
                <Tag className="h-4 w-4" />
                Save {content.discount_percent}%
              </span>
            </div>

            {/* Perks list */}
            <ul className="space-y-3 text-sm font-medium text-gray-700">
              {content.perks.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 shadow-sm">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="leading-snug">{t}</span>
                </li>
              ))}
            </ul>

            {/* Customer rating */}
            <div className="rounded-xl border border-gray-200 bg-white/80 px-4 py-3 shadow-sm">
              <div className="flex flex-wrap items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm font-bold text-gray-900">{content.rating} / 5</span>
                <span className="ml-1 text-sm text-gray-500">from {content.review_count}+ happy customers</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 pt-2">
              <Link href={content.cta_button_link}>
                <button
                  className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 text-base font-black uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                  style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
                  onClick={close}
                >
                  <span
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    style={{ animation: "shimmer 2s linear infinite" }}
                  />
                  <span className="relative flex items-center justify-center gap-2">
                    <Gift className="h-5 w-5" />
                    {content.cta_button_text}
                  </span>
                </button>
              </Link>

              <a 
                href={`tel:${content.phone_number.replace(/\s/g, '')}`} 
                className="flex items-center justify-center gap-3 rounded-full border-2 border-gray-200 bg-white px-6 py-3 transition-all duration-200 hover:border-red-200 hover:bg-red-50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 shadow-md">
                  <Phone className="h-4 w-4 text-white" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-gray-500">Prefer to call?</span>
                  <span className="block text-base font-bold text-gray-900">{content.phone_number}</span>
                </span>
              </a>
            </div>
          </div>

          {/* Visual side */}
          <div className="relative order-1 hidden h-full max-h-[85vh] overflow-hidden md:order-2 md:block">
            <img
              src={content.image_url}
              alt="GP Motors workshop"
              className="h-full w-full object-cover"
            />
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

            {/* Logo top-left */}
            <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full bg-black/30 px-4 py-2.5 text-white backdrop-blur-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-sm font-black shadow-lg">GP</div>
              <div>
                <p className="text-base font-black leading-none">G.P. MOTORS</p>
                <p className="text-[11px] tracking-[0.25em] text-white/70">TEDDINGTON</p>
              </div>
            </div>

            {/* Floating discount badge */}
            <div
              className="absolute right-6 top-24 flex h-28 w-28 flex-col items-center justify-center rounded-full text-center text-white shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #ef4444, #dc2626)",
                animation: "float 3s ease-in-out infinite",
              }}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-90">Enjoy</span>
              <span className="text-4xl font-black leading-none">{content.discount_percent}</span>
              <span className="text-sm font-bold leading-none">% OFF</span>
            </div>

            {/* Testimonial */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-8 pt-16">
              <p className="text-base font-medium leading-relaxed text-white/95">
                "{content.testimonial_text}"
              </p>
              <p className="mt-2 text-sm text-white/60">— {content.testimonial_author}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
