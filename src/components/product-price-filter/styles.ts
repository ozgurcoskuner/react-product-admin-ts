export const textFieldStyles = {
  htmlInput: { min: 0 },
  input: {
    sx: {
      "& .MuiInputBase-input": {
        fontSize: "14px",
        padding: "10px",
      },
      "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
        {
          display: "none",
        },
      "& input[type=number]": {
        MozAppearance: "textfield",
      },
    },
  },
  inputLabel: {
    sx: { fontSize: "14px" },
  },
};
export const buttonsWrapperStyles = {
  display: "flex",
  gap: "10px",
};

export const applybuttonStyles = {
  height: "30px",
  textTransform: "none",
  backgroundColor: "#4A4A4A",
  color: "white",
  border: "1px solid black",
  "&:hover": {
    backgroundColor: "#5C5C5C",
  },
  fontSize: "14px",
};
export const resetbuttonStyles = {
  height: "30px",
  textTransform: "none",
  backgroundColor: "transparent",
  color: "black",
  border: "1px solid black",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
  fontSize: "14px",
  padding: "6px 12px",
};

export const textfieldWrapperStyles = { display: "flex", gap: 2 };
export const wrapperStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 1,

  padding: "10px",
};
