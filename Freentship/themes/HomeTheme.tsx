import { StyleSheet } from 'react-native';
import Colors from './colors';

const baseStyle = {
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
  logoFixed: {
    zIndex: 1,
    backgroundColor: Colors.greyColor,
    borderBottomWidth: 0.2,
    borderColor: Colors.menuGrey,
    width: '100%',
    padding: 15,
  },
};

export default StyleSheet.create({
  container: {
    ...baseStyle.container,
    paddingTop: 45,
  },
  containerWeb: {
    ...baseStyle.container,
  },
  image: {
    position: 'absolute',
    height: 130,
    width: '100%',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.greyColor,
    paddingHorizontal: 4,
  },
  iconStyle: {
    color: Colors.greyColor,
    size: 24,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: Colors.darkColor,
    borderRadius: 25,
    marginHorizontal: 20,
    padding: 10,
    opacity: 0.6,
  },
  logo: {
    backgroundColor: Colors.greyColor,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 0,
    borderWidth: 0.2,
    borderColor: Colors.menuGrey,
    alignSelf: 'center',
    padding: 15,
    marginTop: 123,
  },
  logoFixed: {
    ...baseStyle.logoFixed,
    position: 'absolute',
    alignSelf: 'center',
    top: 45,
  },
  logoFixedWeb: {
    ...baseStyle.logoFixed,
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
  },
  logoText: {
    color: Colors.textColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoTextFixed: {
    color: Colors.textColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  category: {
    backgroundColor: Colors.greyColor,
    marginBottom: 14,
  },
  imageAvarta: {
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: Colors.menuGrey,
  },
  avartaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: Colors.menuGrey,
    borderRadius: 50,
    padding: 10,
  },
  avartaText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textColor,
    marginLeft: 10,
  },
  categoryList: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  categoryIcon: {
    color: Colors.mainColor,
    size: 24,
  },
  categoryText: {
    fontSize: 14,
    color: Colors.textColor,
    textAlign: 'center',
  },
});
