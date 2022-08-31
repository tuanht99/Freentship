import {
  StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const StyleInforUser = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fdRow: {
    flexDirection: 'row',
  },

  imgFood:{
     flexDirection: 'row',
     maxWidth: windowWidth,
     height:windowHeight/4,
  },
  iconCicle:{
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
      top:10,
      backgroundColor: '#222222', borderRadius: 50
  },
  rightIcon:{
      left:10,
  },
  heartIcon:{
      left:230,
  },
  srearchIcon:{
      left:240,
  },
  sharechIcon:{
    backgroundColor: '#fff',
    top:170,
    left:200,
  },
  orderStatusTrue: {
    color: '#00FF00',
    fontWeight: '700',
  },
  orderStatusFalse: {
    color: '#999999',
    fontWeight: '700',
  }
  , btnCategory:{
    flexDirection: 'row', justifyContent: 'space-evenly' ,  marginTop: 10
  }
  , category:{
    borderRadius: 20 , backgroundColor: "#C0C0C0" , paddingLeft: 15 , paddingRight: 15 
  },
  ml15:{paddingLeft: 15}
  ,
  loation:{
    fontSize: 20, marginLeft:45, marginRight: 5 
  }
});

export default StyleInforUser