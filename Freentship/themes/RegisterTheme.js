import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 70,
    flex: 1,
  },

  logoContainer: {
    flex: 2,
  },
  logo: {
    textAlign: 'center',
    color: '#E94730',
    fontWeight: 'bold',
    fontSize: 40,
  },

  guildTextContainer: {
    flex: 2,
  },
  txtWelcome: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#E94730',
  },
  txtPhone: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    color: '#212121',
  },

  inputTextContainer: {
    flex: 2,
  },
  tipPhone: {
    paddingVertical: 10,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    borderColor: '#E94730',
    borderWidth: 1,
    borderRadius: 10,
  },


  btnContainer: {
    flex: 10,
  },
  btnLogin: {
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#E94730',
    width: 300,
  },
  txtLogin: {
    color: 'white',
    textAlign: 'center',
  }
});

