import React from 'react';

const SearchBar = () => {
   return (
       <div className={"search-bar ui segment"}>
          <form className={"ui form"}>
             <div className={"field"}>
                <label>Item Search</label>
                <input type={"text"}  />
             </div>
          </form>
       </div>
   );
};

export default SearchBar;