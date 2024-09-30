export const imageEditStyle = {
  display: "flex",
};
export const uploadStyles = {
  margin: "auto",
};

export const imageStyle = {
  height: "100px",
};

export const actionStyles = {
  display: "flex",
  justifyContent: "flex-end",
  gap: 2,
  marginTop: "20px",
};
export const formWrapperStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export const textfieldNumberStyles = {
  htmlInput: { min: 0 },
  input: {
    sx: {
      "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
        {
          display: "none",
        },
      "& input[type=number]": {
        MozAppearance: "textfield",
      },
    },
  },
};
