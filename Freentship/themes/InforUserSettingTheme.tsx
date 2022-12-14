import { StyleSheet, } from 'react-native'


const InforSettingView = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: "#DCDCDC",
      width: '100%',
      height: '100%',
    },
    title: {
      color: 'red',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    navigators: {
      margin: 5 ,
      flex: 1,
      display: 'flex',
      paddingTop: 10,
      flexDirection: 'row',
     
      backgroundColor: "white",
  
    },
    avatar: {
      margin: 5,
      flex: 3,
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: "white",
  
    },
    Profile: {
      margin: 5,
      flex: 3,
      display: 'flex',
  
      backgroundColor: 'white',
      flexDirection: 'column',
    },
  
    ChangePassword: {
      margin: 5,
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    navigatorsText: {
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30,
      paddingTop: 15,
    },
    Image: {
      paddingTop: 50,
      width: 50,
      height: 50,
    },
    avatarchange: {
      height: 80, width: 80,
      resizeMode: "contain",
      borderRadius: 50,
      
    },
    profileText: {
      fontSize: 20,
      textAlign: 'center',
      paddingTop: 10,
    },
    
    textProfile: {
      marginLeft: 130,
      fontSize: 20,
      color: 'blue',
    },
    touchableOpacityChangePassword: {
    width: 100
    },
    Phone: {
      flex: 2,
      margin: 5,
      backgroundColor: 'white',
    },
    PhoneText: {
      fontSize: 20,
      textAlign: 'center',
      paddingTop: 10,
      color: 'black',
    },
    textPhone: {
      marginLeft: 110,
      fontSize: 20,
      color: 'blue',
    },
  });
  export default InforSettingView;