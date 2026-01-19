import { useContext, useState } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactModal from "./ContactModal";

const ContactRow = ({ contact, index }) => {
  const { deleteContact } = useContext(ContactContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr className="border-b hover:bg-gray-50">
        <td className="p-3">{index + 1}</td>
        <td className="p-3">{contact.firstName}</td>
        <td className="p-3">{contact.lastName}</td>
        <td className="p-3">{contact.email}</td>
        <td className="p-3">{contact.phone}</td>
        <td className="p-3 flex justify-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="border border-blue-400 text-blue-500 px-2 py-1 rounded-full"
          >
            👁
          </button>
          <button
            onClick={() => deleteContact(contact.id)}
            className="border border-red-400 text-red-500 px-2 py-1 rounded-full"
          >
            ✕
          </button>
        </td>
      </tr>

      {open && <ContactModal contact={contact} close={() => setOpen(false)} />}
    </>
  );
};

export default ContactRow;
