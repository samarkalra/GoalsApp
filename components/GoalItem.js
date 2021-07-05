import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ item, onDelete }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onDelete.bind(this, item.key)}>
            <View style={styles.listItem}>
                <Text>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ddd',
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 5,
        borderStyle: 'dashed'
    }
});

export default GoalItem;