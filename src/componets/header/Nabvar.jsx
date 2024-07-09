import { useState } from "react";
import lupa from "/public/search.svg"

export const Nabvar = ({ data, setBooks }) => {
  const [searchValue, setSearchValue] = useState("");

  const searchBook = () => {
    const rs = data.filter((book) =>
      book.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setBooks(rs);
  };

  return (
    <div className="nav_container">
         Buscar titulo :
        <input
          type="text"
          name=""
          onChange={(e) => setSearchValue(e.target.value)}
        />
      <button onClick={searchBook}>Search</button>
    </div>
  );
};

{/* <img src={lupa} alt="lupa icon" /> */}