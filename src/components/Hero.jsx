import CTA from "../UI/CTA.jsx";
import heroImg from "../../images/illustration-hero.svg";
import bgBlob from "../../images/bg-blob.svg";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:px-0 mt-10 lg:mt-20 mb-32">
      <div className="font-rubik text-center lg:text-start max-w-[476px] lg:max-w-[780px] lg:w-1/2 lg:pl-40 lg:pr-24">
        <h1 className="text-dark-blue text-3xl lg:text-5xl font-bold px-6 lg:px-0">A Simple Bookmark Manager</h1>
        <p className="text-grey-blue text-base my-4 lg:my-6 px-6 lg:px-0">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        <div className="flex justify-center lg:justify-normal gap-3 my-8 lg:my-0">
          <CTA color="blue">Get it on Chrome</CTA>
          <CTA color="grey">Get it on Firefox</CTA>
        </div>
      </div>
      <div className="relative flex flex-col w-[100vw] lg:w-[48vw] items-center lg:items-start mb-20 lg:mb-0">
        <img
          src={heroImg}
          alt="Illustration of a webpage"
          className="relative lg:w-[620px] object-contain px-6 lg:px-0 z-20"
        />
        <img
          src={bgBlob}
          alt="Blue geometric background shape."
          className="absolute w-[75vw] lg:w-[75%] h-[80%] right-0 -bottom-2 lg:-bottom-8 z-10"
        />
      </div>
    </div>
  )
}