import { Grid, Typography } from "@mui/material";
import React from "react";

function Rectangle() {
  return (
    <Grid container spacing={2} maxWidth={500} sx={{ marginY: 2 }}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h5">Rekomendasi Rectangle Body Shape</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">1. Blazer</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ m: 0, p: 0 }}>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/blazer-1.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/blazer-2.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/blazer-3.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Pilih blazer yang memiliki potongan yang terdefinisi di pinggang atau
          yang dilengkapi dengan ikat pinggang. Ini akan membantu menciptakan
          ilusi pinggang yang lebih ramping dan memberikan bentuk yang lebih
          bervariasi.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">2. A-Line Skirts</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ m: 0, p: 0 }}>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/a-line-skirts-1.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/a-line-skirts-2.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/a-line-skirts-3.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Rok A-line dapat membantu menciptakan ilusi pinggang yang lebih
          ramping dan memberikan kurva pada bagian bawah tubuh. Pilih rok dengan
          pinggang yang pas dan dilengkapi dengan ikat pinggang atau sabuk untuk
          memberi penekanan pada pinggang Anda.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">3. Dress</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ m: 0, p: 0 }}>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/dress-1.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/dress-2.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/dress-3.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Pilih dress dengan detail pinggang seperti sabuk, pita, atau ikat
          pinggang. Ini dapat memberi penekanan pada area pinggang dan
          menciptakan kurva.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Rectangle;
