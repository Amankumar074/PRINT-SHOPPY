import React, { useEffect, useState } from "react";
import api from "@/api/axios";
import { Link } from "react-router-dom";

export default function Faq() {
  const [sections, setSections] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sectionRes, faqRes] = await Promise.all([
          api.get("/api/faq-sections"),
          api.get("/api/faqs"),
        ]);

        setSections(sectionRes.data);
        setFaqs(faqRes.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-indigo-600 text-white text-center py-10">
        <h1 className="text-3xl font-bold">FAQ’s</h1>
        <p className="mt-2 text-sm">
          Select a category to view FAQs
        </p>
      </div>

      {/* Sections Grid */}
      <div className="container mx-auto px-4 py-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => {

          // 👇 Is section ke FAQs filter karo
          const totalQuestions = faqs.filter(
            (faq) => faq.section?._id === section._id
          ).length;

          return (
            <Link
              key={section._id}
              to={`/faqdetails/${section._id}`}
            >
              <div className="bg-white shadow p-6 rounded-md hover:shadow-lg transition cursor-pointer">
                <h2 className="text-lg font-semibold text-center">
                  {section.name} ({totalQuestions})
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
