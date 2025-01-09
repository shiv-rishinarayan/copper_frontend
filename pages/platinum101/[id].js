import P101Breadcrumb from "@/components/P101/P101Breadcrumb";
import { useRouter } from "next/router";
import cardData from "@/public/static-data/P101CardData"; // Adjust the import path
import Image from "next/image";
import Footer from "@/components/Footer";

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the card data based on the ID
  const card = cardData.find((item) => item.id === id);

  if (!card) {
    return <p className="p-8 text-lg">Loading details...</p>;
  }

  return (
    <div className="">
      {/* Breadcrumb Component */}
      <P101Breadcrumb link={card.href} title={card.title} />

      {/* Page Content */}
      <div className="flex flex-col mt-[3.5rem]">
        {/* header  */}
        <div className="bg-accent/10 px-3 md:px-20 py-7 md:py-16 mb-16">
          <div className="w-full lg:w-[70%] mx-auto">
            <Image
              src={card.image}
              alt={card.title}
              width={200}
              height={200}
              className="rounded-lg mb-4 -ml-[4px]"
            />
            <h1 className="text-[28px] font-bold mb-2 pl-[2px]">
              {card.title}
            </h1>
            <p className="text-[17px] text-gray-700 mb-4 pl-[2px]">
              {card.description}
            </p>
          </div>
        </div>
        {/* Render detailed sections dynamically */}
        {card.details.map((section, index) => (
          <div
            key={index}
            className="mb-10 px-3 md:px-20 w-full lg:w-[70%] mx-auto"
          >
            <h2 className="text-[22px] font-bold mb-2">{section.heading}</h2>
            <ul className="list-none pl-0">
              {section.content.map((item, idx) => (
                <li key={idx} className="text-[17px] text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* footer  */}
      <div className="mt-7 md:mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default DetailPage;
