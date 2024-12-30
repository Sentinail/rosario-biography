import { useState } from 'react';
import Modal from '../../features/Gallery/components/Modal';

const images: Record<string, { default: string }> = import.meta.glob('../../assets/images/*.{JPG,jpg}', {eager: true});

function Gallery() {
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
        {Object.values(images).map((image, index) => (
          <div
            key={index}
            className="relative p-2 bg-white shadow-md rounded-lg transform transition-transform hover:scale-105 cursor-pointer"
            onClick={() => openModal(image.default)}
          >
            <img
              src={image.default}
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