import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import { Link } from "react-router-dom";

const SearchFilter = () => {
  const { setSearch, filter, setFilter } = useContext(ContactContext);

  return (
    <div className="max-w-6xl mx-auto mt-6 bg-slate-600 p-4 rounded-lg flex items-center gap-4">
      
      <h2 className="text-white text-2xl font-semibold flex-1">
        All Contacts
      </h2>

      <input
        type="text"
        placeholder="search contact"
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-2 rounded w-64 border border-black-300 focus:outline-none"

      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="px-3 py-2 rounded border"
      >
        <option value="default">Default</option>
        <option value="fname">First Name (A-Z)</option>
        <option value="lname">Last Name (A-Z)</option>
        <option value="old">Oldest First</option>
      </select>

      <Link to="/add">
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-semibold">
          + Add New
        </button>
      </Link>
    </div>
  );
};

export default SearchFilter;
