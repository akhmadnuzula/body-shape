import { Stack } from "@mui/material";
import React from "react";

function Images({ src, alt }) {
  return (
    <Stack sx={{ display: "flex", justifyContent: "center" }}>
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
    </Stack>
  );
}

export default Images;
