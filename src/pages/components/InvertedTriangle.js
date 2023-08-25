import { Grid, Typography } from "@mui/material";
import React from "react";

function InvertedTriangle() {
  return (
    <Grid container spacing={2} maxWidth={500} sx={{ marginY: 2 }}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h5">
          Rekomendasi Inverted Triangle Body Shape
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">1. V-Neck Blouse</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ m: 0, p: 0 }}>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/v-neck-1.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/v-neck-2.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/v-neck-3.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Pilih atasan dengan potongan leher V untuk membantu memanjangkan
          penampilan leher dan memberikan keseimbangan pada bagian atas tubuh.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">2. Pleated Skirt</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ m: 0, p: 0 }}>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/pleated-1.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/pleated-2.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/pleated-3.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          pilihan yang bagus untuk bentuk tubuh inverted triangle karena dapat
          membantu menciptakan keseimbangan visual antara bahu yang lebar dan
          pinggul yang lebih sempit.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">
          3. Jumpsuit dengan Bawahan Wide-Leg
        </Typography>
      </Grid>
      <Grid container spacing={2} sx={{ m: 0, p: 0 }}>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/fit-flare-1.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/fit-flare-2.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/fit-flare-3.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Jumpsuit dengan bawahan wide-leg dapat membantu menciptakan
          keseimbangan visual antara bahu yang lebar dan pinggul yang lebih
          sempit.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default InvertedTriangle;
