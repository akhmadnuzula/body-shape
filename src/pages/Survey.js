import { Button, Grid, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Images from "./components/Images";
import Flip from "react-reveal/Flip";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import Haourglass from "./components/Haourglass";
import Rectangle from "./components/Rectangle";
import Pear from "./components/Pear";
import InvertedTriangle from "./components/InvertedTriangle";
import Aple from "./components/Aple";
import SweetAlert2 from "react-sweetalert2";

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
    pertanyaan: "Pinggul dan paha kamu lebih besar dibandingkan yang lainnya?",
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

function Survey() {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(null);
  const [hasil, setHasil] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [swalProps, setSwalProps] = useState({});

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
      const form = `survey=${newInput}`;
      axios
        .post(`https://mairaa.id/apis.php?route=createRecord`, form, {
          "Content-Type": "text/html",
        })
        .then((result) => {
          const s = result.data;
          console.log(s);
          setShow(null);
          if (s.status) {
            setHasil(s.survey);
            setInput("");
          } else {
            setSwalProps({
              show: true,
              title: "Wahh nampaknya Anda belum login",
              text: "Silahkan login terlebih dahulu untuk melihat hasilnya ya kakak :)",
            });
          }
          setTimeout(() => {
            setAnimate(true);
          }, 1000);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      fineData(newInput);
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

  const handleBack = () => {
    setAnimate(false);
    setTimeout(() => {
      const newInput = input.slice(0, -1);
      console.log(newInput);
      setInput(newInput);
      if (newInput.length > 0) {
        console.log("ada isinya");
        fineData(newInput);
      } else {
        console.log("kosong");
        handleNew();
      }
      setAnimate(true);
    }, 1000);
  };

  const fineData = (text) => {
    const findRows = rows.find(
      (item) => item.tag && item.tag.includes(text.toString())
    );
    console.log(findRows);
    if (findRows) {
      setShow(findRows);
    }
  };

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 3,
      }}>
      <Stack>
        {show !== null && (
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
        )}
        {hasil !== null && (
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
                Coba Lagi
              </Button>
            </Grid>
          </Flip>
        )}
        <Grid sx={{ display: "flex", justifyContent: "center" }}>
          {input.length > 0 && (
            <Flip left when={animate}>
              <Button
                variant="text"
                size="small"
                color="primary"
                onClick={() => handleBack()}>
                <RotateLeftIcon />
                Kembali ke pertanyaan sebelumnya
              </Button>
            </Flip>
          )}
        </Grid>
        {hasil && (
          <>
            {hasil.body_shape_name === "Hourglass Body Shape" && <Haourglass />}
            {hasil.body_shape_name === "Rectangle Body Shape" && <Rectangle />}
            {hasil.body_shape_name === "Pear Body Shape" && <Pear />}
            {hasil.body_shape_name === "Inverted Triangle Body Shape" && (
              <InvertedTriangle />
            )}
            {hasil.body_shape_name === "Apple Body Shape" && <Aple />}
          </>
        )}
      </Stack>
      <SweetAlert2 {...swalProps} />
    </Grid>
  );
}

export default Survey;
