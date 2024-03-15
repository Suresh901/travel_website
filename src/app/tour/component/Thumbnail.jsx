"use client";
import React from "react";

const Thumbnail = () => {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const images = [
    "image-url-1.jpg",
    "image-url-2.jpg",
    "image-url-3.jpg",
    "image-url-4.jpg",
    // Add more image URLs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const changeMainImage = (index) => {
    setMainImageIndex(index);
  };

  return (
    <div className="product-details">
      <h1>Product Name</h1>
      <div className="thumbnail-images">
        {images.map((image, index) => (
          <div key={index} onClick={() => changeMainImage(index)}>
            <img src={image} alt={`Product ${index + 1}`} />
          </div>
        ))}
      </div>
      <Slider {...settings} initialSlide={mainImageIndex}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Product ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <p>
        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      {/* Other product details */}
    </div>
  );
};

export default Thumbnail;
