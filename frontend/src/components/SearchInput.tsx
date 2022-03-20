import React, { FC, useRef, useState } from "react";
import { IoCarSportSharp } from "react-icons/io5";
import useOnClickOutside from "../hooks/useClickOutside";
export const SearchInput: FC = () => {
    const [isInputOpen, setIsInputOpen] = useState(false);

    const input = useRef<HTMLDivElement>(null);

    useOnClickOutside(input, () => setIsInputOpen(false));

    return (
        <div className="search-component">
            <div className="fake-input" onClick={() => setIsInputOpen(true)}>
                <IoCarSportSharp />
                <p className="text">From?</p>
            </div>
            {isInputOpen && (
                <div className="real-input" ref={input}>
                    <div className="input-wrapper">
                        <IoCarSportSharp className="icon" />

                        <input
                            type="text"
                            placeholder="From?"
                            className="search"
                            autoFocus
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
