import React from "react";

const ImageModal = ({ isModalOpen, selectedImage, closeModal }) => {
  return (
    isModalOpen && (
      <div
        className="fixed inset-0 bg-black1 bg-opacity-50 flex justify-center items-center"
        onClick={closeModal}
      >
        <div className="relative bg-white p-4 rounded-lg max-w-4xl max-h-[80vh] overflow-auto">
          <img
            src={selectedImage}
            alt="Full view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          />
          {/* Positioned the close button relative to the modal container */}
          <button
            className="absolute top-2 right-2 text-black1 text-xl"
            onClick={closeModal}
          >
            ✖
          </button>
        </div>
      </div>
    )
  );
};

export default ImageModal;
