import React from "react";
import "./App.scss";
import { IoSearchSharp } from "react-icons/io5";

import { SearchInput } from "./components/SearchInput";

function App() {
    return (
        <div className="container">
            <SearchInput />
            <div className="button-wrapper">
                <button className="submit">
                    <IoSearchSharp />
                </button>
            </div>
        </div>
    );
}

export default App;
