import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function Appbar() {
  const handleBack = () => {
    window.location.href = "/";
  };
  return (
    <AppBar position="sticky" color="default">
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div
            onClick={() => handleBack()}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}>
            <IconButton edge="start" color="inherit" aria-label="back">
              <ChevronLeftIcon />
            </IconButton>
            <Typography variant="h6">Kembali</Typography>
          </div>
          <img
            src="https://mairaa.id/wp-content/uploads/2023/03/Logo_Maira-Logo-Black-300x150.png"
            alt="mairaa"
            style={{ height: 60, width: "auto" }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Appbar;
