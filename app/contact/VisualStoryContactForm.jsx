'use client';

import React, { useState, useRef, useEffect } from 'react'; // --- MODIFIED: Added useEffect
// --- MODIFIED: Removed 'emailjs-com' import ---
import { 
  User, 
  Calendar, 
  MapPin, 
  IndianRupee, 
  Phone, 
  Mail, 
  MessageSquare
} from 'lucide-react';

// --- Options for Checkboxes ---
const eventOptions = [
  "Engagement Ceremony",
  "Wedding Ceremony",
  "Haldi Ceremony",
  "Pre-wedding Ceremony",
  "Maternity Shoot",
  "Corporate Shoot",
  "Commercial Shoot",
  "Family Function",
  "Other (Specify)",
];

const contactOptions = [
  "Call",
  "WhatsApp",
  "Email",
];

// --- Initial Form State ---
const initialFormData = {
  fullName: '',
  eventDate: '',
  eventsToCover: [],
  otherEvent: '',
  venue: '',
  budget: '',
  mobile: '',
  email: '',
  contactMethod: [],
};

// --- Helper Component: Input Field ---
const InputField = ({ id, label, type, value, onChange, error, icon: Icon, placeholder, maxLength }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="relative mt-1 rounded-md shadow-sm">
      {Icon && (
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      )}
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`block w-full rounded-md border-gray-300 py-3 pr-3 ${Icon ? 'pl-10' : 'pl-4'} ${error ? 'border-red-500 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500' : 'focus:border-pink-500 focus:ring-pink-500'} sm:text-sm`}
      />
    </div>
    {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
  </div>
);

// --- Manual Validation Function ---
const validateForm = (data, showOtherEventInput) => {
  const newErrors = {};
  
  if (!data.fullName.trim()) newErrors.fullName = "Full name is required";
  if (!data.eventDate) newErrors.eventDate = "Event date is required";
  if (data.eventsToCover.length === 0) newErrors.eventsToCover = "Please select at least one event";
  if (showOtherEventInput && !data.otherEvent.trim()) newErrors.otherEvent = "Please specify the 'Other' event";
  if (!data.venue.trim()) newErrors.venue = "Venue is required";
  if (!data.budget.trim()) newErrors.budget = "Budget is required";
  if (!data.mobile.trim() || data.mobile.length !== 10) newErrors.mobile = "Mobile number must be exactly 10 digits";
  if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) newErrors.email = "A valid email address is required";
  if (data.contactMethod.length === 0) newErrors.contactMethod = "Please select a contact method";

  return { newErrors, isValid: Object.keys(newErrors).length === 0 };
};

