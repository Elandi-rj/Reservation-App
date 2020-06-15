import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
    function onSearchPress() {
        navigation.navigate("Login");
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <TouchableOpacity onPress={onSearchPress} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Make reservation</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
    },
    body: {
        backgroundColor: '#A3DDE0',
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        elevation: 8,
        backgroundColor: "#008CBA",
        borderRadius: 2,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 5,
    },
    buttonText: {
        fontWeight: 'bold',
        color: "#fff",
        alignSelf: "center",
        textTransform: "uppercase"
    },
};
