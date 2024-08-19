import ExtensionCard from "./ExtensionCard";

import chrome from "../../images/logo-chrome.svg";
import firefox from "../../images/logo-firefox.svg";
import opera from "../../images/logo-opera.svg";

export default function Downloads() {
  return (
    <div className="flex flex-col items-center px-6 my-20">
      <div className="text-center font-rubik max-w-[476px]">
        <h2 className="text-dark-blue text-2xl lg:text-3xl font-bold">Download the extension</h2>
        <p className="text-grey-blue text-base my-4 lg:my-6">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between lg:h-[440px] lg:w-[900px] my-4">
        <div className="lg:self-start">
          <ExtensionCard logo={chrome} name="Chrome" version="62" />
        </div>
        <div className="lg:self-center">
          <ExtensionCard logo={firefox} name="Firefox" version="55" />
        </div>
        <div className="lg:self-end">
          <ExtensionCard logo={opera} name="Opera" version="46" />
        </div>
      </div>
    </div>
  )
}