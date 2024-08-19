import { useRef, useState } from "react";
import CTA from "../UI/CTA";

import errorIcon from "../../images/icon-error.svg";

export default function ContactUs() {
  const [isInvalid, setIsInvalid] = useState(false);
  const [borderColor, setBorderColor] = useState('border-transparent bg-transparent')
  const email = useRef();

  function handleSubmit(event) {
    setIsInvalid(false);
    setBorderColor("border-transparent bg-transparent")
    event.preventDefault();

    if(!email.current.value.includes('@') || !email.current.value.includes('.')){
      setBorderColor("border-soft-red bg-soft-red")
      setIsInvalid(true);
    }
  }

  return (
    <div className="flex flex-col items-center px-6 pt-16 pb-16 lg:pb-20 bg-soft-blue">
      <div className="text-center font-rubik max-w-[476px]">
        <p className="text-white text-sm tracking-widest mb-2 lg:mb-10">35,000+ ALREADY JOINED</p>
        <h2 className="text-white text-2xl lg:text-3xl font-bold">Stay up-to-date with what we're doing</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row justify-center mt-6"
        >
          <div className={`${borderColor} lg:w-2/3 lg:mr-2 relative border-2 rounded-md mb-6 lg:mb-0`}>
            <input
              name="email"
              ref={email}
              placeholder="Enter your email address"
              className="w-full placeholder:text-stone-300 text-sm rounded-md px-4 py-2"
            />
            {isInvalid &&
              <>
                <div>
                  <img src={errorIcon} alt="Error icon" className="absolute top-2 right-4" />
                </div>
                <div className="lg:absolute w-full text-left text-white text-sm italic bg-soft-red rounded-b-md px-4 py-2">
                  <p>Whoops, make sure it's an email</p>
                </div>
              </>
            }
          </div>
          <CTA color="red" type="submit">Contact Us</CTA>
        </form>
      </div>
    </div>
  )
}