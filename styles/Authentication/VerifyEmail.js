import { StyleSheet, Platform } from "react-native";

export const CELL_SIZE = 60;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = "#fff";
export const NOT_EMPTY_CELL_BG_COLOR = "#0F172A";
export const ACTIVE_CELL_BG_COLOR = "#f7fafe";

const styles = StyleSheet.create({
  codeFiledRoot: {
    height: CELL_SIZE,
    marginTop: 40,
    paddingHorizontal: 20,
    justifyContent: "center"
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    fontSize: 30,
    textAlign: "center",
    borderRadius: CELL_BORDER_RADIUS,
    color: "#0F172A",
    backgroundColor: "#fff",

    // IOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3
  },

  // =======================

  root: {
    minHeight: 800,
    padding: 20,
    backgroundColor: "#fff"
  },
  title: {
    paddingTop: 25,
    color: "#4B5769",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center"
  },
  icon: {
    width: 217 / 2.4,
    height: 158 / 2.4,
    marginLeft: "auto",
    marginRight: "auto"
  },
  subTitle: {
    paddingTop: 15,
    fontSize: 16,
    color: "gray",
    textAlign: "center"
  },
  nextButton: {
    marginTop: 40,
    borderRadius: 8,
    height: 60,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    width: "50%",
    alignSelf: "center"
  },
  nextButtonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff"
  },
  resendCode: {
    paddingTop: 30,
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    fontWeight: "600"
  },
  resendCodeText: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    fontWeight: "600"
  },
  body: {
    flex: 0.9
  },
  footer: {
    flex: 0.2
  },
  imageContainer: {
    marginTop: 50,
    padding: 10,
    backgroundColor: "#E2E8F0",
    height: 120,
    width: 130,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  colorText: {
    color: "#0F172A"
    }
});

export default styles;
