import { StyleSheet } from "react-native";

export const css = StyleSheet.create({
  logBtn: {
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginBottom: 16,
    borderRadius: 100,
    width: 400,
  },
  textLogBtn: {
    color: "white",
    alignSelf: "center",
    fontWeight: 400,
    fontSize: 16,
  },
  div: {
    bottom: 0,
    backgroundColor: "#FFFF",
    padding: 20,
    paddingHorizontal: 16,

    borderRadius: 25,
    top: "50%",
    height: "100%",
  },
  logForm: {
    display: "flex",
    width: 400,
    gap: 10,
    marginBottom: 43,
  },
  didntHaveAcc: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
  },

  titlePage: {
    fontSize: 30,
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: 500,
    color: "#212121",
    marginBottom: 33,
  },

  input: {
    width: "100%",
    backgroundColor: "rgba(246, 246, 246, 1)",
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(232, 232, 232, 1)",
    borderWidth: 2,
  },
  inputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "white",
  },
  textSignUp: {
    color: "rgba(27, 67, 113, 1)",
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Roboto-Regular",
  },
  textSignUpBtn: {
    color: "rgba(27, 67, 113, 1)",
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Roboto-Regular",
    textDecorationLine: "underline",
  },
});
