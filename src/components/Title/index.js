import React from "react"
import {View, Text, StyleSheet} from "react-native"

export default function Title() {
    return(
        <View style={styles.container}>
            <Text>TituloDoForm</Text>
        </View>

    );
}

var styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:"center",
        width:"400px",
        height:"100px",
        backgroundColor:'#ccc',

    },
},
)