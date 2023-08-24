import { Button, Grid, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Images from "./components/Images";
import Flip from "react-reveal/Flip";

function Survey() {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(null);
  const [hasil, setHasil] = useState(null);
  const [animate, setAnimate] = useState(false);
  const rows = [
    {
      id: "1a",
      pertanyaan: "Lebih ramping mana Pinggangmu atau Pinggulmu ?",
      iamge: `${process.env.REACT_APP_BASE_URL}/survey/1a.png`,
      jawaban: [
        { pilih: "Pinggul nih", score: "0" },
        { pilih: "Pinggang nih", score: "1" },
      ],
      tag: [""],
    },
    {
      id: "2a",
      pertanyaan: "Kamu memiliki bahu yang lebar ?",
      iamge: `${process.env.REACT_APP_BASE_URL}/survey/2a.png`,
      jawaban: [
        { pilih: "Tidak juga", score: "0" },
        { pilih: "Iya nih", score: "1" },
      ],
      tag: ["0"],
    },
    {
      id: "3a",
      pertanyaan:
        "Pinggang kamu lebih besar daripada bagian tubuh yang lainnya ?",
      iamge: `${process.env.REACT_APP_BASE_URL}/survey/3a.png`,
      jawaban: [
        { pilih: "Pinggul nih", score: "0" },
        { pilih: "Pinggul nih", score: "1" },
      ],
      tag: ["00", "01"],
    },
    {
      id: "4a",
      pertanyaan: "Lebih lebar mana nih Bahumu atau Pinggulmu ?",
      iamge: `${process.env.REACT_APP_BASE_URL}/survey/4a.png`,
      jawaban: [
        { pilih: "Pinggul nih", score: "0" },
        { pilih: "Bahu nih", score: "1" },
      ],
      tag: ["000", "011", "001", "010"],
    },
    {
      id: "5a",
      pertanyaan:
        "Kamu jarang beli atasan karena ukurannya ketat dibagian bahu dan dada ?",
      iamge: `${process.env.REACT_APP_BASE_URL}/survey/5a.png`,
      jawaban: [
        { pilih: "Tidak nih", score: "0" },
        { pilih: "Iya nih", score: "1" },
      ],
      tag: [
        "0000",
        "0001",
        "0100",
        "0001",
        "0101",
        "1000",
        "1001",
        "1100",
        "1101",
        "1010",
        "1011",
        "1110",
        "1111",
      ],
    },
    {
      id: "6a",
      pertanyaan:
        "Kamu lebih suka mengenakan atasan berlengan pendek karena, mengenakan atasan berlengan panjang membuatmu terlihat berisi ?",
      iamge: `${process.env.REACT_APP_BASE_URL}/survey/6a.png`,
      jawaban: [
        { pilih: "Tidak nih", score: "0" },
        { pilih: "Iya nih", score: "1" },
      ],
      tag: [
        "00000",
        "00001",
        "00011",
        "01000",
        "01010",
        "01011",
        "01001",
        "10000",
        "10001",
        "10011",
        "10010",
        "10100",
        "10101",
        "10111",
        "10110",
        "11110",
        "11111",
      ],
    },
    {
      id: "7a",
      pertanyaan: "Lebih lebar mana nih Pinggang kamu atau Pinggul kamu ?",
      iamge: `${process.env.REACT_APP_BASE_URL}/survey/7a.png`,
      jawaban: [
        { pilih: "Pinggul nih", score: "0" },
        { pilih: "Pinggang nih", score: "1" },
      ],
      tag: ["001", "011", "100", "110"],
    },
    {
      id: "8a",
      pertanyaan:
        "Berat badanmu bertambah secara merata ke seluruh tubuh, tidak hanya di sekitar perut atau paha ?",
      iamge: `${process.env.REACT_APP_BASE_URL}/survey/8a.png`,
      jawaban: [
        { pilih: "Tidak nih", score: "0" },
        { pilih: "Iya nih", score: "1" },
      ],
      tag: ["0010", "0011"],
    },
    {
      id: "9a",
      pertanyaan:
        "Lenganmu cenderung lebih besar daripada bagian tubuh lainnya ?",
      iamge: `${process.env.REACT_APP_BASE_URL}/survey/9a.png`,
      jawaban: [
        { pilih: "Tidak nih", score: "0" },
        { pilih: "Iya nih", score: "1" },
      ],
      tag: ["00100", "00101", "00111", "01100", "01101", "01110", "01111"],
    },
    {
      id: "10a",
      pertanyaan:
        "Setiap kamu membeli celana, sering kali terasa longgar dibagian paha dan pinggul ?",
      iamge: `${process.env.REACT_APP_BASE_URL}/survey/10a.png`,
      jawaban: [
        { pilih: "Tidak nih", score: "0" },
        { pilih: "Iya nih", score: "1" },
      ],
      tag: ["1"],
    },
    {
      id: "11a",
      pertanyaan:
        "Pinggul dan paha kamu lebih besar dibandingkan yang lainnya?",
      iamge: `${process.env.REACT_APP_BASE_URL}/survey/11a.png`,
      jawaban: [
        { pilih: "Tidak nih", score: "0" },
        { pilih: "Iya nih", score: "1" },
      ],
      tag: ["10", "11"],
    },
    {
      id: "12a",
      pertanyaan:
        "Kamu cenderung membeli atasan yang lebih kecil dibandingkan celana kamu ( misal S vs L ) ?",
      iamge: `${process.env.REACT_APP_BASE_URL}/survey/12a.png`,
      jawaban: [
        { pilih: "Tidak nih", score: "0" },
        { pilih: "Iya nih", score: "1" },
      ],
      tag: ["101", "111"],
    },
  ];

  useEffect(() => {
    const r = rows[0];
    setShow(r);
    setAnimate(true);
  }, []);

  const handleClick = (pilih) => {
    const newInput = `${input}${pilih}`;
    setInput(newInput);
    setAnimate(false);
    if (newInput.length === 6) {
      console.log("udah selesai", newInput);
      axios
        .get(`https://mairaa.id/sys/?param=${newInput}`)
        .then((result) => {
          const s = result.data.data;
          console.log(s);
          setHasil(s);
          setShow(null);
          setInput("");
          setTimeout(() => {
            setAnimate(true);
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const findRows = rows.find(
        (item) => item.tag && item.tag.includes(newInput)
      );
      if (findRows) {
        setShow(findRows);
      }
      setTimeout(() => {
        setAnimate(true);
      }, 1000);
    }
  };

  const handleNew = () => {
    setAnimate(false);
    setTimeout(() => {
      setHasil(null);
      const r = rows[0];
      setShow(r);
      setInput("");
      setAnimate(true);
    }, 1000);
  };

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 3,
      }}>
      {show !== null && (
        <Stack>
          <Flip left when={animate}>
            <Images src={show.iamge} alt={show.pertanyaan} />
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                width: "100%",
                p: 2,
              }}>
              <Button
                variant="contained"
                color="warning"
                onClick={() => handleClick(show.jawaban[0].score)}>
                {show.jawaban[0].pilih}
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleClick(show.jawaban[1].score)}>
                {show.jawaban[1].pilih}
              </Button>
            </Grid>
          </Flip>
        </Stack>
      )}
      {hasil !== null && (
        <Stack>
          <Flip left when={animate}>
            <Images
              src={`${process.env.REACT_APP_BASE_URL}/bodyshape/${hasil.body_shape_image}`}
              alt={hasil.body_shape_name}
            />
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                width: "100%",
                p: 2,
              }}>
              <Button variant="contained" onClick={() => handleNew()}>
                Hitung Lagi
              </Button>
            </Grid>
          </Flip>
        </Stack>
      )}
    </Grid>
  );
}

export default Survey;
