import axios from "axios";
import React, { useState } from "react";

const AddModal = ({ setAddModal }) => {
  const [addFormData, setAddFormData] = useState({
    title: "",
    completed: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setAddFormData({
      ...addFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3000/todos`, addFormData).then(() => {
      setAddModal(false);
    });
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d14]  ">
        <div className="absolute inset-x-0 top-0 h-px " />
        <div className="absolute -top-20 left-1/2 h-40 w-60" />

        <div className="relative px-8 pt-8 pb-6">
          <p className="text-[10px] font-semibold ">
            Dashboard
          </p>
          <h2 className="mt-1 text-2xl font-lightt text-white">
            Add Product
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="relative px-8 pb-8 ">
          <div >
            
            <input
              required
              onChange={handleChange}
              type="text"
              placeholder="write title"
              name="title"
              value={addFormData.title}
              className="w-full  border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 "
            />
          </div>

          <div >
            <input
              required
              onChange={handleChange}
              type="text"
              placeholder="write completed"
              name="completed"
              value={addFormData.completed}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3  placeholder-white/20 "
            />
          </div>

        

          <div className="my-2 h-px bg-white/[0.06]" />

          <div className="box flex gap-3 pt-1 ">
            <button
              type="submit"
              className="relative btn flex-1 overflow-hidden rounded-xl "
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setAddModal(false)}
              className="flex-1 btn2  border border-white/10"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
