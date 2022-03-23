import React, { useEffect, useState } from "react";
import "./App.scss";
import { IoSearchSharp } from "react-icons/io5";

import { SearchInput } from "./components/SearchInput";
import { DropOff } from "./components/DropOff";
import { Choices } from "./types/choices";
import useDebounce from "./hooks/useDebounce";
import axios from "axios";

function App() {
    const [choice, setChoice] = useState<Choices>("Same drop-off");
    const [error, setError] = useState<null | Error>(null);
    const [data, setData] = useState([]);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const debouncedTo = useDebounce<string>(to, 200);
    const debouncedFrom = useDebounce<string>(from, 200);
    const autoComplete = async (search: string) => {
        try {
            const res = await axios.get(
                `http://localhost:3001/autocomplete?search=${search}`
            );
            setData(res.data.records);
        } catch (e: any) {
            setData([]);
            setError(e);
        }
    };
    useEffect(() => {
        autoComplete(debouncedFrom);
    }, [debouncedFrom]);
    useEffect(() => {
        autoComplete(debouncedTo);
    }, [debouncedTo]);
    return (
        <>
            <div className="container">
                <DropOff choice={choice} setChoice={setChoice} />
                <div className="flex">
                    <SearchInput
                        text="From?"
                        setValue={setFrom}
                        value={from}
                        data={data}
                    />
                    {choice === "Different drop-off" && (
                        <SearchInput
                            text="To?"
                            setValue={setTo}
                            value={to}
                            data={data}
                        />
                    )}
                    <div className="button-wrapper">
                        <button className="submit">
                            <IoSearchSharp />
                        </button>
                    </div>
                </div>
            </div>
            {error && <p>{error.message}</p>}
        </>
    );
}

export default App;
