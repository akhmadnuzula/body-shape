import { Grid, Typography } from "@mui/material";
import React from "react";

function Aple() {
  return (
    <Grid container spacing={2} maxWidth={500} sx={{ marginY: 2 }}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h5">Rekomendasi Aple Body Shape</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">1. Mairaa Sabrina Dress</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ m: 0, p: 0 }}>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/Sabrina Dress11.png`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/Sabrina Dress12.png`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/Sabrina Dress13.png`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Meski bentuk tubuh apel sering disarankan untuk mengenakan pakaian
          yang menonjolkan kaki atau memperpanjang torso, gaun ini dapat bekerja
          dengan baik asalkan bagian tengah gaun tidak terlalu ketat dan bagian
          bawah cukup longgar untuk memberikan kenyamanan.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">2. Mairaa One Set</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ m: 0, p: 0 }}>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/One Set11.png`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/One Set12.png`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/One Set13.png`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Bagi mereka dengan bentuk tubuh apel, atasan ini bisa membantu
          menyeimbangkan proporsi tubuh, terutama jika memiliki detail kancing
          atau lipatan yang dapat mengalihkan perhatian dari bagian tengah
          tubuh.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">3. Mairaa Tunic Dress</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ m: 0, p: 0 }}>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/Tunic Dress11.png`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/Tunic Dress12.png`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/Tunic Dress13.png`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Gaun ini dapat memberikan tampilan yang seimbang dengan menonjolkan
          kaki dan menutupi bagian tengah tubuh. Potongan lurus gaun ini juga
          membantu menciptakan ilusi panjang yang lebih.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">4. Zoey Knitt Dress</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ m: 0, p: 0 }}>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/Zoey Knitt Dress11.png`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/Zoey Knitt Dress12.png`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/outfit/Zoey Knitt Dress13.png`}
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Gaun ini dapat memberikan tampilan yang seimbang dengan menonjolkan
          kaki dan menutupi bagian tengah tubuh. Potongan lurus gaun ini juga
          membantu menciptakan ilusi panjang yang lebih.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Aple;
