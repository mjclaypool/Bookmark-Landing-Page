import FeaturesTabs from "./FeaturesTabs";

export default function Features() {
  return (
    <div className="flex flex-col items-center my-20 lg:mb-56">
      <div className="text-center font-rubik max-w-[476px]">
        <h2 className="text-dark-blue text-2xl lg:text-3xl font-bold">Features</h2>
        <p className="text-grey-blue text-base my-4 lg:my-6 px-6 lg:px-0 leading-relaxed">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
      </div>
      <FeaturesTabs />
    </div>
  )
}