import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { VscThreeBars, VscChevronUp } from "react-icons/vsc"

export default function DropDownMenu() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [open, setOpen] = useState("")
    useEffect(() => {
        const handleOpen = () => {
            toggleMenu ? setOpen("open") : setOpen("");
        }
        handleOpen()
    }, [toggleMenu])

    const closeMenu = () => {
        setToggleMenu(prevState => !prevState)
        setOpen("");
    }

    return (
        <>
            <button onClick={() => {
                setToggleMenu(prevState => !prevState)
            }}
                    className="text-blue-400 text-3xl lg:text-4xl"><VscThreeBars />
            </button>

            <div className={`dropdown ${open}`}>
                <button onClick={() => {
                    closeMenu()
                }}
                        className="text-gray-700 text-2xl text-center"><VscChevronUp />
                </button>
                <Link
                    onClick={() => {
                        closeMenu()
                    }}
                    className="hover:text-blue-400"
                    to="/blog">Blog</Link>

            </div >
        </>
    )
}
