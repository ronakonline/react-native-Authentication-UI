import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 20
    },
    header: {
      marginTop: 20,
      flexDirection: "row"
    },
    backText: {
      fontSize: 20,
      fontWeight: "bold",
      color: "black"
    },
    body: {
      marginTop: 40,
      marginBottom: 20
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 10
    },
    text: {
      fontSize: 16,
      marginBottom: 20,
      lineHeight: 20
    },
    form: {
      marginTop: 10,
      marginBottom: 20
    },
    inputContainer: {
      flexDirection: "row",
      marginBottom: 10,
      backgroundColor: '#F1F5F9',
      height: 50,
      alignItems: 'center',
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    formText: {
      flex:2.5,
      fontSize: 18,
      color: '#B1B5BD',
      marginRight: 10,
    },
    input: {
      flex: 7,
      fontSize: 16,
      color: '#000',
    },
    passwordText: {
      fontSize: 13,
      color: '#B1B5BD',
      marginBottom: 10,
      lineHeight: 20,
    },
    registerBtn: {
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: '#1A202E',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
  
    },
    footer: {
      alignItems: 'center',
      marginTop: 30
    },
    termsText: {
      fontSize: 14,
      color: '#8692A4',
      marginBottom: 10,
      lineHeight: 20,
      fontWeight: 'bold',
    },
    blackText: {
      color: '#3D424E',
      textDecorationLine: 'underline',
    },
    loginFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 40,
    },
    alreadyText: {
      fontSize: 16,
      color: '#6A7583',
      marginBottom: 10,
      lineHeight: 20,
    },
    loginText: {
      fontSize: 16,
      color: '#1A202E',
      marginBottom: 10,
      marginLeft: 10,
      lineHeight: 20,
    },
  
  });
