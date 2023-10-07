import React from 'react';

export default function ImageGalleryItem({
  id,
  webformatURL,
  largeImageURL,
  tags,
  onOpenModal,
}) {
  return (
    <li className="ImageGalleryItem">
      <img
        onClick={() => onOpenModal({ src: largeImageURL, alt: tags })}
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
}
