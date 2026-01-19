import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactRow from "./ContactRow";

const ContactList = () => {
  const { contacts, search, filter } = useContext(ContactContext);

  let filtered = contacts.filter(
    (c) =>
      c.firstName.toLowerCase().includes(search.toLowerCase()) ||
      c.lastName.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  );

  if (filter === "fname") filtered.sort((a, b) => a.firstName.localeCompare(b.firstName));
  if (filter === "lname") filtered.sort((a, b) => a.lastName.localeCompare(b.lastName));
  if (filter === "old") filtered.sort((a, b) => a.id - b.id);

  if (filtered.length === 0) {
    return (
      <h3 className="text-center text-xl mt-10 text-gray-500">
        No Contact Information
      </h3>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-6 bg-white rounded shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">First Name</th>
            <th className="p-3 text-left">Last Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((c, i) => (
            <ContactRow key={c.id} contact={c} index={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
