import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

// ClickableImage component
const ClickableImage = ({ 
    src, 
    alt, 
    onClick 
  }: { 
    src: string; 
    alt: string; 
    onClick: () => void;
  }) => {
    return (
      <div 
        className="relative aspect-[9/19.5] cursor-pointer"
        onClick={onClick}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain rounded-lg"
        />
      </div>
    );
  };
  
// FullscreenImageModal component
const FullscreenImageModal = ({ 
    isOpen, 
    onClose, 
    imageSrc, 
    alt 
  }: { 
    isOpen: boolean; 
    onClose: () => void; 
    imageSrc: string; 
    alt: string;
  }) => {
    if (!isOpen) return null;
  
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-ls-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-gray-500 hover:bg-gray-400"
              aria-label="Close"
            >
              <FiX size={24} />
            </button>
            <div className="relative w-full h-full max-w-3xl max-h-[80vh] p-4">
              <Image
                src={imageSrc}
                alt={alt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

export { ClickableImage, FullscreenImageModal };