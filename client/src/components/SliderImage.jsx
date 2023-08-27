import { useEffect, useState } from "react";

const Slider = ({ images, interval }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [currentImage, images.length, interval]);

  return (
    <div>
      <img
        src={images[currentImage]}
        alt={`Slide ${currentImage}`}
        className="w-full h-auto"
      />
    </div>
  );
};

export default Slider;
