import CTA from "../UI/CTA";

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center px-6 pt-16 pb-16 lg:pb-20 bg-soft-blue">
      <div className="text-center font-rubik max-w-[476px]">
        <p className="text-white text-sm tracking-widest mb-2 lg:mb-10">35,000+ ALREADY JOINED</p>
        <h2 className="text-white text-2xl lg:text-3xl font-bold">Stay up-to-date with what we're doing</h2>
        <div className="flex flex-col lg:flex-row justify-center gap-4 mt-6">
          <input placeholder="Enter your email address" className="w-full lg:w-2/3 placeholder:text-stone-300 text-sm rounded-md px-4 py-2"></input>
          <CTA color="red">Contact Us</CTA>
        </div>
      </div>
    </div>
  )
}