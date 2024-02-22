import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export function Home() {
    return (
        <SafeAreaView style={style.safe}>
            <View style={style.view}>
                <Text style={style.text}>
                    teste
                </Text>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    safe: {
        flex: 1,
    },
    view: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontWeight: "bold",


    }
});