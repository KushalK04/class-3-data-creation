import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { List } from 'react-native-paper';
import * as React from 'react';

export default function Home({ navigation }) {

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    const [number, setNumber] = useState(1);

    const check = () => {
        if (number == 1) {
            console.log("ONE");
        } else if (number == 2) {
            console.log("TWO");
        } else if (number == 3) {
            navigation.push('About')
        }
        setNumber(number + 1);

    }

    return (
        <View style={styles.container}>
            <View style={styles.accord}>
                <List.Section>
                    <List.Accordion
                        title="Open This"
                        left={props => <List.Icon {...props} icon="folder" />}>
                        <List.Item title="Click Here" onPress={() => check()}
                            style={number === 1 ? styles.btnRed :
                                number === 2 ? styles.btnBlue : styles.btnGreen} />
                    </List.Accordion>
                </List.Section>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        textAlign: 'center'
    },
    accord: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },
    btnBlue: {
        alignItems: 'center',
        backgroundColor: '#63C5DA',
        borderColor: '#63C5DA',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10
    },
    btnRed: {
        alignItems: 'center',
        backgroundColor: '#80000',
        borderColor: '#80000',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10
    },
    btnGreen: {
        alignItems: 'center',
        backgroundColor: '#00563B',
        borderColor: '#00563B',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10
    },
});
