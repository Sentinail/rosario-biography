import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const GalleryModal = ({ isOpen, onClose, imageSrc }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-50"
      ariaHideApp={false}
      style={{
        content: {
          backgroundColor: "transparent",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-0 right-0 m-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
      >
        <FaTimes />
      </button>
      <img
        src={imageSrc}
        alt="Full size"
        className="max-w-full max-h-full mx-auto"
      />
    </Modal>
  );
};

export default GalleryModal;
