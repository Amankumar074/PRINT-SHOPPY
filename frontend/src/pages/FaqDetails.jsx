import React, { useEffect, useState } from "react";
import api from "@/api/axios";
import { useParams } from "react-router-dom";

export default function FaqDetails() {
  const { id } = useParams();

  const [section, setSection] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get section name
        const sectionRes = await api.get("/api/faq-sections");
        const currentSection = sectionRes.data.find(
          (sec) => String(sec._id) === String(id)
        );
        setSection(currentSection);

        // Get FAQs of this section
        const faqRes = await api.get("/api/faqs");

        const filteredFaqs = faqRes.data.filter(
          (faq) => String(faq.section?._id) === String(id)
        );

        setFaqs(filteredFaqs);

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading)
    return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Section Header */}
      <div className="bg-indigo-600 text-white text-center py-10">
        <h1 className="text-3xl font-bold">
          {section?.name}
        </h1>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">

        {faqs.length === 0 ? (
          <p className="text-gray-500 text-center">
            No FAQs found in this section.
          </p>
        ) : (
          faqs.map((faq) => (
            <div
              key={faq._id}
              className="bg-white shadow p-6 rounded-md"
            >
              <h2 className="text-lg font-semibold mb-2">
                {faq.question}
              </h2>
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))
        )}

      </div>
    </div>
  );
}
