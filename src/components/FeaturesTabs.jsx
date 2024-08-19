import { useState } from "react"
import CTA from "../UI/CTA";

import featImg1 from "../../images/illustration-features-tab-1.svg";
import featImg2 from "../../images/illustration-features-tab-2.svg";
import featImg3 from "../../images/illustration-features-tab-3.svg";
import bgBlob from "../../images/bg-blob.svg";

export default function FeaturesTabs() {
  const [tab, setTab] = useState("bookmarking");
  const [tabStyle, setTabStyle] = useState({
    bookmarking: "text-dark-blue border-b-soft-red",
    searching: "text-grey-blue border-b-transparent",
    sharing: "text-grey-blue border-b-transparent",
  });
  const content = {
    bookmarking: {
      title: "Bookmark in one click",
      text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      img: featImg1,
    },
    searching: {
      title: "Intelligent search",
      text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      img: featImg2,
    },
    sharing: {
      title: "Share your bookmarks",
      text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      img: featImg3,
    },
  }

  function handleClick(id) {
    setTab(id);
    if (id == "bookmarking"){
      setTabStyle(tabStyle => ({
        ...tabStyle,
        bookmarking: "text-dark-blue border-b-soft-red",
        searching: "text-grey-blue border-b-transparent",
        sharing: "text-grey-blue border-b-transparent",
      }))
    } else if (id == "searching"){
      setTabStyle(tabStyle => ({
        ...tabStyle,
        bookmarking: "text-grey-blue border-b-transparent",
        searching: "text-dark-blue border-b-soft-red",
        sharing: "text-grey-blue border-b-transparent",
      }))
    } else if (id == "sharing"){
      setTabStyle(tabStyle => ({
        ...tabStyle,
        bookmarking: "text-grey-blue border-b-transparent",
        searching: "text-grey-blue border-b-transparent",
        sharing: "text-dark-blue border-b-soft-red",
      }))
    }
  }

  return (
    <div className="flex flex-col items-center font-rubik my-6">
      <div className="w-[80vw] lg:w-[670px]">
        <hr className="lg:hidden"/>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <button
            type="button"
            className={`${tabStyle.bookmarking} lg:w-1/3 px-8 py-4 cursor-pointer border-b-4 hover:text-soft-red`}
            onClick={() => handleClick("bookmarking")}
          >
            Simple Bookmarking
          </button>
          <hr className="w-[80vw] lg:hidden"/>
          <button
            type="button"
            className={`${tabStyle.searching} lg:w-1/3 px-8 py-4 cursor-pointer border-b-4 hover:text-soft-red`}
            onClick={() => handleClick("searching")}
          >
            Speedy Searching
          </button>
          <hr className="w-[80vw] lg:hidden"/>
          <button
            type="button"
            className={`${tabStyle.sharing} lg:w-1/3 px-8 py-4 cursor-pointer border-b-4 hover:text-soft-red`}
            onClick={() => handleClick("sharing")}
          >
            Easy Sharing
          </button>
        </div>
        <hr />
      </div>
      <div className="flex flex-col lg:flex-row w-[100vw] justify-center items-center gap-24 my-12">
        <div className="relative flex flex-col w-[100vw] lg:w-[50vw] items-center lg:items-end">
          <img
            src={content[tab].img}
            alt="Feature illustration"
            className="relative lg:max-w-[440px] max-h-[284px] object-contain px-12 lg:px-0 z-20"
          />
          <img
            src={bgBlob}
            alt="Blue geometric background shape."
            className="absolute w-[60vw] lg:w-[45vw] h-full lg:h-[95%] left-0 -bottom-12 z-10 rotate-180"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start text-center max-w-[476px] lg:max-w-full lg:text-start lg:w-[50vw] lg:pr-12">
          <h3 className="text-dark-blue text-2xl lg:text-3xl font-bold">{content[tab].title}</h3>
          <p className="text-grey-blue text-base lg:max-w-[410px] my-4 lg:my-6 px-6 lg:px-0">{content[tab].text}</p>
          <div>
            <CTA color="blue">More Info</CTA>
          </div>
        </div>
      </div>
    </div>
  )
}