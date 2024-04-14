import React, { useState } from "react";
import {View, TextInput, Text, StyleSheet, Button } from 'react-native'
import Display from "../viewr";
export default function Formulario() {
    const [usuario, setUsuario] = useState(null)
    const [senha, setSenha] = useState(null)

    return(
        <View style={styles.container}>
            <Text>Usuario</Text>
            <TextInput style={styles.inpuSty} 
                placeholder="usuario:"
                keyboardType="numeric"
                onChangeText={setUsuario}
            ></TextInput>
            <Text>Senha</Text>
            <TextInput 
                onChangeText={setSenha}
                style={styles.inpuSty}
                placeholder="Senha: "
                keyboardType="numeric"
            ></TextInput>
            <Button title="entrar"></Button>
            <Display usu={usuario} sen={senha} />


        </View>
    );

}

function clicado() { 
    
}

var styles = StyleSheet.create({
    container:{
        width:"400px",
        backgroundColor:"#ccc",
        flexDirection:'column',
        alignContent:"center",
        alignItems:'center',
        padding:"40px",
    },
    inpuSty:{

        width:"400px",
        height:"50px",
        marginTop:"10px",
        backgroundColor:"white",
        borderBlockColor:'black',

    }
})