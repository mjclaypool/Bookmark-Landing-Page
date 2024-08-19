import FAQAccordion from "./FAQAccordion";
import CTA from "../UI/CTA";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center px-6 my-32">
      <div className="text-center font-rubik max-w-[476px]">
        <h2 className="text-dark-blue text-2xl lg:text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-grey-blue text-base my-4 lg:my-6">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
        <FAQAccordion />
        <CTA color="blue">More Info</CTA>
      </div>
    </div>
  )
}