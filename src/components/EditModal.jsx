import axios from "axios";
import { useEffect, useState } from "react";

const EditModal = ({ setEditModal, editId }) => {
  const [formData, setFormData] = useState({
    id: editId,
    title: "",
    completed: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/todos/${editId}`).then((data) => {
      const res = data?.data;
      setFormData({
        name: res?.name,
        completed: res?.completed
      });
    });
  }, [editId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/todos/${editId}`, formData)
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 ">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d14]">
        <div className="absolute inset-x-0 top-0 h-px " />
        <div className="absolute -top-20 left-1/2 h-40 w-60 -translate-x-1/2 " />

        <div className="relative px-8 pt-8 pb-6">
          
          <h2 className="mt-1 text-2xl font-light tracking-tight text-white">
            Edit Product
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="relative px-8 pb-8 space-y-4">
          <div>
            <input
              required
              onChange={handleChange}
              type="text"
              placeholder="write title"
              name="title"
              value={formData.title}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 "
            />
          </div>

          <div >
            <input
              required
              onChange={handleChange}
              type="text"
              placeholder="write completed"
              name="completed"
              value={formData.completed}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-emerald-400 placeholder-white/20 "
            />
          </div>

         

         

          <div className="my-2 h-px bg-white/[0.06]" />

          <div className="box flex gap-3 pt-1 ">
            <button
              type="submit"
              className="relative btn flex-1 overflow-hidden rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white "
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEditModal(false)}
              className="flex-1 btn2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