// --- Main Contact Form Component ---
export default function VisualStoryContactForm() {
  const formRef = useRef();
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [isEmailJsLoaded, setIsEmailJsLoaded] = useState(false); // --- MODIFIED: Added state for script loading

  const showOtherEventInput = formData.eventsToCover.includes('Other (Specify)');

  // --- MODIFIED: Load EmailJS script from CDN ---
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      // Initialize EmailJS with your User ID (Public Key)
      // This is optional but recommended
      try {
        window.emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY); // <-- REPLACE THIS with your Public Key
        setIsEmailJsLoaded(true);
      } catch (error) {
        console.error("EmailJS initialization failed:", error);
      }
    };
    script.onerror = () => {
      console.error("Failed to load EmailJS script.");
    };
    document.head.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array so it runs only once

  // --- Event Handlers ---

  const handleChange = (e) => {
    let { name, value } = e.target; 

    if (name === 'mobile') {
      value = value.replace(/[^0-9]/g, '').slice(0, 10);
    }

    if (name === 'budget') {
      value = value.replace(/[^0-9]/g, '').slice(0, 10);
    }

    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prev => {
      const currentArray = prev[name];
      let newArray;
      if (checked) {
        newArray = [...currentArray, value];
      } else {
        newArray = currentArray.filter(item => item !== value);
      }
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: null }));
      }
      return { ...prev, [name]: newArray };
    });
  };

  // --- Form Submission Handler ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSubmitMessage(null);

    // --- Manual Validation ---
    const { newErrors, isValid } = validateForm(formData, showOtherEventInput);
    if (!isValid) {
      setErrors(newErrors);
      return;
    }
    
    // --- Check if EmailJS script is loaded ---
    if (!isEmailJsLoaded || !window.emailjs) {
      setSubmitMessage({ type: 'error', text: "Email service is not ready. Please try again in a moment." });
      return;
    }

    setIsSubmitting(true);

    // --- MODIFIED: Use window.emailjs ---
    try {
      await window.emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,    // <-- REPLACE THIS
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,   // <-- REPLACE THIS
        formRef.current
        // Note: The User ID (Public Key) is now set in the useEffect init()
      );
      
      setSubmitMessage({ type: 'success', text: "Thank you! We've received your inquiry and will be in touch soon." });
      setFormData(initialFormData);
      
    } catch (error) {
      console.error("EmailJS failed:", error);
      setSubmitMessage({ type: 'error', text: "An error occurred. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Determine button text ---
  let buttonText = 'Send Inquiry';
  if (!isEmailJsLoaded) {
    buttonText = 'Loading...';
  }
  if (isSubmitting) {
    buttonText = 'Submitting...';
  }

  return (
    <div className="font-inter">
      <div className="max-w-5xl mx-auto mt-15">
        {/* --- Form Section --- */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl">
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            
            {/* --- Personal & Event Details --- */}
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
              <InputField
                id="fullName"
                label="Full Name *"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                error={errors.fullName}
                icon={User}
                placeholder="John Doe"
              />
              <InputField
                id="eventDate"
                label="Event Date *"
                type="date"
                value={formData.eventDate}
                onChange={handleChange}
                error={errors.eventDate}
                icon={Calendar}
              />
              <InputField
                id="venue"
                label="Venue *"
                type="text"
                value={formData.venue}
                onChange={handleChange}
                error={errors.venue}
                icon={MapPin}
                placeholder="City or Venue Name"
              />
              <InputField
                id="budget"
                label="Your Budget *"
                type="text"
                value={formData.budget}
                onChange={handleChange}
                error={errors.budget}
                icon={IndianRupee}
                placeholder="e.g., ₹10000 - ₹20000"
              />
              <InputField
                id="mobile"
                label="Mobile No. *"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                error={errors.mobile}
                icon={Phone}
                placeholder="10-digit mobile number"
                maxLength={10}
              />
              <InputField
                id="email"
                label="Email ID *"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                icon={Mail}
                placeholder="you@example.com"
              />
            </div>

            {/* --- Events to Cover (Checkboxes) --- */}
            <fieldset>
              <legend className="block text-sm font-medium text-gray-700 mb-2">
                Events to Cover *
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {eventOptions.map((event) => (
                  <label key={event} className="flex items-center space-x-2 text-sm text-gray-700 p-3 bg-gray-50 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors">
                    <input
                      type="checkbox"
                      name="eventsToCover"
                      value={event}
                      checked={formData.eventsToCover.includes(event)}
                      onChange={handleCheckboxChange}
                      className="rounded border-gray-300 text-brand-black-og shadow-sm focus:ring-brand-black-og/80"
                    />
                    <span>{event}</span>
                  </label>
                ))}
              </div>
              {errors.eventsToCover && <p className="mt-1 text-xs text-red-600">{errors.eventsToCover}</p>}

              {/* --- Conditional "Other" Input --- */}
              {showOtherEventInput && (
                <div className="mt-4">
                  <InputField
                    id="otherEvent"
                    label="Please Specify Other Event *"
                    type="text"
                    value={formData.otherEvent}
                    onChange={handleChange}
                    error={errors.otherEvent}
                    icon={MessageSquare}
                    placeholder="e.g., Reception Day"
                  />
                </div>
              )}
            </fieldset>

            {/* --- Preferred Contact Method (Checkboxes) --- */}
            <fieldset>
              <legend className="block text-sm font-medium text-gray-700">
                Preferred Contact Method *
              </legend>
              <div className="mt-2 flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
                {contactOptions.map((method) => (
                  <label key={method} className="flex items-center space-x-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      name="contactMethod"
                      value={method}
                      checked={formData.contactMethod.includes(method)}
                      onChange={handleCheckboxChange}
                      className="rounded border-gray-300 text-brand-black-ogshadow-sm focus:ring-brand-black-og/80"
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
              {errors.contactMethod && <p className="mt-1 text-xs text-red-600">{errors.contactMethod}</p>}
            </fieldset>
            
            {/* --- Submission Message --- */}
            {submitMessage && (
              <div className={`rounded-md p-4 ${
                submitMessage.type === 'success' 
                  ? 'bg-green-50 text-green-700' 
                  : 'bg-red-50 text-red-700'
              }`}>
                <p className="text-sm font-medium">{submitMessage.text}</p>
              </div>
            )}

            {/* --- Submit Button --- */}
            <div>
              <button
                type="submit"
                // --- MODIFIED: Disable button if script is not loaded ---
                disabled={isSubmitting || !isEmailJsLoaded}
                className="cursor-pointer w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-brand-black-og hover:bg-brand-black-dark focus:outline-none focus:ring-2 focus:ring-brand-black-og/80 focus:ring-offset-2 disabled:bg-gray-400 transition-all"
              >
                {buttonText} 
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

