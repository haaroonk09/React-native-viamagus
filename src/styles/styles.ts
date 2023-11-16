import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  full: {
    flex: 1,
  },
  backgroundTransparent: {
    backgroundColor: "transparent",
  },
  backgroundWhite: {
    backgroundColor: "#FFFFFF",
  },
  backgroundBlue: {
    backgroundColor: "#6231ad0f",
  },
  backgroundDarkBlue: {
    backgroundColor: "#452C55",
  },
  backgroundLightBlue: {
    backgroundColor: "#6231AD",
  },
  backgroundBlue2: {
    backgroundColor: "#F6F3FA",
  },
  f12: {
    fontSize: 12,
  },
  f14: {
    fontSize: 14,
  },
  f16: {
    fontSize: 16,
  },
  f24: {
    fontSize: 24,
  },
  fw500: {
    fontFamily:"Montserrat-Medium"
  },
  fw600: {
    fontFamily:"Montserrat-SemiBold"
  },
  fw700: {
    fontFamily:"Montserrat-Bold"
  },
  colorWhite: {
    color: "#fff",
  },
  colorlight: {
    color: "#B5C0C8",
  },
  colorGrey: {
    color: "#727682",
  },
  colorBlack: {
    color: "#4F4F4F",
  },
  colorBlue: {
    color: "#D2BAF5",
  },
  colorBlue1: {
    color: "#B296DC",
  },
  jcRSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jcRSpaceEvenly: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jcRSpaceAround: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  jcRCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  jcRFlexEnd: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  jcRFlexStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  jcCCenter: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  jcCFlexStart: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  jcCFlexEnd: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  
});

export default globalStyles;
