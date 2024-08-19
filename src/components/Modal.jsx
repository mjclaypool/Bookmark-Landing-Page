import { createPortal } from 'react-dom';

import logo from "../../images/logo-bookmark-light.svg";
import closeIcon from "../../images/icon-close.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";

export default function Modal({onDone}) {
  const navButtons = ["FEATURES", "PRICING", "CONTACT"];

  function handleCloseDrawer() {
    onDone();
  }

  return createPortal(
    <>
      <dialog
        className="fixed top-0 left-0 flex flex-col justify-between w-full h-full bg-dark-blue opacity-95 z-10 py-10 px-8"
        onClose={onDone}
        open
      >
        <div className="flex flex-col w-full items-center font-rubik text-lg text-white">
          <div className="flex justify-between items-center w-full mb-10">
            <img src={logo} alt="Bookmark logo" />
            <button type="button" aria-label="navigation-menu-close" onClick={handleCloseDrawer}>
              <img src={closeIcon} alt="Close Icon" />
            </button>
          </div>
          <hr className="w-full opacity-20" />
          {navButtons.map(button => (
            <div key={button} className="flex flex-col items-center w-full tracking-widest">
              <button type="button" className="py-4">{button}</button>
              <hr className="w-full opacity-20" />
            </div>
          ))}
          <button type="button" className="w-full border-2 border-white rounded-md py-2 my-6 tracking-widest">LOGIN</button>
        </div>
        <div className="flex justify-center items-center gap-8 mb-2">
          <img src={facebook} alt="Facebook icon" className="cursor-pointer" />
          <img src={twitter} alt="Twitter icon" className="cursor-pointer" />
        </div>
      </dialog>
    </>,
    document.getElementById('modal')
  );
}