import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "30%",
    backgroundColor: "#ff1168",
    justifyContent: "flex-end",
    paddingVertical: 30,
    paddingHorizontal: 50,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  title: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: "bold",
  },
  inputContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  input: {
    height: 50,
    flex: 1,
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 15,
    padding: 10,
    fontSize: 16,
    fontWeight: "300",
    color: "#FFF",
  },
  buttonAdd: {
    backgroundColor: "#9e1e4c",
    height: 50,
    width: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttonAddText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
