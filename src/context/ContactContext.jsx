import { createContext, useEffect, useState } from "react";
import api from "../api/axios";

export const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("default");

  const getContacts = async () => {
    const res = await api.get("/contacts");
    setContacts(res.data);
  };

  const addContact = async (contact) => {
    await api.post("/contacts", contact);
    getContacts();
  };

  const updateContact = async (id, contact) => {
    await api.put(`/contacts/${id}`, contact);
    getContacts();
  };

  const deleteContact = async (id) => {
    if (window.confirm("Are you sure?")) {
      await api.delete(`/contacts/${id}`);
      getContacts();
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <ContactContext.Provider
      value={{
        contacts,
        addContact,
        updateContact,
        deleteContact,
        search,
        setSearch,
        filter,
        setFilter,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
