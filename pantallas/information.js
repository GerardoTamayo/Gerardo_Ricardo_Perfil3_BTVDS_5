
import React from 'react';
import { ScrollView, StyleSheet, View, Button, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const comida = [
    {
        id: 1,
        description: 'Pizza',
        photo: require('../imagenes/pizza.jpg'),
    },
    {
        id: 2,
        description: 'Tacos',
        photo: require('../imagenes/tacos.jpg'),
    },
    {
        id: 3,
        description: 'Pupusas',
        photo: require('../imagenes/pupusas.jpg'),
    },
    {
        id: 4,
        description: 'Carne',
        photo: require('../imagenes/carne.jpg'),
    },
    {
        id: 5,
        description: 'Hamburguesa',
        photo: require('../imagenes/hamburguer.jpg'),
    },
    {
        id: 6,
        description: 'Pollo',
        photo: require('../imagenes/pollo.jpg'),
    },
];

const MealsScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* <View style={styles.buttonContainer}>
                <Button
                    title="Equipo"
                    onPress={() => navigation.navigate('cards')}
                />
            </View> */}
            <Text style={styles.title}>Comidas favoritas</Text>
            {comida.map((meal) => (
                <Card key={meal.id} style={styles.card}>
                    <Card.Cover source={meal.photo} style={styles.image} />
                    <Card.Content style={styles.content}>
                        <Paragraph style={styles.description}>{meal.description}</Paragraph>
                    </Card.Content>
                </Card>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#FC9E4F'
    },
    card: {
        width: 200,
        marginVertical: 10,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: '#fff',
        height: 250,
        marginBottom: 40
    },
    image: {
        height: 200,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    content: {
        padding: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#000000',
        marginBottom: 10,
    },
    buttonContainer: {
        alignSelf: 'flex-end',
        marginTop: 2,
        marginBottom: 15,
        marginRight: 10,
        width: 'auto',
        borderRadius: 2
    },
    title: {
        fontSize: 40,
        marginBottom: 20
    }
});

export default MealsScreen;
