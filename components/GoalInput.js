import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';

const GoalInput = ({ onAddGoal, cancelAddGoal, isVisible }) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    const onCancel = () => {
        if (enteredGoal) setEnteredGoal('');
        cancelAddGoal();
    }

    return (
        <Modal
            visible={isVisible}
            animationType='slide'
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Course Goal'
                    style={styles.textInput}
                    value={enteredGoal}
                    onChangeText={goalInputHandler}
                />
                <View style={styles.btnContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' color='red' onPress={onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title='ADD' onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: '80%',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginBottom: 10
    },
    btnContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;