import { useState } from "react";

import Modal from "./Modal.jsx";
import CTA from "../UI/CTA.jsx";

import hamburger from "../../images/icon-hamburger.svg";
import logo from "../../images/logo-bookmark.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function handleShowModal() {
    setIsOpen(true);
  }

  function handleDone() {
    setIsOpen(false);
  }

  return (
    <header className="flex justify-between h-[130px] gap-8 items-center px-6 lg:px-40">
      {!isOpen ?
        <>
          <div className="shrink-0">
            <img src={logo} alt="Bookmark company logo" />
          </div>
          <nav className="hidden lg:flex gap-10 font-rubik text-sm text-dark-blue">
            <button className="p-1 hover:text-soft-red" type="button">FEATURES</button>
            <button className="p-1 hover:text-soft-red" type="button">PRICING</button>
            <button className="p-1 hover:text-soft-red mr-6" type="button">CONTACT</button>
            <CTA color="red" >LOGIN</CTA>
          </nav>
          <div className="lg:hidden cursor-pointer p-1" onClick={handleShowModal}>
            <img src={hamburger} alt="Hamburger menu icon" />
          </div>
        </>
      :
        <Modal onDone={handleDone}/>
      }
    </header>
  )
}