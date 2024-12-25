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
];

import { useState, useEffect } from "react";
import Link from "next/link";

const MoreNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const formattedNews = newsData.map((item) => ({
      id: Math.random().toString(36).substr(2, 9),
      title: item.title,
      image: item.imageUrl,
      time: item.time,
      excerpt: item.excerpt,
      url: item.link,
    }));

    setNews(formattedNews);
    setLoading(false);
  }, []);

  return (
    <div className="px-3 md:px-10 lg:px-16 py-12 md:py-24 bg-secondary/10 mt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[19px] md:text-[21px] font-bold cambay border-b border-gray-300 pb-2">
          More News
        </h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-800"></div>
          <span className="ml-3 text-gray-800 font-semibold">Loading...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-7">
          {news.slice(0, 9).map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="flex items-start space-x-4 pb-4 border-b group"
            >
              <div className="flex-grow">
                <h3 className="text-md font-bold text-gray-800 group-hover:text-accent transition-colors leading-tight">
                  {item.title}
                </h3>
                <span className="text-xs text-gray-500 mt-2 block">
                  {item.time}
                </span>
              </div>
              <div className="w-[80px] h-[75px] flex-shrink-0 overflow-hidden rounded-md">
                <img
                  src={item.image}
                  alt={item.title.substring(0, 10) + "..."}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default MoreNews;
