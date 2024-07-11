import { useState } from "react";
import lupa from "/public/search.svg"

export const Nabvar = ({ data, setBooks }) => {
  const [searchValue, setSearchValue] = useState("");
  const [sug, setSug] = useState([])

  const searchBook = () => {
    const rs = data.filter((book) =>
      book.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setBooks(rs);
  };

  const hanleSearchImput = (e) => {
    setSearchValue(e.target.value)
    if (e.target.value === '') {
      setSug([])
      return
    }
    const rs = data.filter((book) =>
      book.title.toLowerCase().includes(searchValue.toLowerCase()));
      setSug(rs.slice(0, 5))
  }

  return (
    <nav className="nav_container">
         Buscar titulo :
       <div className="input_search_list">
       <input
          type="text"
          name=""
          id=""
          className="search_input"
          value={searchValue}
          onChange={hanleSearchImput}
        />
          {sug.length != 0 &&
         <ul className="option_list">
          {sug.map(s => 

            <li>{s.title}</li>

          )}
         </ul>
         }
       </div>

       <button onClick={searchBook}>Search </button>
       
    </nav>
  );
};

{/* <img src={lupa} alt="lupa icon" /> */}