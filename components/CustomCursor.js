// // components/CustomCursor.js
// import React, { useEffect } from "react";

// const CustomCursor = () => {
//   useEffect(() => {
//     const cursor = document.querySelector(".custom-cursor");

//     const moveCursor = (e) => {
//       requestAnimationFrame(() => {
//         cursor.style.left = `${e.clientX}px`;
//         cursor.style.top = `${e.clientY}px`;
//       });
//     };

//     window.addEventListener("mousemove", moveCursor);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//     };
//   }, []);

//   return <div className="custom-cursor"></div>;
// };

// export default CustomCursor;

// components/CustomCursor.js
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const moveCursor = (e) => {
      requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });
    };

    const handleMouseDown = () => {
      setIsZoomed(true);
    };

    const handleMouseUp = () => {
      setIsZoomed(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className={`custom-cursor ${isZoomed ? "zoom-in" : "zoom-out"}`}></div>
  );
};

export default CustomCursor;
