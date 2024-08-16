import CTA from "../UI/CTA.jsx";
import heroImg from "../../images/illustration-hero.svg";

export default function Hero() {
  return (
    <div className="flex items-center my-20">
      <div className="font-rubik max-w-[780px] px-40">
        <h1 className="text-dark-blue text-5xl font-bold">A Simple Bookmark Manager</h1>
        <p className="text-grey-blue text-base my-6">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        <div className="flex gap-3">
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