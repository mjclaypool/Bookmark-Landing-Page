import ExtensionCard from "./ExtensionCard";

import chrome from "../../images/logo-chrome.svg";
import firefox from "../../images/logo-firefox.svg";
import opera from "../../images/logo-opera.svg";

export default function Downloads() {
  return (
    <div className="flex flex-col items-center my-20">
      <div className="text-center font-rubik max-w-[476px]">
        <h2 className="text-dark-blue text-3xl font-bold">Download the extension</h2>
        <p className="text-grey-blue text-base my-6">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
      </div>
      <div className="flex justify-center gap-8">
          <ExtensionCard logo={chrome} name="Chrome" version="62" />
          <ExtensionCard logo={firefox} name="Firefox" version="55" />
          <ExtensionCard logo={opera} name="Opera" version="46" />
        </div>
    </div>
  )
}