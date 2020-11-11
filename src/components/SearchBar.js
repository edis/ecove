import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
    const [term, setTerm] = useState("");

    const onFormSubmit = event => {
        event.preventDefault();
        onTermSubmit(term);
    }

    return (
        <div className={"search-bar ui segment"} style={{ marginTop: '2rem'}}>
            <form className={"ui form"} onSubmit={onFormSubmit}>
                <div className={"field"}>
                    <label>Search Products</label>
                    <input
                        type={"text"}
                        onChange={(e) => setTerm(e.target.value)}
                        className={"input"}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;