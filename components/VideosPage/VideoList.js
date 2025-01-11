import React, { useState, useEffect } from "react";
import axios from "axios";

const VideoList = ({ category }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASEURL = process.env.NEXT_PUBLIC_API_BASEURL;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        const response = await axios.get(`${BASEURL}/api/videos`);
        const filteredVideos =
          category === "All"
            ? response.data.data
            : response.data.data.filter(
                (video) => video.video_category === category
              );
        setVideos(filteredVideos);
      } catch (err) {
        setError("Failed to fetch videos");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <div
          key={video.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeId(
                video.video_link
              )}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">{video.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{video.channel_name}</p>
            <p className="text-sm text-gray-500">{formatDate(video.date)}</p>
            {video.company_name !== "NA" && (
              <p className="text-sm text-gray-600">
                Company: {video.company_name}
              </p>
            )}
            {video.stock_ticker !== "NA" && (
              <p className="text-sm text-gray-600">
                Stock Ticker: {video.stock_ticker}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

function getYouTubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export default VideoList;
