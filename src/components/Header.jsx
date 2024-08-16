import CTA from "../UI/CTA.jsx";

import hamburger from "../../images/icon-hamburger.svg";
import logo from "../../images/logo-bookmark.svg";

export default function Header() {
  return (
    <header className="flex justify-between gap-8 items-center my-10 px-6 lg:px-40">
      <div className="shrink-0">
        <img src={logo} alt="Bookmark company logo" />
      </div>
      <nav className="hidden lg:flex gap-8 font-rubik text-sm text-dark-blue">
        <button className="p-1 hover:text-soft-red" type="button">FEATURES</button>
        <button className="p-1 hover:text-soft-red" type="button">PRICING</button>
        <button className="p-1 hover:text-soft-red mr-6" type="button">CONTACT</button>
        <CTA color="red" >LOGIN</CTA>
      </nav>
      <div className="lg:hidden cursor-pointer p-1">
        <img src={hamburger} alt="Hamburger menu icon" />
      </div>
    </header>
  )
}