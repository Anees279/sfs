import React from 'react';
import propertyImage from '../../assets/images/Home Page/5.jpg'; // Adjust path based on location

const ImageComponent = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <img 
        src={propertyImage} 
        alt="Property" 
        className="max-w-full h-auto object-cover "
      />
    </div>
  );
};

export default ImageComponent;
