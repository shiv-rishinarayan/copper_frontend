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
      <Navbar />
      <VideoHero />
      <div>
        <TabsSection />
        <div className="mt-6 px-3 md:px-12 py-5 md:py-5">
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
