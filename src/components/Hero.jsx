import CTA from "../UI/CTA.jsx";
import heroImg from "../../images/illustration-hero.svg";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center px-6 lg:px-0 my-20">
      <div className="font-rubik text-center lg:text-start max-w-[780px] lg:px-40">
        <h1 className="text-dark-blue text-3xl lg:text-5xl font-bold">A Simple Bookmark Manager</h1>
        <p className="text-grey-blue text-base my-4 lg:my-6">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        <div className="flex justify-center lg:justify-normal gap-3">
          <CTA color="blue">Get it on Chrome</CTA>
          <CTA color="grey">Get it on Firefox</CTA>
        </div>
      </div>
      <div>
        <img src={heroImg} alt="Illustration of a webpage." />
      </div>
    </div>
  )
}