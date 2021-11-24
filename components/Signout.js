import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export function Signout( props ){

const handlePress = () => {

}

    return(
        <TouchableOpacity onPress={ () => props.handler() }>
            <Text style={styles.singoutText}>Signout</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    singoutText: {
        color: "black",
    },
})