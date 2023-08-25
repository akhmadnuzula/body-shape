import { Grid, Typography } from "@mui/material";
import React from "react";

function Pear() {
  return (
    <Grid container spacing={2} maxWidth={500} sx={{ marginY: 2 }}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h5">Rekomendasi Pear Body Shape</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">1. Puffy Sleeves</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ m: 0, p: 0 }}>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/puffy-sleeves-1.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/puffy-sleeves-2.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/puffy-sleeves-3.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Balancing the Proportions: Pakaian dengan lengan puffy akan memberikan
          dimensi pada bagian atas tubuh Anda, membantu menciptakan keseimbangan
          antara pinggul yang lebih lebar dan bahu yang lebih sempit.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">2. Wide-Leg Trousers</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ m: 0, p: 0 }}>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/wide-leg-trousers-1.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/wide-leg-trousers-2.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/wide-leg-trousers-3.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Celana dengan potongan wide-leg, terutama yang mulai melebar dari paha
          ke bawah, bisa memberikan keseimbangan visual pada bentuk tubuh pear.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">3. Fit-and-Flare Dress</Typography>
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
          Dress dengan potongan fit-and-flare atau A-line sangat cocok untuk
          bentuk tubuh pear. Potongan ini akan menonjolkan pinggang Anda dan
          secara perlahan melebar ke bagian bawah, menciptakan proporsi yang
          lebih seimbang.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Pear;
