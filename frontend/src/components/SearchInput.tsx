import React, { FC, useEffect, useRef, useState } from "react";
import { IoCarSportSharp, IoAirplane, IoBusinessSharp } from "react-icons/io5";
import useOnClickOutside from "../hooks/useClickOutside";

interface ISearchInput {
    text: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    value: string;
    data: any[];
}
export const SearchInput: FC<ISearchInput> = ({
    text,
    setValue,
    value,
    data,
}) => {
    const [isInputOpen, setIsInputOpen] = useState(false);

    useEffect(() => {});
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
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        {!!data.length && value && (
                            <div className="dropdown">
                                <div className="label">
                                    Cities (including airports)
                                </div>
                                {data
                                    .filter((item) => !!item.airportname)
                                    .map((item, index) => (
                                        <div className="section" key={index}>
                                            <div className="icon-text">
                                                <IoBusinessSharp size={28} />
                                                <div className="wrap">
                                                    <p className="names">
                                                        {item.cityname}
                                                    </p>
                                                    <p className="cities">
                                                        {item.country}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                <div className="label">Airports</div>
                                {data
                                    .filter((item) => item.airportname)
                                    .map((item, index) => (
                                        <div className="section" key={index}>
                                            <div className="icon-text">
                                                <IoAirplane
                                                    className="icon-plane"
                                                    size={28}
                                                />
                                                <div className="wrap">
                                                    <p className="names">
                                                        {item.airportname}
                                                    </p>
                                                    <p className="cities">
                                                        {item.cityname}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="code"> {item.id}</p>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
