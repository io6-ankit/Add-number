import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { red } from "@mui/material/colors";

function App() {
  // let count = 1;
  const State = useState();
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
    console.log("clicked");
  };
  const DecNum = () => {
    setCount(count - 1);
  };
  return (
    <>
      <Box
        sx={{
          height: "250px",
          width: "250px",
          border: "1px solid black",
          margin: "120px 0 0 600px",
          backgroundColor: "pink",
          WebkitBorderRadius: "20px",
        }}
      >
        <Box variant="h1" className="box">
          {count}
        </Box>
        <button onClick={IncNum} className="button">
          IncValue
        </button>
        <button onClick={DecNum} className="button-2">
          DecNum
        </button>
        {/* <Button variant="contained" className="Inc-button" onClick={IncNum}>
          Text
        </Button>
        <Button
          sx={{ marginRight: "30px" }}
          variant="contained"
          size="large"
          className="Dec-button"
          onClick={DecNum}
        >
          valueLess
        </Button> */}
      </Box>
    </>
  );
}

export default App;
