// import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faSearch } from "@fortawesome/free-solid-svg-icons"


// const PreviousSearch = () => {

//     const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup']

//     return (
//         <div className="previous-searches section">
//             <h2>Previous Searches</h2>
//             <div className="previous-searches-container">
//                 {searches.map((search, index) => (<div key={index} style={{ animationDelay: index * .1 + "s" }} className="search-item">
//                     {search}
//                 </div>))}
//             </div>
//             <div className="search-box">
//                 <input type="text" placeholder="Search ..." />
//                 <button className="btn">
//                     <FontAwesomeIcon icon={faSearch} />
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default PreviousSearch;





import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const PreviousSearch = ({ searches, onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput("");
    }
  };

  return (
    <div className="previous-searches section">
      <h2>Previous Searches</h2>
      <div className="previous-searches-container">
        {searches.map((search, index) => (
          <div
            key={index}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="search-item"
            onClick={() => onSearch(search)}
          >
            {search}
          </div>
        ))}
      </div>
      <form className="search-box" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

export default PreviousSearch;
