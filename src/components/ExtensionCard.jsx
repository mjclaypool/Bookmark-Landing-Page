import CTA from "../UI/CTA";

import dots from "../../images/bg-dots.svg"

export default function ExtensionCard({ logo, name, version }) {
  return (
    <div className="w-[280px] h-[340px] rounded-xl shadow-lg">
      <div className="flex flex-col h-full items-center justify-between">
        <div className="flex flex-col items-center">
          <div className="my-6">
            <img src={logo} alt={`${name} logo`} />
          </div>
          <h3 className="text-dark-blue text-xl font-semibold">Add to {name}</h3>
          <p className="text-grey-blue text-base my-1">Minimum version {version}</p>
        </div>
        <div>
          <img src={dots} />
          <div className="flex justify-center my-6">
            <CTA color="blue" >Add & Install Extension</CTA>
          </div>
        </div>
      </div>
    </div>
  )
}