// * {
//     padding: 0,
//     margin: 0,
//     box-sizing: border-box,
//     font-family: "caveatregular",
//   }
export const stylesModal = {
  Background: {
    position: "fixed",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: "999",
    width: "100%",
    height: "100%",
  },

  Modal: {
    zIndex: "9999",
    position: "absolute",
    top: "50%",
    left: "50%",
    backgroundColor: "rgb(194, 198, 204)",
    width: "400px",
    height: "470px",
    marginLeft: "-200px",
    marginTop: "-235px",
    border: "2px solid rgb(126, 4, 4)",
  },

  Modal__title: {
    textAlign: "center",
    textTransform: "uppercase",
    margin: "45px 0",
    fontSize: "24px",
    color: "rgb(126, 4, 4)",
  },

  Modal__span: {
    position: "absolute",
    top: "10px",
    right: "15px",
    zIndex: "99999",
    textDecoration: "none",
    color: "rgb(126, 4, 4)",
    fontSize: "35px",
    fontWeight: "700",
    cursor: "pointer",

    "&:hover": {
      color: "#fff",
    },
  },

  Form__name: {
    display: "block",
    color: "lightslategray",
    fontSize: "24px",
    padding: "15px",
    border: "none",
    margin: "20px",
    width: "90%",
    borderWidth: "1px",
    borderColor: "transparent",
    "&:hover": {
      border: "1px solid rgb(126, 4, 4)",
    },
    "&:focus": {
      outline: "none",
      border: "1px solid rgb(126, 4, 4)",
    },
  },

  Form__email: {
    display: "block",
    color: "lightslategray",
    fontSize: "24px",
    padding: "15px",
    border: "none",
    margin: "20px",
    width: "90%",
    borderWidth: "1px",
    borderColor: "transparent",
  },

  Form__message: {
    display: "block",
    color: "lightslategray",
    fontSize: "24px",
    padding: "15px",
    border: "none",
    margin: "20px",
    width: "90%",
    borderWidth: "1px",
    borderColor: "transparent",
    "&:focus": {
      outline: "none",
      borderWidth: "1px",
      borderColor: "rgb(126, 4, 4)",
    },
  },

  Form__button: {
    display: "block",
    fontSize: "24px",
    padding: "15px",
    border: "none",
    margin: "20px",
    width: "90%",
    borderWidth: "1px",
    borderColor: "transparent",
    textDecoration: "none",
    color: "white",
    backgroundColor: "rgb(126, 4, 4)",
    textAlign: "center",
    borderRadius: "5px",
    "&:hover": {
      borderWidth: "1px",
      borderColor: "white",
      cursor: "pointer",
    },
  },
};
