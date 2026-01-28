import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import C101Breadcrumb from "@/components/C101/C101Breadcrumb";
import GlossaryAccordion from "@/components/C101/GlossaryAccordion";
import SEO from "@/components/SEO";

const Glossary = () => {
  return (
    <div>
      <SEO
        title="Copper Glossary - Copper Industry Terms & Definitions"
        description="Comprehensive glossary of copper industry terms, definitions, and technical vocabulary. Learn about copper mining, processing, alloys, and market terminology."
        keywords="copper glossary, copper terms, copper definitions, copper industry vocabulary, metal terminology, copper alloys, mining terms"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/copper101/glossary"
      />
      <Navbar />
      <C101Breadcrumb link="/copper101/glossary" title="Copper Glossary" />
      
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Copper Industry Glossary</h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Comprehensive definitions and explanations of key terms in the copper industry
          </p>
          <GlossaryAccordion />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Glossary;