import React from "react";

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

const LatestNews = () => {
  return (
    <div className="">
      <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
        Latest Platinum News
      </h1>

      <div className="flex space-x-5 justify-between items-start">
        {/* Featured News */}
        <div className="w-[53%]">
          <a
            href={newsData[0].link}
            className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
          >
            <img
              src={newsData[0].imageUrl}
              alt={newsData[0].title}
              className="w-full h-[317px] object-cover group-hover:opacity-90"
            />
            <div className="">
              <h2 className="group-hover:underline text-[18px] text-primary leading-6 mt-1">
                {newsData[0].title}
              </h2>
              <p className="text-gray-500 text-xs mt-2">{newsData[0].time}</p>
            </div>
          </a>
        </div>

        {/* Other News */}
        <div className="w-[45%] grid grid-cols-1 md:grid-cols-2 gap-4">
          {newsData.slice(1).map((news, index) => (
            <a
              key={index}
              href={news.link}
              className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
            >
              <img
                src={news.imageUrl}
                alt={news.title}
                className="w-full h-28 object-cover group-hover:opacity-90"
              />
              <div className="">
                <h2 className="group-hover:underline text-[16px] text-primary mt-1 leading-6">
                  {news.title.substring(0, 43)}...
                </h2>
                <p className="text-gray-500 text-xs mt-2">{news.time}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
