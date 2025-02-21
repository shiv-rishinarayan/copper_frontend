import P101Breadcrumb from "@/components/P101/P101Breadcrumb";
import Image from "next/image";
import Footer from "@/components/Footer";
import GlossaryAccordion from "@/components/P101/GlossaryAccordion";
import SEO from "@/components/SEO";

const glossary = () => {
  return (
    <div className="relative">
      <SEO
        title={"Glossary- Platinum Group Metals Guide & Glossary"}
        description="Explore the world of Platinum Group Metals (PGMs) with our comprehensive guide. Learn about platinum, palladium, rhodium, iridium, ruthenium, and osmium, their properties, uses, and market significance."
        keywords="PGM 101, Platinum Group Metals, platinum, palladium, rhodium, iridium, ruthenium, osmium, metal properties, PGM glossary, precious metals"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/platinum101/glossary"
      />
      {/* Breadcrumb Component */}
      <P101Breadcrumb link="/platinum101/glossary" title="PGM Glossary" />

      {/* Page Content */}
      <div className="flex flex-col mt-[3.5rem]">
        {/* header */}
        <div className="relative mb-16">
          {/* Background GIF */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
            style={{ backgroundImage: `url(/P101imgs/platinum.gif)` }}
          ></div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Header Content */}
          <div className="relative z-20 px-3 md:px-20 py-7 md:py-16 md:pt-20">
            <div className="w-full lg:w-[70%] mx-auto">
              <Image
                src="/P101imgs/glossary.jpeg"
                alt="Glossary"
                width={200}
                height={200}
                className="rounded-lg mb-4 -ml-[4px]"
              />
              <h1 className="text-[28px] font-bold mb-2 pl-[2px] text-white">
                PGM Glossary
              </h1>
              <p className="text-[17px] text-gray-200 mb-4 pl-[2px]">
                Glossary of Terms for Platinum Group Metals (PGM). A
                Comprehensive Guide to Understanding Key Concepts,
                Terminologies, and Processes in Mining, Metallurgy, and Advanced
                Technologies—Covering Applications in Catalysis, Renewable
                Energy, and Sustainable Practices for a Smarter Future.
              </p>
            </div>
          </div>
        </div>

        {/* accordions  */}
        <div className="mt-4 pb-12">
          <GlossaryAccordion />
        </div>
      </div>

      {/* footer */}
      <div className="mt-7 md:mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default glossary;
