import React from 'react';

const ShapeDividerBottom = () => {
  return (
    <div className="absolute bottom-0 border-none left-0 w-full max-sm: overflow-hidden  z-0">
      <svg
        viewBox="0 0 400 59"
        preserveAspectRatio="none"
        className="block sm:hidden w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M600,60C268.63,60,0,35,0,5V60H1200V5C1200,35,931.37,60,600,60Z"
          className="fill-first"
        />
      </svg>

      {/* Large screen SVG */}
      <svg
        viewBox="0 0 900 119"
        preserveAspectRatio="none"
        className="hidden sm:block w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          className="fill-first"
        />
       
      </svg>
    </div>
  );
};

export default ShapeDividerBottom;
