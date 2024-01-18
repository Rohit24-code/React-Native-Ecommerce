import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    Header: {
      fontSize: 17,
      fontWeight: 'bold',
      marginTop: 12,
      color: '#041E42',
    },
    loginScreen: {
      alignItems: 'center',
    },
    inputView: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      backgroundColor: '#D0D0D0',
      paddingVertical: 5,
      marginTop: 30,
      borderRadius: 8,
    },
    inputRegisterView: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      backgroundColor: '#D0D0D0',
      marginTop: 15,
      borderRadius: 8,
    },
    TextInput: {
      color: 'grey',
      width: 270,
      marginVertical: 10,
      fontSize: 18,
    },
    IconStyle: {
      paddingLeft: 10,
    },
    error: {
      color: 'red',
    },
    IconEyeStyle: {
      paddingRight: 20,
    },
    keepMeLogged: {
      marginTop: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    forgotPassword: {
      color: '#007fff',
      fontWeight: '500',
    },
    loginButton: {
      width: 200,
      backgroundColor: '#FEBE10',
      borderRadius: 6,
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: 15,
    },
    loginText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    textForSignUp: {
      textAlign: 'center',
      color: 'grey',
      fontSize: 16,
      marginTop:5
    },
    pressableStyle: {
      marginTop: 15,
    },
  });