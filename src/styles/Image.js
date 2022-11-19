import { StyleSheet } from "react-native";

const imageStyle = StyleSheet.create({
    style: {
        marginVertical: 10,
        borderRadius: 15,
        height: '90%',
        width: '90%',
        alignSelf: "center",
        overflow: "hidden",
        resizeMode: "contain"
    },

    profile: {
        borderRadius: 200
    }
})

export {imageStyle}