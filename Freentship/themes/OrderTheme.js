import { StyleSheet, } from 'react-native'

const stylesOrder = StyleSheet.create({
  
  btnDatDon: {
    backgroundColor: "#E94730",
    borderRadius: 15,
    width: "97%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  txtDatDon: {
    color: "#fff",
  },

  btnThayDoi: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 80,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.3,
    borderColor: "#808080",
  },

  txtThayDoi: {
    color: "#000",
    fontWeight: 'bold',
  },

  btnSl: {
    backgroundColor: "#fff",
    borderRadius: 5,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.3,
    borderColor: "#808080",
  },


  imageMini: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },

  container: {
    marginLeft: 10,
  },

  space: {
    paddingBottom: 10,
  },
});

export default stylesOrder;