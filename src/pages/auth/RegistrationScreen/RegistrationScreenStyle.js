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
  btnSelectImage: {
    position: "absolute",
    bottom: 14,
    left: 107,
  },
  regPhoto: {
    width: 120,
    height: 120,
    position: "absolute",
    borderRadius: 16,
  },
  avatar: {
    transform: [{ translateX: -50 }, { translateY: -50 }],
    position: "absolute",

    left: "50%",
    width: 120,
    height: 120,
  },
  div: {
    backgroundColor: "#FFFF",

    paddingHorizontal: 16,
    borderRadius: 25,
    top: "40%",
    height: "100%",
  },
  logForm: {
    display: "flex",
    width: 400,
    gap: 10,
    marginBottom: 43,
  },
  regForm: {
    display: "flex",
    width: 400,
    gap: 10,
    marginBottom: 43,
    marginTop: 95,
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
