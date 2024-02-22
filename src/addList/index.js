import { SafeAreaView } from "react-native-safe-area-context";
import * as React from 'react';
import { Box, FormControl, HStack, Input, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import { Pressable } from "react-native";
import Card from "../components/card";

export function AddList() {

    const data = [{
        Item: "melao", Quantidade: 5, Categoria: "fruta"
    }]

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>

                <Box alignItems="center" p={8} >
                    <Text style={styles.textInit}>Lista de compras</Text>
                </Box>
                <Box alignItems="center">
                    <FormControl maxW="355px">
                        <FormControl.Label mx="3">Item</FormControl.Label>
                        <Input mx="3" w="100%" />
                    </FormControl>
                </Box>
                <Box alignItems="center" ml={20}>
                    <HStack space={3} justifyContent="center" >
                        <FormControl maxW="140px">
                            <FormControl.Label mx="3" color="#FFF">Quantidade</FormControl.Label>
                            <Input mx="3" w="100%" />
                        </FormControl>

                        <FormControl maxW="150px">
                            <FormControl.Label mx="3" color="#FFF">Categoria</FormControl.Label>
                            <Input mx="3" w="100%" />
                        </FormControl>
                        <Box p={8} ml={-3}>
                            <Pressable onPress={() => alert("clicou")}>
                                <FontAwesome6 name="circle-plus" size={30} color="#7450AC" />
                            </Pressable>
                        </Box>
                    </HStack>
                </Box>

                {data &&
                    <Box alignItems="center" p={3}>
                        <Card data={data}></Card>
                    </Box>
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    textInit: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF"
    },
    iconPlus: {
        padding: 5,

    },
    safeAreaView: {
        flex: 1,
        backgroundColor: 'black', // Define o fundo da tela como preto
    },
    container: {
        flex: 1,
        backgroundColor: 'black', // Define o fundo da tela como preto
    },
})
