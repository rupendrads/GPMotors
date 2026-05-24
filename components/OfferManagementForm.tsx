"use client";

import { useEffect, useState } from "react";
import { Save, Eye, Plus, Trash2 } from "lucide-react";

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
  is_active: true,
  show_delay_ms: 800,
};

export default function OfferManagementForm() {
  const [content, setContent] = useState<OfferContent>(defaultContent);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [newPerk, setNewPerk] = useState("");

  useEffect(() => {
    const fetchOfferContent = async () => {
      try {
        const response = await fetch("/api/offer");
        const data = await response.json();
        
        if (data && !data.error) {
          setContent({
            ...defaultContent,
            ...data,
            perks: Array.isArray(data.perks) ? data.perks : defaultContent.perks,
          });
        }
      } catch (error) {
        console.error("Failed to fetch offer content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOfferContent();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      const response = await fetch("/api/offer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });

      const data = await response.json();

      if (data.status === "success") {
        setMessage({ type: "success", text: "Offer content saved successfully!" });
      } else {
        setMessage({ type: "error", text: data.message || "Failed to save offer content" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to save offer content" });
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (field: keyof OfferContent, value: any) => {
    setContent((prev) => ({ ...prev, [field]: value }));
  };

  const addPerk = () => {
    if (newPerk.trim()) {
      setContent((prev) => ({
        ...prev,
        perks: [...prev.perks, newPerk.trim()],
      }));
      setNewPerk("");
    }
  };

  const removePerk = (index: number) => {
    setContent((prev) => ({
      ...prev,
      perks: prev.perks.filter((_, i) => i !== index),
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Offer Modal Management</h1>
          <a
            href="/"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition"
          >
            <Eye className="h-4 w-4" />
            Preview
          </a>
        </div>

        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Active Toggle */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={content.is_active}
                onChange={(e) => handleChange("is_active", e.target.checked)}
                className="w-5 h-5 text-red-600 rounded focus:ring-red-500"
              />
              <span className="font-medium text-gray-900">Offer Active</span>
            </label>
            <span className="text-sm text-gray-500">
              {content.is_active ? "Offer modal will be shown to visitors" : "Offer modal is hidden"}
            </span>
          </div>

          {/* Heading Section */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Heading</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Line 1</label>
                <input
                  type="text"
                  value={content.heading_line1}
                  onChange={(e) => handleChange("heading_line1", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Line 2 (Highlighted)</label>
                <input
                  type="text"
                  value={content.heading_line2}
                  onChange={(e) => handleChange("heading_line2", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* Description */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Description</h2>
            <textarea
              value={content.description}
              onChange={(e) => handleChange("description", e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </section>

          {/* Pricing */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Pricing</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Original Price (£)</label>
                <input
                  type="number"
                  value={content.original_price}
                  onChange={(e) => handleChange("original_price", parseFloat(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Offer Price (£)</label>
                <input
                  type="number"
                  value={content.offer_price}
                  onChange={(e) => handleChange("offer_price", parseFloat(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Discount %</label>
                <input
                  type="number"
                  value={content.discount_percent}
                  onChange={(e) => handleChange("discount_percent", parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* Perks */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Perks / Features</h2>
            <div className="space-y-2 mb-4">
              {content.perks.map((perk, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                  <span className="flex-1">{perk}</span>
                  <button
                    type="button"
                    onClick={() => removePerk(index)}
                    className="p-1 text-red-600 hover:bg-red-100 rounded"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newPerk}
                onChange={(e) => setNewPerk(e.target.value)}
                placeholder="Add new perk..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addPerk())}
              />
              <button
                type="button"
                onClick={addPerk}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Add
              </button>
            </div>
          </section>

          {/* Testimonial */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Testimonial</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Quote</label>
                <textarea
                  value={content.testimonial_text}
                  onChange={(e) => handleChange("testimonial_text", e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                <input
                  type="text"
                  value={content.testimonial_author}
                  onChange={(e) => handleChange("testimonial_author", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* Rating */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Rating Display</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating (out of 5)</label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  value={content.rating}
                  onChange={(e) => handleChange("rating", parseFloat(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Reviews</label>
                <input
                  type="number"
                  value={content.review_count}
                  onChange={(e) => handleChange("review_count", parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* CTA & Contact */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Call to Action</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
                <input
                  type="text"
                  value={content.cta_button_text}
                  onChange={(e) => handleChange("cta_button_text", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Button Link</label>
                <input
                  type="text"
                  value={content.cta_button_link}
                  onChange={(e) => handleChange("cta_button_link", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="text"
                  value={content.phone_number}
                  onChange={(e) => handleChange("phone_number", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Badge Text</label>
                <input
                  type="text"
                  value={content.badge_text}
                  onChange={(e) => handleChange("badge_text", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* Image & Settings */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Image & Settings</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input
                  type="text"
                  value={content.image_url}
                  onChange={(e) => handleChange("image_url", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Show Delay (ms)</label>
                <input
                  type="number"
                  value={content.show_delay_ms}
                  onChange={(e) => handleChange("show_delay_ms", parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* Submit */}
          <div className="flex justify-end pt-4 border-t">
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold rounded-lg transition"
            >
              <Save className="h-5 w-5" />
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
