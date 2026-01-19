import { useContext, useState } from "react";
import { ContactContext } from "../context/ContactContext";

const ContactModal = ({ contact, close }) => {
  const { updateContact, deleteContact } = useContext(ContactContext);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState(contact);

  const save = () => {
    updateContact(contact.id, data);
    setEdit(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-[420px] rounded shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Contact Details</h3>

        {!edit ? (
          <>
            <p><b>First Name:</b> {contact.firstName}</p>
            <p><b>Last Name:</b> {contact.lastName}</p>
            <p><b>Email:</b> {contact.email}</p>
            <p><b>Phone:</b> {contact.phone}</p>
            <p><b>Address:</b> {contact.address}</p>

            <div className="flex gap-2 mt-6">
              <button onClick={() => setEdit(true)} className="bg-teal-500 text-white px-4 py-2 rounded">
                Edit
              </button>
              <button onClick={() => deleteContact(contact.id)} className="border border-red-500 text-red-500 px-4 py-2 rounded">
                Delete
              </button>
              <button onClick={close} className="border px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            {["firstName","lastName","email","phone","address"].map((f)=>(
              <input
                key={f}
                value={data[f]}
                onChange={(e)=>setData({...data,[f]:e.target.value})}
                className="w-full border p-2 mb-2 rounded"
              />
            ))}

            <div className="flex gap-2">
              <button onClick={save} className="bg-blue-500 text-white px-4 py-2 rounded">
                Save
              </button>
              <button onClick={close} className="border px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
