import React, { FC, useRef, useState } from "react";
import { IoCarSportSharp } from "react-icons/io5";
import useOnClickOutside from "../hooks/useClickOutside";

interface ISearchInput {
    text: string;
    name: string;
}
export const SearchInput: FC<ISearchInput> = ({ text, name }) => {
    const [isInputOpen, setIsInputOpen] = useState(false);

    const input = useRef<HTMLDivElement>(null);

    useOnClickOutside(input, () => setIsInputOpen(false));

    return (
        <div className="search-component">
            <div className="fake-input" onClick={() => setIsInputOpen(true)}>
                <IoCarSportSharp />
                <p className="text">{text}</p>
            </div>
            {isInputOpen && (
                <div className="real-input" ref={input}>
                    <div className="input-wrapper">
                        <IoCarSportSharp className="icon" />

                        <input
                            type="text"
                            placeholder={text}
                            className="search"
                            autoFocus
                            name={name}
                        />
                        <div className="dropdown">
                            <div className="label">
                                Cities (including airports)
                            </div>
                            <div className="section"></div>
                            <div className="label">Airports</div>
                            <div className="section"></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
