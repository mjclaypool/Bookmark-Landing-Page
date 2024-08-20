import logo from "../../images/logo-bookmark-dark.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row lg:justify-between gap-8 bg-dark-blue py-12 lg:py-8 lg:px-40">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="lg:w-[148px]">
          <img src={logo} alt="Bookmark company logo" />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 font-rubik">
          <button className="text-white text-sm p-1 hover:text-soft-red" type="button">FEATURES</button>
          <button className="text-white text-sm p-1 hover:text-soft-red" type="button">PRICING</button>
          <button className="text-white text-sm p-1 hover:text-soft-red" type="button">CONTACT</button>
        </div>
      </div>
      <div className="flex justify-center lg:justify-normal items-center gap-8">
        <FontAwesomeIcon
          icon={faFacebook}
          alt="Font Awesome Facebook-F Icon"
          className="h-[24px] object-contain cursor-pointer text-white hover:text-soft-red"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          alt="Font Awesome Twitter Icon"
          className="h-[24px] object-contain cursor-pointer text-white hover:text-soft-red"
        />
      </div>
    </footer>
  )
}