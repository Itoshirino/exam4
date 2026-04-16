
import React, { useEffect, useState } from "react";
import EditModal from "./EditModal";
import AddModal from "./AddModal";
import axios from "axios";


const Table = ({ todos }) => {
  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [editId, setEditId] = useState();
  const handleEditModal = () => {
    setEditModal(true);
  };

  const handleAddModal = () => {
    setAddModal(true);
  };


  useEffect(() => {
    console.log(editId);
  }, [editId]);
  
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      axios.delete(`http://localhost:3000/todos/${id}`).then((data) => {
        console.log(data)
      });
    } else {
      alert("Cancelled");
    }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0f] p-8">
      {editModal ? (
        <EditModal setEditModal={setEditModal} editId={editId} />
      ) : null}
      {addModal ? <AddModal setAddModal={setAddModal} /> : null}

      <div className="box">{todos ? (
        <button onClick={handleAddModal} className="flex items-center gap-1.5  bg-green-200 px-3 py-1.5 text-xs font-medium text-white-100">
           Create Task
        </button>
      ) : null}</div>

      <table
        style={{ overflowY: "auto", maxHeight: "100vh" }}
        className="w-full border-separate border-spacing-0 overflow-hidden  border border-white/[0.07] bg-white/[0.02]"
      >
        <thead>
          {todos ? (
            <tr className="border-b border-white/[0.07]">
              <th className="px-6 py-4 text-left text-[10px] font-medium   text-white/30">
                T/R
              </th>
              <th className="px-6 py-4 text-left text-[10px] font-medium   text-white/30">
                Title
              </th>
              <th className="px-6 py-4 text-left text-[10px] font-medium   text-white/30">
                Completed
              </th>
            
            </tr>
          ) : null}
        </thead>
        <tbody
          style={{ overflowY: "auto", color: "white", maxHeight: "100vh" }}
        >
          {todos
            ? todos.length
              ? todos.map(
                  (
                    { id, title,completed },
                    index,
                  ) => (
                    <tr
                      key={id}
                    >
                      <td className="px-6 py-4 text-xs font-medium text-white/20">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white/90">
                        {title}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white/90">
                        {completed}
                      </td>
                      <td className=" px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setEditId(id);
                              handleEditModal();
                            }}
                            className="edit__btn flex items-center gap-1.5  bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60  transition-all  hover:bg-white/10 "
                          >
                            Edit
                          </button>
                        
                          <button
                            onClick={() => {
                              handleDelete(id);
                            }}
                            className="delete flex items-center gap-1.5  bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-400  transition-all  hover:bg-red-500/20 "
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ),
                )
              : null
            : null}
        </tbody>
      </table>

      {todos.length === 0 ? (
        <div className="text-center py-12 text-gray-400">No todos</div>
      ) : null}
    </div>
  );
};

export default Table;
