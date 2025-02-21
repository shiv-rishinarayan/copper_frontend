// import Navbar from "@/components/Navbar";
// import VideoHero from "@/components/VideosPage/VideoHero";
// import React from "react";
// import { useRouter } from "next/router";
// import TabsSection from "@/components/VideosPage/TabSection";
// import Footer from "@/components/Footer";
// import VAll from "@/components/VideosPage/VAll";
// import VFeatured from "@/components/VideosPage/VFeatured";
// import VEducation from "@/components/VideosPage/VEducation";
// import VCompany from "@/components/VideosPage/VCompany";
// import VPodcasts from "@/components/VideosPage/VPodcasts";

// const videos = () => {
//   const { query } = useRouter();
//   const currentTab = query.tab || "all";
//   return (
//     <div>
//       <Navbar />
//       <VideoHero />
//       {/* tabs  */}
//       <div>
//         <TabsSection />
//         <div className="mt-6">
//           {currentTab === "all" && <VAll />}
//           {currentTab === "featured" && <VFeatured />}
//           {currentTab === "company" && <VCompany />}
//           {currentTab === "podcasts" && <VPodcasts />}
//           {currentTab === "education" && <VEducation />}
//         </div>
//       </div>

//       {/* video section  */}
//       <div></div>

//       <div className="mt-24">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default videos;

import Navbar from "@/components/Navbar";
import VideoHero from "@/components/VideosPage/VideoHero";
import React from "react";
import { useRouter } from "next/router";
import TabsSection from "@/components/VideosPage/TabSection";
import Footer from "@/components/Footer";
import VideoList from "@/components/VideosPage/VideoList";
import SEO from "@/components/SEO";

const Videos = () => {
  const { query } = useRouter();
  const currentTab = query.tab || "all";

  const getCategoryFromTab = (tab) => {
    switch (tab) {
      case "featured":
        return "Featured";
      case "education":
        return "Education";
      case "company":
        return "Company";
      case "podcasts":
        return "Podcast";
      default:
        return "All";
    }
  };

  return (
    <div>
      <SEO
        title="PGM Video Hub - Market Updates, Education & Insights"
        description="Enhance your PGM market knowledge through our educational video content. From market fundamentals to advanced trading strategies, explore our comprehensive library of featured videos, company insights, podcasts, and educational resources."
        keywords="PGM videos, market updates, PGM education, trading strategies, company insights, PGM podcasts, investment knowledge, Platinum Group Metals"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/videos"
      />
      <Navbar />
      <VideoHero />
      <div>
        <TabsSection />
        <div className="mt-6 px-3 md:px-12 mx-auto py-5 md:py-5">
          <VideoList category={getCategoryFromTab(currentTab)} />
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Videos;
