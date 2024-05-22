import React from 'react';
import { Button, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

export default function Pantalla({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* <View style={styles.buttonContainer}>
                <Button
                    title="Información"
                    onPress={() => navigation.navigate('information')}
                />
            </View> */}
            <Text style={styles.title}>Equipo</Text>
            <Card containerStyle={styles.card}>
                <Card.Title>Gerardo Javier Tamayo Menéndez</Card.Title>
                <Text style={styles.carnet}>20220669</Text>
                <Image
                    style={styles.image}
                    source={require('../imagenes/yo.jpg')}
                />
            </Card>
            <Card containerStyle={styles.card}>
                <Card.Title>Ricardo Jose Perez Hernandez</Card.Title>
                <Text style={styles.carnet}>20220194</Text>
                <Image
                    style={styles.image}
                    source={require('../imagenes/ricardo.jpg')}
                />
            </Card>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FC9E4F',
        paddingVertical: 30,
    },
    title: {
        fontSize: 50,
        marginBottom: 50,
    },
    card: {
        width: '75%',
        borderRadius: 10,
        shadowRadius: 4,
        marginBottom: 40,
    },
    image: {
        width: 'auto',
        height: 300,
        borderRadius: 25,
    },
    buttonContainer: {
        alignSelf:'flex-end',
        marginTop: 5,
        marginBottom: 5,
        marginRight:10,
        width: 'auto',
        borderRadius: 2
    },
    carnet: {
        textAlign: 'center',
    },
});
