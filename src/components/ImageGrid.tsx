
import { useEffect, useRef, useState } from 'react';

type ImageItem = {
  src: string;
  alt: string;
  caption?: string;
};

function ImageGrid({ images }: { images: ImageItem[] }) {
  const [activeImage, setActiveImage] = useState<ImageItem | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImage(null);
      }
    };

    closeButtonRef.current?.focus();
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImage]);

  const handleOpenImage = (image: ImageItem) => {
    setActiveImage(image);
  };

  const handleCloseImage = () => {
    setActiveImage(null);
  };

  return (
    <>
      <div className="section-media-grid">
        {images.map((img) => (
          <figure className="section-image-card" key={img.src}>
            <button
              type="button"
              className="section-image-button"
              onClick={() => handleOpenImage(img)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
            </button>
            {img.caption && <figcaption>{img.caption}</figcaption>}
          </figure>
        ))}
      </div>

      {activeImage && (
        <div className="image-lightbox" role="dialog" aria-modal="true" aria-label="Image preview" onClick={handleCloseImage}>
          <div className="image-lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <button
              ref={closeButtonRef}
              type="button"
              className="image-lightbox-close"
              onClick={handleCloseImage}
              aria-label="Close image preview"
            >
              ×
            </button>
            <img src={activeImage.src} alt={activeImage.alt} loading="eager" decoding="async" />
            {activeImage.caption && (
              <div className="image-lightbox-caption">{activeImage.caption}</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ImageGrid;