import React, { useState } from "react";
import "./App.scss";
import { IoSearchSharp } from "react-icons/io5";

import { SearchInput } from "./components/SearchInput";
import { DropOff } from "./components/DropOff";
import { Choices } from "./types/choices";

function App() {
    const [choice, setChoice] = useState<Choices>("Same drop-off");

    return (
        <div className="container">
            <DropOff choice={choice} setChoice={setChoice} />
            <div className="flex">
                <SearchInput text="From?" name="from" />
                {choice === "Different drop-off" && (
                    <SearchInput text="To?" name="to" />
                )}
                <div className="button-wrapper">
                    <button className="submit">
                        <IoSearchSharp />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
