import P101Breadcrumb from "@/components/P101/P101Breadcrumb";
import { useRouter } from "next/router";
import cardData from "@/public/static-data/P101CardData"; // Adjust the import path
import Image from "next/image";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const DetailPage = ({ card }) => {
  const router = useRouter();

  if (!card) {
    return <p className="p-8 text-lg">Loading details...</p>;
  }

  return (
    <div className="relative">
      <SEO
        title={`${card.title} - Platinum Group Metals Guide & Glossary`}
        description="Explore the world of Platinum Group Metals (PGMs) with our comprehensive guide. Learn about platinum, palladium, rhodium, iridium, ruthenium, and osmium, their properties, uses, and market significance."
        keywords="PGM 101, Platinum Group Metals, platinum, palladium, rhodium, iridium, ruthenium, osmium, metal properties, PGM glossary, precious metals"
        canonicalUrl={`https://musical-panda-75f15d.netlify.app/platinum101/${card.id}`}
      />
      {/* Breadcrumb Component */}
      <P101Breadcrumb link={card.href} title={card.title} />

      {/* Page Content */}
      <div className="flex flex-col mt-[3.5rem]">
        {/* header */}
        <div className="relative mb-16">
          {/* Background GIF */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${card.video})` }}
          ></div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Header Content */}
          <div className="relative z-20 px-3 md:px-20 py-7 md:py-16 md:pt-20">
            <div className="w-full lg:w-[70%] mx-auto">
              <Image
                src={card.image}
                alt={card.title}
                width={200}
                height={200}
                className="rounded-lg mb-4 -ml-[4px]"
              />
              <h1 className="text-[28px] font-bold mb-2 pl-[2px] text-white">
                {card.title}
              </h1>
              <p className="text-[17px] text-gray-200 mb-4 pl-[2px]">
                {card.description}
              </p>
            </div>
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

      {/* footer */}
      <div className="mt-7 md:mt-16">
        <Footer />
      </div>
    </div>
  );
};

// Generate static paths for all card IDs
export async function getStaticPaths() {
  const paths = cardData.map((card) => ({
    params: { id: card.id },
  }));

  return {
    paths,
    fallback: false, // Return 404 for paths not in the list
  };
}

// Generate static props for each page
export async function getStaticProps({ params }) {
  const card = cardData.find((item) => item.id === params.id);

  if (!card) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      card,
    },
  };
}

export default DetailPage;
