import React, { FC, useRef, useState } from "react";
import { IoArrowDownCircleSharp } from "react-icons/io5";
import useOnClickOutside from "../hooks/useClickOutside";
import { Choices } from "../types/choices";

interface IDropOff {
    choice: Choices;
    setChoice: React.Dispatch<React.SetStateAction<Choices>>;
}
export const DropOff: FC<IDropOff> = ({ choice, setChoice }) => {
    const [isOpen, setIsOpen] = useState(false);
    const choicesContainer = useRef<HTMLDivElement>(null);

    useOnClickOutside(choicesContainer, () => setIsOpen(false));

    return (
        <div className="dropOff" onClick={() => setIsOpen(!isOpen)}>
            <span className="text ">
                {choice}
                <IoArrowDownCircleSharp
                    className={isOpen ? "iconActive" : "iconInactive"}
                />
            </span>
            {isOpen && (
                <div className="choices" ref={choicesContainer}>
                    <div
                        onClick={() => setChoice("Same drop-off")}
                        className={
                            choice === "Same drop-off" ? "activeChoice" : ""
                        }
                    >
                        Same drop-off
                    </div>
                    <div
                        onClick={() => setChoice("Different drop-off")}
                        className={
                            choice === "Different drop-off"
                                ? "activeChoice"
                                : ""
                        }
                    >
                        Different drop-off
                    </div>
                </div>
            )}
        </div>
    );
};
