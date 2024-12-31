import React from "react";
import { IoTimerOutline } from "react-icons/io5";

const newsData = [
  {
    title: "'Banksy woz ere': what's next for the street artist's menagerie?",
    excerpt:
      "London Zoo removes mural, but remains tight-lipped about plans to sell the piece",
    imageUrl:
      "https://www.iaea.org/sites/default/files/styles/width_555px_6_units_16_9/public/nuclear-eplained-2024-1140x640.png?itok=vZh1n-QE",
    time: "16 hours ago",
    link: "/news/banksy-menagerie",
  },
  {
    title: "Where is Salvator Mundi? In storage in Geneva—apparently",
    excerpt:
      "Could the long-lost work end up in a Saudi museum run by ex-British Museum chief?",
    imageUrl:
      "https://nucnet.imgix.net/uFYuen9aPAw8ZTDzEc2RAQ4n?ixlib=rails-4.3.1&w=270&h=180&fit=crop&q=60&fm=jpg&auto=format&lossless=true&s=1b10a96694a182f733d219e5b133ad7c",
    time: "19 hours ago",
    link: "/news/salvator-mundi",
  },
  {
    title:
      "Banksy’s London zoo: goat, monkey and elephant silhouettes fox the nation",
    excerpt:
      "Do the animal works reflect the state of the UK, the war in Gaza—or something else entirely?",
    imageUrl:
      "https://nucnet.imgix.net/vEanGZ95XNMpPEPrb26joX1i?ixlib=rails-4.3.1&w=270&h=180&fit=crop&q=60&fm=jpg&auto=format&lossless=true&s=9579b0740f94b87154a3994d5a538a80",
    time: "18 hours ago",
    link: "/news/banksy-silhouettes",
  },
  {
    title: "Art and Activism: A tale of global protests and creativity",
    excerpt:
      "Exploring how art shapes narratives around pressing global issues.",
    imageUrl:
      "https://www.iaea.org/sites/default/files/styles/width_555px_6_units_16_9/public/theconventiononnuclearsafety.jpg?itok=uVAYckfg",
    time: "1 day ago",
    link: "/news/art-activism",
  },
  {
    title: "The role of public sculptures in urban design",
    excerpt:
      "How sculptures add character and tell stories in the urban landscape.",
    imageUrl:
      "https://world-nuclear-news.org/images/articles/LanceCentralProcessingPlantNov2024(PeninsulaEnergy)_98578.jpg",
    time: "2 days ago",
    link: "/news/public-sculptures",
  },
];

const PlainNews = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
          Latest Platinum News
        </h1>

        <div className="flex flex-wrap md:flex-nowrap gap-5">
          <div className="w-full grid grid-cols-1 gap-3">
            {newsData.map((news, index) => (
              <a
                key={index}
                href={news.link}
                className="bg-white border-b border-black/10 pb-4 rounded-sm overflow-hidden block group transition-shadow duration-300"
              >
                <div>
                  <h2 className="group-hover:underline text-[16px] md:text-[17px] text-primary mt-1 leading-6">
                    {news.title}
                  </h2>
                  <p className="text-gray-500 text-xs mt-2 flex gap-x-1.5 items-center">
                    {/* <span>
                      <IoTimerOutline className="text-sm" />
                    </span>{" "} */}
                    {news.time}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlainNews;
