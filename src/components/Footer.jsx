import logo from "../../images/logo-bookmark-dark.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";

export default function Footer() {
  return (
    <footer className="flex justify-between gap-8 bg-dark-blue py-6 px-40">
      <div className="flex gap-16">
        <div className="w-[148px]">
          <img src={logo} alt="Bookmark company logo" />
        </div>
        <nav className="flex gap-8 font-rubik">
          <button className="text-white text-sm p-1 hover:text-soft-red" type="button">FEATURES</button>
          <button className="text-white text-sm p-1 hover:text-soft-red" type="button">PRICING</button>
          <button className="text-white text-sm p-1 hover:text-soft-red" type="button">CONTACT</button>
        </nav>
      </div>
      <div className="flex gap-8">
        <div className="shrink-0">
          <img src={facebook} alt="Facebook icon" className="cursor-pointer" />
        </div>
        <div className="shrink-0">
          <img src={twitter} alt="Twitter icon" className="cursor-pointer" />
        </div>
      </div>
    </footer>
  )
}