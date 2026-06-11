"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  description: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    description: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.budget) newErrors.budget = "Please select a budget range";
    if (!formData.description.trim()) {
      newErrors.description = "Project description is required";
    } else if (formData.description.trim().length < 20) {
      newErrors.description = "Please provide a bit more detail (at least 20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for that field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      setIsSubmitting(false);
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again.');
    }
  };

  if (isSuccess) {
    return (
      <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-2xl border border-emerald-500/20 text-center space-y-4 sm:space-y-6">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
          <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-500" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-white">Inquiry Received!</h3>
          <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
            Thank you, <span className="font-semibold text-emerald-400">{formData.fullName}</span>.
            We'll review your <span className="font-medium text-white">{formData.service}</span> inquiry
            and contact you within 24 hours.
          </p>
        </div>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              fullName: "",
              companyName: "",
              email: "",
              phone: "",
              service: "",
              budget: "",
              description: "",
            });
          }}
          className="text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-lg bg-[#070a13] border ${
      hasError ? "border-red-500" : "border-white/10"
    } text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-300 text-sm`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 glass-panel p-5 sm:p-6 md:p-8 rounded-2xl border border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className={inputClass(!!errors.fullName)}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Company Name */}
        <div className="space-y-2">
          <label htmlFor="companyName" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Acme Corp"
            className={inputClass(false)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* Email Address */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={inputClass(!!errors.email)}
          />
          {errors.email && (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className={inputClass(false)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* Service Required */}
        <div className="space-y-2">
          <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Service Required *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${inputClass(!!errors.service)} appearance-none cursor-pointer`}
          >
            <option value="" disabled>Select a service...</option>
            <option value="AI & Agentic AI Solutions">AI & Agentic AI</option>
            <option value="Web Application Development">Web Development</option>
            <option value="Mobile App Development">Mobile Apps</option>
            <option value="SaaS Development">SaaS Development</option>
            <option value="Business Automation">Automation</option>
          </select>
          {errors.service && (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.service}
            </p>
          )}
        </div>

        {/* Budget Range */}
        <div className="space-y-2">
          <label htmlFor="budget" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Budget Range *
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`${inputClass(!!errors.budget)} appearance-none cursor-pointer`}
          >
            <option value="" disabled>Select budget...</option>
            <option value="Under $5,000">Under $5,000</option>
            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
            <option value="$25,000 - $50,000">$25,000 - $50,000</option>
            <option value="$50,000+">$50,000+</option>
          </select>
          {errors.budget && (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.budget}
            </p>
          )}
        </div>
      </div>

      {/* Project Description */}
      <div className="space-y-2">
        <label htmlFor="description" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Project Description *
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          value={formData.description}
          onChange={handleChange}
          placeholder="Tell us about your project goals and requirements..."
          className={`${inputClass(!!errors.description)} resize-none min-h-[120px]`}
        />
        {errors.description && (
          <p className="text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.description}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-lg text-sm font-semibold text-[#070a13] bg-[#10b981] hover:bg-[#059669] hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-[#070a13] border-t-transparent rounded-full animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Submit Inquiry
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
