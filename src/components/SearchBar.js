import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
    const [term, setTerm] = useState("");

    const onFormSubmit = event => {
        event.preventDefault();
        if(term){
            onTermSubmit(term);
            setTerm("");
        }
    };

    return (
        <div className={"search-bar ui segment"} style={{ margin: '2rem 0'}}>
            <form className={"ui form"} onSubmit={onFormSubmit}>
                <div className={"field"}>
                    <label>Search Products</label>
                    <input
                        type={"text"}
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className={"input"}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;