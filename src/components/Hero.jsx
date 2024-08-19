import CTA from "../UI/CTA.jsx";
import heroImg from "../../images/illustration-hero.svg";
import bgBlob from "../../images/bg-blob.svg";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:px-0 mt-10 mb-20">
      <div className="font-rubik text-center lg:text-start max-w-[780px] lg:w-1/2 lg:pl-40 lg:pr-12">
        <h1 className="text-dark-blue text-3xl lg:text-5xl font-bold px-14 lg:px-0">A Simple Bookmark Manager</h1>
        <p className="text-grey-blue text-base my-4 lg:my-6 px-14 lg:px-0">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        <div className="flex justify-center lg:justify-normal gap-3">
          <CTA color="blue">Get it on Chrome</CTA>
          <CTA color="grey">Get it on Firefox</CTA>
        </div>
      </div>
      <div className="relative w-full h-[70vw] max-h-[480px] lg:w-[700px] lg:h-[480px] mb-12 lg:mb-0" >
        <div className="absolute top-0 lg:left-0 w-full z-20">
          <img src={heroImg} alt="Illustration of a webpage." className="relative left-0 right-0 mx-auto h-full object-contain" />
        </div>
        <div className="absolute lg:w-[500px] lg:h-[340px] h-[70%] w-[80%] z-10 bottom-0 lg:bottom-0 right-0">
          <img src={bgBlob} alt="Blue geometric background shape." className="absolute h-full right-0 object-contain" />
        </div>
      </div>
    </div>
  )
}