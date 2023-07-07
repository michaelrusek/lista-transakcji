import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
  components: {
    // Name of the component
    MuiTextField: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1.6rem !important",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: "1.6rem",
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "1.6rem",
          background: "#fff",
          paddingLeft: "5px",
          paddingRight: "5px",
        },
      },
    },
  },
});

export default theme;
