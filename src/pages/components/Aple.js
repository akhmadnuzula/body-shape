import { Grid, Typography } from "@mui/material";
import React from "react";

function Aple() {
  return (
    <Grid container spacing={2} maxWidth={500} sx={{ marginY: 2 }}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h5">Rekomendasi Aple Body Shape</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">1. Wide Leg</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ m: 0, p: 0 }}>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/wide-leg-1.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/wide-leg-2.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/wide-leg-3.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      {/* <Grid item xs={12}>
        <Typography>
          Pilih atasan dengan potongan leher V untuk membantu memanjangkan
          penampilan leher dan memberikan keseimbangan pada bagian atas tubuh.
        </Typography>
      </Grid> */}
      <Grid item xs={12}>
        <Typography variant="h6">2. Tunic Dress</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ m: 0, p: 0 }}>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/tunic-dress-1.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/tunic-dress-2.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/tunic-dress-3.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Dress dengan potongan empire waist (pinggang di bawah dada) dapat
          menjadi pilihan yang baik. Potongan ini akan memberikan aksen pada
          bagian dada dan menjauhkan perhatian dari bagian perut.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">3. Warp Top</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ m: 0, p: 0 }}>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/warp-top-1.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/warp-top-2.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/warp-top-3.jpeg`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Wrap dress atau wrap top akan membantu menciptakan ilusi pinggang yang
          lebih ramping. Pilihlah model dengan potongan yang sesuai dengan gaya
          pribadi Anda.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Aple;
