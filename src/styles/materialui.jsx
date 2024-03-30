import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#272625",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#272625",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#D6C9C2",
    },
    "&:hover fieldset": {
      borderColor: "#272625",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#272625",
    },
  },
  fontFamily: '"Amiri", serif',
});

export const CssBtn = styled(Button)({
  backgroundColor: "#d6c9c2",
  color: "#35241A",
  borderRadius: "30px",
  width: "150px",
  textTransform: "none",
  fontFamily: '"Amiri", serif',
  fontSize: 17,
  "&:hover": {
    backgroundColor: "#DACEC8",
    borderColor: "#35241A",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#DACEC8",
    borderColor: "#35241A",
  },
});
