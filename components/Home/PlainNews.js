import React from "react";
import { IoTimerOutline } from "react-icons/io5";

const newsData = [
  //   {
  //     title:
  //       "Platinum Prices Surge Amid Global Supply Concerns and Market Pressures",
  //     excerpt:
  //       "Global platinum supply faces challenges due to labor strikes and operational disruptions.",
  //     imageUrl: "https://example.com/platinum-prices-surge.jpg",
  //     time: "3 hours ago",
  //     link: "/news/platinum-prices-surge",
  //   },
  {
    title:
      "Platinum's Expanding Role in Green Technology and Sustainable Innovations",
    excerpt:
      "Demand for platinum rises as it becomes essential for hydrogen fuel cell technology.",
    imageUrl: "https://example.com/platinum-green-tech.jpg",
    time: "6 hours ago",
    link: "/news/platinum-green-tech",
  },
  {
    title:
      "South Africa's Platinum Mines Grapple with Energy Challenges and Outages",
    excerpt:
      "Power outages affect production in one of the largest platinum-producing regions.",
    imageUrl: "https://example.com/south-africa-platinum.jpg",
    time: "8 hours ago",
    link: "/news/south-africa-platinum",
  },
  {
    title:
      "New Platinum Discovery in Canada Sparks Excitement and Exploration Boom",
    excerpt:
      "Significant reserves found in Quebec could reshape the platinum market.",
    imageUrl: "https://example.com/platinum-discovery-canada.jpg",
    time: "10 hours ago",
    link: "/news/platinum-discovery-canada",
  },
  {
    title:
      "Platinum Jewelry Demand Rebounds as Post-Pandemic Consumer Confidence Grows",
    excerpt:
      "Sales of platinum jewelry increase as consumer confidence improves globally.",
    imageUrl: "https://example.com/platinum-jewelry-demand.jpg",
    time: "12 hours ago",
    link: "/news/platinum-jewelry-demand",
  },
  {
    title:
      "Automotive Industry Fuels Platinum Demand for Catalytic Converters and Emission Control",
    excerpt:
      "Platinum remains a critical component in reducing vehicle emissions.",
    imageUrl: "https://example.com/platinum-catalytic-converters.jpg",
    time: "14 hours ago",
    link: "/news/platinum-catalytic-converters",
  },
  {
    title: "Rising Investment Interest in Platinum ETFs Amid Market Volatility",
    excerpt:
      "Investors flock to platinum exchange-traded funds amid market volatility.",
    imageUrl: "https://example.com/platinum-etfs.jpg",
    time: "15 hours ago",
    link: "/news/platinum-etfs",
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
            {newsData.slice(0, 5).map((news, index) => (
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
