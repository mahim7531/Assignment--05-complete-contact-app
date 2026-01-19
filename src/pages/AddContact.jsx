import { useContext, useState } from "react";
import { ContactContext } from "../context/ContactContext";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const { addContact } = useContext(ContactContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const submit = (e) => {
    e.preventDefault();
    addContact(form);
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white rounded shadow">
      <h2 className="bg-slate-600 text-white text-xl p-4 rounded-t">
        Add New Contact
      </h2>

      <form onSubmit={submit} className="p-6 space-y-4">
        {Object.keys(form).map((f) => (
          <input
            key={f}
            placeholder={f}
            className="w-full border p-2 rounded"
            onChange={(e) => setForm({ ...form, [f]: e.target.value })}
          />
        ))}

        <div className="flex gap-3">
          <button className="bg-blue-500 text-white px-6 py-2 rounded">
            Save
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="border px-6 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
