import React from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ pictures, onOpenModal }) {
  return (
    <ul className="ImageGallery">
      {pictures.length
        ? pictures.map(picture => (
            <ImageGalleryItem
              {...picture}
              onOpenModal={onOpenModal}
              key={picture.id}
            />
          ))
        : false}
    </ul>
  );
}
