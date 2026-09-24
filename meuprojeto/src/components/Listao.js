import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Cabecalho from "./Cabecalho";
import NovosItens from "./NovosItens";
import AdicionarItem from "./AdicionarItem";

const STORAGE_KEY = "@codeverse_lista";

export function Listao() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem(STORAGE_KEY).then((data) => {
            if (data) setLista(JSON.parse(data));
        });
    }, []);

    const salvar = (novaLista) => {
        setLista(novaLista);
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novaLista));
    };

    const apertarItem = (key) => {
        salvar(lista.filter((item) => item.key !== key));
    };

    const submeterInformacao = (texto) => {
        if (!texto.trim()) return;
        salvar([{ texto, key: Math.random().toString() }, ...lista]);
    };

    return (
        <View style={styles.container}>
            <Cabecalho />
            <View style={styles.conteudo}>
                <AdicionarItem funcao={submeterInformacao} />
                <FlatList
                    data={lista}
                    renderItem={({ item }) => (
                        <NovosItens props={item} funcao={apertarItem} />
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0e5e5",
    },
    conteudo: {
        padding: 40,
        flex: 1,
    },
});
