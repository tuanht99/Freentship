import { StyleSheet } from "react-native";

const OrderHistoryTheme = StyleSheet.create({
    container: {
        flex: 1,

    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        margin: 10

    },
    titleIcon: {
        fontWeight: '500',
        marginBottom: 10,
        color: "#00FF33"
    },
    titleText: {
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 19,
        marginBottom: 10,
    },
    titleContent: {
        fontSize: 17
    },
    itemContainer: {
        flexDirection: "row",
        marginBottom: 10,
    },
    itemInfo: {
        padding: 10,
        flex: 3
    },
    imageItem: {
        flex: 1,
        width: 80,
        height: 80,
        borderRadius: 10,
        margin: 10,
    },
    storeName: {
        fontWeight: "bold",
        fontSize: 17
    },
    address: {
        color: "#4F4F4F"
    },
    comment: {
        marginTop: 10,
        backgroundColor: "#CFCFCF",
        borderRadius: 10,
        padding: 5,
        width: 150,
        textAlign: "center",
        fontWeight: "bold",
    },
    imageShipper: {
        width: 70,
        height: 70,
        borderRadius: 100,
        margin: 10,
    },
    shipperRating: {
        position: "absolute",
        bottom: -5,
        right: 10,
        width: 70,
        flexDirection: "row",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    mr10: {
        margin: 10
    },
    orderCode: {
        color: "#999999",
        marginBottom: 5
    },
    line: {
        height: 1,
        backgroundColor: "#AAAAAA",
        marginTop: 10,
        marginBottom: 10
    },
    textBold: {
        fontWeight: "bold",
        
    },
    reOrderContainer: {
        height: 80, borderTopWidth: 1, borderColor: "#C0C0C0" 
    },
    order:{
        flexDirection:"row",
        backgroundColor: "#0066FF",
        borderRadius: 10,
        height: 40,
        margin:20,
        justifyContent: "center",
        alignItems: "center",
    }

})
export default OrderHistoryTheme
