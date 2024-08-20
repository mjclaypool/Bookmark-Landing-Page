import { useState } from "react"
import { motion } from "framer-motion"
import CTA from "../UI/CTA";

import featImg1 from "../../images/illustration-features-tab-1.svg";
import featImg2 from "../../images/illustration-features-tab-2.svg";
import featImg3 from "../../images/illustration-features-tab-3.svg";
import bgBlob from "../../images/bg-blob.svg";

export default function FeaturesTabs() {
  const [tab, setTab] = useState("bookmarking");
  const [tabStyle, setTabStyle] = useState({
    bookmarking: "text-dark-blue",
    searching: "text-grey-blue",
    sharing: "text-grey-blue",
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
        bookmarking: "text-dark-blue",
        searching: "text-grey-blue",
        sharing: "text-grey-blue",
      }))
    } else if (id == "searching"){
      setTabStyle(tabStyle => ({
        ...tabStyle,
        bookmarking: "text-grey-blue",
        searching: "text-dark-blue",
        sharing: "text-grey-blue",
      }))
    } else if (id == "sharing"){
      setTabStyle(tabStyle => ({
        ...tabStyle,
        bookmarking: "text-grey-blue",
        searching: "text-grey-blue",
        sharing: "text-dark-blue",
      }))
    }
  }

  return (
    <div className="flex flex-col items-center font-rubik my-7">
      <div className="w-[80vw] lg:w-[670px]">
        <hr className="lg:hidden"/>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex flex-col">
            <button
              type="button"
              className={`${tabStyle.bookmarking} px-8 py-4 cursor-pointer hover:text-soft-red`}
              onClick={() => handleClick("bookmarking")}
            >
              Simple Bookmarking
            </button>
            {tab == "bookmarking" ?
              <motion.div layoutId="tab-indicator" className="w-full border-b-4 border-b-soft-red" />
            :
              <div className="border-b-4 border-transparent"/>
            }
          </div>
          <hr className="w-[80vw] lg:hidden"/>
          <div className="flex flex-col">
            <button
              type="button"
              className={`${tabStyle.searching} px-8 py-4 cursor-pointer hover:text-soft-red`}
              onClick={() => handleClick("searching")}
            >
              Speedy Searching
            </button>
            {tab == "searching" ?
              <motion.div layoutId="tab-indicator" className="w-full border-b-4 border-b-soft-red" />
            :
              <div className="border-b-4 border-transparent"/>
            }
          </div>
          <hr className="w-[80vw] lg:hidden"/>
          <div className="flex flex-col">
            <button
              type="button"
              className={`${tabStyle.sharing} px-8 py-4 cursor-pointer hover:text-soft-red`}
              onClick={() => handleClick("sharing")}
            >
              Easy Sharing
            </button>
            {tab == "sharing" ?
              <motion.div layoutId="tab-indicator" className="w-full border-b-4 border-b-soft-red" />
            :
              <div className="border-b-4 border-transparent"/>
            }
          </div>
        </div>
        <hr />
      </div>
      <div className="flex flex-col lg:flex-row w-[100vw] justify-center items-center gap-24 mt-16">
        <div className="relative flex flex-col w-[100vw] lg:w-[60vw] items-center lg:items-end">
          <img
            src={content[tab].img}
            alt="Feature illustration"
            className="relative max-h-[284px] lg:h-[360px] lg:max-h-max object-contain px-8 z-20"
          />
          <img
            src={bgBlob}
            alt="Blue geometric background shape."
            className="absolute w-[60vw] lg:w-[40vw] h-full left-0 -bottom-10 lg:-bottom-20 z-10 rotate-180"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start text-center max-w-[476px] lg:max-w-full lg:text-start lg:w-[50vw] lg:pr-12">
          <h3 className="text-dark-blue text-2xl lg:text-3xl font-bold">{content[tab].title}</h3>
          <p className="text-grey-blue text-base lg:max-w-[410px] my-4 lg:my-6 px-6 lg:px-0">{content[tab].text}</p>
          <div className="hidden lg:block">
            <CTA color="blue">More Info</CTA>
          </div>
        </div>
      </div>
    </div>
  )
}