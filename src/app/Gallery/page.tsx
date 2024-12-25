import React, { useState } from 'react';
import a from '../../assets/images/1.jpg';
import b from '../../assets/images/3.jpg';
import c from '../../assets/images/4.jpg';
import d from '../../assets/images/5.jpg';
import e from '../../assets/images/6.jpg';
import f from '../../assets/images/7.jpg';
import Modal from '../../features/Gallery/components/Modal';

function Gallery() {
  const images = [a, b, c, d, e, f];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6 text-amber-800 text-center font-serif">
        Cherished Memories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative p-2 bg-white shadow-md rounded-lg transform transition-transform hover:scale-105 cursor-pointer"
            onClick={() => openModal(image)}
          >
            <img
              src={image}
              alt={`Memory ${index}`}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />
    </div>
  );
}

export default Gallery;