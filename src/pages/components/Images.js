import React from "react";

function Images({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        maxHeight: 600,
        width: "auto",
        maxWidth: "100%",
        alignItems: "center",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}
    />
  );
}

export default Images;
