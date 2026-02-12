import React, { useEffect, useState } from "react";
import api from "@/api/axios";
import { useParams } from "react-router-dom";

export default function FaqDetails() {
  const { id } = useParams();

  const [section, setSection] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);

  const toggleAccordion = (faqId) => {
    setOpenId(openId === faqId ? null : faqId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sectionRes, faqRes] = await Promise.all([
          api.get("/api/faq-sections"),
          api.get("/api/faqs"),
        ]);

        const currentSection = sectionRes.data.find(
          (sec) => String(sec._id) === String(id)
        );

        const filteredFaqs = faqRes.data.filter(
          (faq) => String(faq.section?._id) === String(id)
        );

        setSection(currentSection);
        setFaqs(filteredFaqs);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);

        // Page fade animation delay
        setTimeout(() => {
          setPageLoaded(true);
        }, 100);
      }
    };

    fetchData();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    );

  return (
    <div
      className={`min-h-screen bg-gray-50 transition-all duration-700 ${
        pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      {/* Section Header */}
      <div className="bg-indigo-600 text-white text-center py-12 shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          {section?.name}
        </h1>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-5">

        {faqs.length === 0 ? (
          <p className="text-gray-500 text-center">
            No FAQs found in this section.
          </p>
        ) : (
          faqs.map((faq) => (
            <div
              key={faq._id}
              className="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* Question */}
              <button
                onClick={() => toggleAccordion(faq._id)}
                className="w-full flex justify-between items-center text-left p-6 focus:outline-none"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h2>

                <span
                  className={`text-2xl font-bold transition-transform duration-300 ${
                    openId === faq._id ? "rotate-45 text-indigo-600" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* Smooth Answer */}
              <div
                className={`px-6 text-gray-600 transition-all duration-500 ease-in-out overflow-hidden ${
                  openId === faq._id
                    ? "max-h-[500px] pb-6 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
}
