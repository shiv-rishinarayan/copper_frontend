import Navbar from "@/components/Navbar";
import VideoHero from "@/components/VideosPage/VideoHero";
import React from "react";
import { useRouter } from "next/router";
import TabsSection from "@/components/VideosPage/TabSection";
import Footer from "@/components/Footer";

const videos = () => {
  const { query } = useRouter();
  const currentTab = query.tab || "all";
  return (
    <div>
      <Navbar />
      <VideoHero />
      {/* tabs  */}
      <div>
        <TabsSection />
        <div className="mt-6">
          {currentTab === "all" && <div>All</div>}
          {currentTab === "featured" && <div>All</div>}
          {currentTab === "company" && <div>All</div>}
          {currentTab === "podcasts" && <div>All</div>}
          {currentTab === "education" && <div>All</div>}
        </div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default videos;
