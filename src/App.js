import { Grid, Container } from "@mui/material";
import Survey from "./pages/Survey";
import Appbar from "./pages/Appbar";
function App() {
  return (
    <Grid
      sx={{
        backgroundColor: "#F2F3F3",
        minHeight: "100vh", // Membuat tinggi kontainer setidaknya sama dengan tinggi viewport
        display: "flex",
        flexDirection: "column",
      }}>
      <Appbar />
      <Container>
        <Survey />
      </Container>
    </Grid>
  );
}

export default App;
