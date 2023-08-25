import { Grid, Typography } from "@mui/material";
import React from "react";

function Haourglass() {
  return (
    <Grid container spacing={2} maxWidth={500} sx={{ marginY: 2 }}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h5">Rekomendasi Haourglass Body Shape</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">1. Fitted Basic</Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src={`${process.env.REACT_APP_BASE_URL}/outfit/fitted-basic-1.jpg`}
          alt=""
          style={{ width: "100%", height: "auto", maxWidth: 300 }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Ini adalah pakaian yang umumnya memiliki potongan yang lebih ketat dan
          menonjolkan bentuk tubuh dengan baik. Berikut beberapa contoh fitted
          basics yang cocok untuk bentuk tubuh hourglass.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">2. Dress dengan potongan A-line</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ m: 0, p: 0 }}>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/dress-a-line-1.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/dress-a-line-2.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/dress-a-line-3.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Pilih pakaian seperti dress dengan potongan A-line atau perempat rok
          yang akan mempertegas pinggang kecil Anda dan meratakan proporsi
          antara bahu dan pinggul.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">3. High-waisted bottom</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ m: 0, p: 0 }}>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/high-waisted-bottom-1.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/high-waisted-bottom-3.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/high-waisted-bottom-2.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Bottom seperti celana atau rok dengan pinggang tinggi akan membuat
          pinggang Anda terlihat lebih ramping dan proporsional dengan bagian
          atas tubuh.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Haourglass;
