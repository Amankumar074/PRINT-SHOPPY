import { useEffect, useState } from "react"
import axios from "axios"
import { Pencil, Trash2, PlusCircle, Check } from "lucide-react"

export default function AdminFaq() {
  // ADD FAQ STATE
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [faqs, setFaqs] = useState([])

  // INLINE EDIT STATE
  const [editingRowId, setEditingRowId] = useState(null)
  const [editQuestion, setEditQuestion] = useState("")
  const [editAnswer, setEditAnswer] = useState("")

  // 🔹 FETCH FAQs
  const fetchFaqs = async () => {
    const res = await axios.get("http://localhost:5000/api/faqs")
    setFaqs(res.data)
  }

  useEffect(() => {
    fetchFaqs()
  }, [])

  // 🔹 ADD FAQ
  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios.post("http://localhost:5000/api/faqs", {
      question,
      answer
    })

    setQuestion("")
    setAnswer("")
    fetchFaqs()
  }

  // 🔹 START INLINE EDIT
  const startInlineEdit = (faq) => {
    setEditingRowId(faq._id)
    setEditQuestion(faq.question)
    setEditAnswer(faq.answer)
  }

  // 🔹 SAVE INLINE EDIT
  const saveInlineEdit = async (id) => {
    await axios.put(`http://localhost:5000/api/faqs/${id}`, {
      question: editQuestion,
      answer: editAnswer
    })

    setEditingRowId(null)
    setEditQuestion("")
    setEditAnswer("")
    fetchFaqs()
  }

  // 🔹 DELETE FAQ
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this FAQ?")) return
    await axios.delete(`http://localhost:5000/api/faqs/${id}`)
    fetchFaqs()
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Admin FAQ</h2>

      {/* ADD FAQ FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-lg p-4 space-y-3 mb-8"
      >
        <input
          type="text"
          placeholder="Enter question"
          className="border rounded p-2 w-full"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />

        <textarea
          placeholder="Enter answer"
          className="border rounded p-2 w-full"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white
                     transition hover:bg-gray-800 active:scale-95"
        >
          <PlusCircle size={16} />
          Add FAQ
        </button>
      </form>

      {/* FAQ TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">
                Question / Answer
              </th>
              <th className="text-center px-4 py-3 text-sm font-semibold text-gray-700 w-36">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {faqs.length === 0 && (
              <tr>
                <td colSpan="2" className="text-center py-6 text-gray-400 text-sm">
                  No FAQs found
                </td>
              </tr>
            )}

            {faqs.map((faq, index) => (
              <tr
                key={faq._id}
                className={`border-t ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                {/* QUESTION + ANSWER */}
                <td className="px-4 py-3 text-sm space-y-2">
                  {editingRowId === faq._id ? (
                    <>
                      <input
                        className="w-full border rounded p-2 text-sm"
                        value={editQuestion}
                        onChange={(e) => setEditQuestion(e.target.value)}
                      />
                      <textarea
                        className="w-full border rounded p-2 text-sm"
                        value={editAnswer}
                        onChange={(e) => setEditAnswer(e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <p className="font-medium text-gray-800">
                        {faq.question}
                      </p>
                      <p className="text-xs text-gray-500">{faq.answer}</p>
                    </>
                  )}
                </td>

                {/* ACTIONS */}
                <td className="px-4 py-3 text-center">
                  <div className="flex justify-center gap-2">
                    {editingRowId === faq._id ? (
                      <>
                        {/* SAVE */}
                        <button
                          onClick={() => saveInlineEdit(faq._id)}
                          className="rounded-md bg-green-50 text-green-600 px-3 py-1.5 hover:bg-green-100"
                          title="Save"
                        >
                          <Check size={16} />
                        </button>

                        {/* CANCEL */}
                        <button
                          onClick={() => setEditingRowId(null)}
                          className="rounded-md bg-gray-100 text-gray-600 px-3 py-1.5 hover:bg-gray-200"
                          title="Cancel"
                        >
                          ✕
                        </button>
                      </>
                    ) : (
                      <>
                        {/* EDIT */}
                        <button
                          onClick={() => startInlineEdit(faq)}
                          className="rounded-md bg-blue-50 text-blue-600 px-3 py-1.5 hover:bg-blue-100"
                          title="Edit FAQ"
                        >
                          <Pencil size={14} />
                        </button>

                        {/* DELETE */}
                        <button
                          onClick={() => handleDelete(faq._id)}
                          className="rounded-md bg-red-50 text-red-600 px-3 py-1.5 hover:bg-red-100"
                          title="Delete FAQ"
                        >
                          <Trash2 size={14} />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
