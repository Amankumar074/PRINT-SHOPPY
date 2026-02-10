import { useEffect, useState } from "react"
import api from "@/api/axios"
import { Pencil, Trash2, PlusCircle, Check } from "lucide-react"

export default function AdminFaq() {
  /* ================= ADD FAQ STATE ================= */
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [category, setCategory] = useState("")
  const [type, setType] = useState("category")
  const [section, setSection] = useState("")

  const [faqs, setFaqs] = useState([])

  /* ================= CATEGORIES + SECTIONS ================= */
  const [categories, setCategories] = useState([])
  const [sections, setSections] = useState([])

  const [newSectionName, setNewSectionName] = useState("")
  const [editingSectionId, setEditingSectionId] = useState(null)
  const [editingSectionName, setEditingSectionName] = useState("")

  /* ================= INLINE EDIT ================= */
  const [editingRowId, setEditingRowId] = useState(null)
  const [editQuestion, setEditQuestion] = useState("")
  const [editAnswer, setEditAnswer] = useState("")
  const [editCategory, setEditCategory] = useState("")
  const [editSection, setEditSection] = useState("")

  const addSection = async () => {
    if (!newSectionName.trim()) return

    await api.post("/api/faq-sections", {
      name: newSectionName
    })

    setNewSectionName("")
    fetchSections()
  }

  // UPDATE SECTION
  const updateSection = async (id) => {
    await api.put(`/api/faq-sections/${id}`, {
      name: editingSectionName
    })

    setEditingSectionId(null)
    setEditingSectionName("")
    fetchSections()
  }

  // DELETE SECTION
  const deleteSection = async (id) => {
    if (!window.confirm("Delete this FAQ section?")) return
    await api.delete(`/api/faq-sections/${id}`)
    fetchSections()
  }

  /* ================= FETCH DATA ================= */
  const fetchFaqs = async () => {
    const res = await api.get("/api/faqs")
    setFaqs(res.data)
  }

  const fetchCategories = async () => {
    const res = await api.get("/api/categories")
    setCategories(res.data)
  }

  const fetchSections = async () => {
    const res = await api.get("/api/faq-sections")
    setSections(res.data)
  }

  useEffect(() => {
    fetchFaqs()
    fetchCategories()
    fetchSections()
  }, [])

  /* ================= ADD FAQ ================= */
  const handleSubmit = async (e) => {
    e.preventDefault()

    await api.post("/api/faqs", {
      question,
      answer,
      category,
      type,
      section: category === "FAQ_PAGE" ? section : null
    })

    setQuestion("")
    setAnswer("")
    setCategory("")
    setType("category")
    setSection("")
    fetchFaqs()
  }

  /* ================= EDIT ================= */
  const startInlineEdit = (faq) => {
    setEditingRowId(faq._id)
    setEditQuestion(faq.question)
    setEditAnswer(faq.answer)
    setEditCategory(faq.category)
    setEditSection(faq.section?._id || "")
  }

  const saveInlineEdit = async (id) => {
    await api.put(`/api/faqs/${id}`, {
      question: editQuestion,
      answer: editAnswer,
      category: editCategory,
      type: editCategory === "FAQ_PAGE" ? "faqPage" : "category",
      section: editCategory === "FAQ_PAGE" ? editSection : null
    })

    setEditingRowId(null)
    setEditQuestion("")
    setEditAnswer("")
    setEditCategory("")
    setEditSection("")
    fetchFaqs()
  }

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this FAQ?")) return
    await api.delete(`/api/faqs/${id}`)
    fetchFaqs()
  }

  /* ================= UI ================= */
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">FAQ Management</h2>

      {/* ================= FAQ PAGE SECTION MANAGER ================= */}
      <div className="bg-white border rounded-xl p-4 mb-8">
        <h3 className="text-lg font-semibold mb-4">
          FAQ Page Sections
        </h3>

        {/* ADD SECTION */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter section name"
            className="border rounded p-2 flex-1"
            value={newSectionName}
            onChange={(e) => setNewSectionName(e.target.value)}
          />
          <button
            onClick={addSection}
            className="bg-black text-white px-4 rounded hover:bg-gray-800"
          >
            Add
          </button>
        </div>

        {/* SECTION LIST */}
        <div className="space-y-2">
          {sections.map((sec) => (
            <div
              key={sec._id}
              className="flex items-center justify-between border rounded p-2"
            >
              {editingSectionId === sec._id ? (
                <>
                  <input
                    className="border rounded p-1 flex-1 mr-2"
                    value={editingSectionName}
                    onChange={(e) =>
                      setEditingSectionName(e.target.value)
                    }
                  />
                  <button
                    onClick={() => updateSection(sec._id)}
                    className="bg-green-100 text-green-600 px-3 py-1 rounded mr-1"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingSectionId(null)}
                    className="bg-gray-200 px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span className="font-medium">
                    {sec.name}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingSectionId(sec._id)
                        setEditingSectionName(sec.name)
                      }}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteSection(sec._id)}
                      className="bg-red-100 text-red-600 px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}

          {sections.length === 0 && (
            <p className="text-sm text-gray-400">
              No FAQ sections added yet
            </p>
          )}
        </div>
      </div>


      {/* ================= ADD FAQ FORM ================= */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-xl p-4 space-y-3 mb-8"
      >
        {/* CATEGORY SELECT */}
        <select
          value={category}
          onChange={(e) => {
            const val = e.target.value
            setCategory(val)

            if (val === "FAQ_PAGE") {
              setType("faqPage")
            } else {
              setType("category")
              setSection("")
            }
          }}
          className="border rounded-lg p-3 w-full"
          required
        >
          <option value="">Select Category</option>
          <option value="FAQ_PAGE">FAQ Page</option>

          {categories.map((cat) => (
            <option key={cat._id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>

        {/* FAQ PAGE SECTION (DYNAMIC) */}
        {category === "FAQ_PAGE" && (
          <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="border rounded-lg p-3 w-full"
            required
          >
            <option value="">Select FAQ Section</option>
            {sections.map((sec) => (
              <option key={sec._id} value={sec._id}>
                {sec.name}
              </option>
            ))}
          </select>
        )}

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
          className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
        >
          <PlusCircle size={16} />
          Add FAQ
        </button>
      </form>

      {/* ================= FAQ TABLE ================= */}
      <div className="overflow-x-auto">
        <table className="w-full border rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Category / Section</th>
              <th className="p-3 text-left">Question / Answer</th>
              <th className="p-3 text-center w-36">Actions</th>
            </tr>
          </thead>

          <tbody>
            {faqs.map((faq, index) => (
              <tr key={faq._id} className={index % 2 ? "bg-gray-50" : ""}>
                {/* CATEGORY */}
                <td className="p-3 text-sm">
                  {editingRowId === faq._id ? (
                    <>
                      <select
                        value={editCategory}
                        onChange={(e) => {
                          const val = e.target.value
                          setEditCategory(val)
                          if (val !== "FAQ_PAGE") setEditSection("")
                        }}
                        className="border rounded p-2 w-full mb-1"
                      >
                        <option value="FAQ_PAGE">FAQ Page</option>
                        {categories.map((cat) => (
                          <option key={cat._id} value={cat.name}>
                            {cat.name}
                          </option>
                        ))}
                      </select>

                      {editCategory === "FAQ_PAGE" && (
                        <select
                          value={editSection}
                          onChange={(e) => setEditSection(e.target.value)}
                          className="border rounded p-2 w-full"
                        >
                          {sections.map((sec) => (
                            <option key={sec._id} value={sec._id}>
                              {sec.name}
                            </option>
                          ))}
                        </select>
                      )}
                    </>
                  ) : faq.category === "FAQ_PAGE" ? (
                    <>
                      FAQ Page
                      <div className="text-xs text-gray-500">
                        {faq.section?.name}
                      </div>
                    </>
                  ) : (
                    faq.category
                  )}
                </td>

                {/* QUESTION / ANSWER */}
                <td className="p-3 text-sm">
                  {editingRowId === faq._id ? (
                    <>
                      <input
                        className="border rounded p-2 w-full mb-1"
                        value={editQuestion}
                        onChange={(e) => setEditQuestion(e.target.value)}
                      />
                      <textarea
                        className="border rounded p-2 w-full"
                        value={editAnswer}
                        onChange={(e) => setEditAnswer(e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <p className="font-medium">{faq.question}</p>
                      <p className="text-xs text-gray-500">{faq.answer}</p>
                    </>
                  )}
                </td>

                {/* ACTIONS */}
                <td className="p-3 text-center">
                  {editingRowId === faq._id ? (
                    <>
                      <button
                        onClick={() => saveInlineEdit(faq._id)}
                        className="bg-green-100 text-green-600 p-2 rounded mr-2"
                      >
                        <Check size={14} />
                      </button>
                      <button
                        onClick={() => setEditingRowId(null)}
                        className="bg-gray-200 p-2 rounded"
                      >
                        ✕
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => startInlineEdit(faq)}
                        className="bg-blue-100 text-blue-600 p-2 rounded mr-2"
                      >
                        <Pencil size={14} />
                      </button>
                      <button
                        onClick={() => handleDelete(faq._id)}
                        className="bg-red-100 text-red-600 p-2 rounded"
                      >
                        <Trash2 size={14} />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
