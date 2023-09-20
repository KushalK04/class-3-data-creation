import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { bookStore } from '../data/books';
import { useState } from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

export default function About({ navigation }) {

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    const [data, setData] = useState();

    const addingData = () => {
        console.log("started");
        setData(bookStore);
    }


    return (
        <View style={styles.container}>
            <Card style={styles.box}>
                <Card.Title title="Welcome" left={LeftContent} />
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            </Card>


            <Button title="Show Data" onPress={() => addingData()} />
            {
                data && data.books.map((b, index) => {
                    if (b.category.toLowerCase() == "java") {
                        return (
                            <View key={index}>
                                <Text>{b.title}</Text>
                                {
                                    b.authors && b.authors.map((a, ind) => {
                                        return (
                                            <View key={ind}>
                                                <Text>{a}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        )
                    }
                })
            }



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: "90%"
    }
});
