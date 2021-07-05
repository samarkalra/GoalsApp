/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//jaane kya baat h neend nhi aati
//lag ja gale

import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    if (enteredGoal) {
      setCourseGoals(currentGoals => {
        const newGoal = {
          key: currentGoals.length,
          text: enteredGoal
        }
        return [newGoal, ...currentGoals];
      });
      setIsAddMode(false);
    } else {
      Alert.alert('Please enter goal');
    }
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId);
    }));
  }

  return (
    <View style={styles.screen}>
      <Button title='Add Goal' onPress={() => setIsAddMode(true)} />
      <Text style={styles.text}>Your Goals</Text>
      <GoalInput
        onAddGoal={addGoalHandler}
        cancelAddGoal={() => setIsAddMode(false)}
        isVisible={isAddMode}
      />
      <FlatList
        data={courseGoals}
        renderItem={({ item }) => (
          <GoalItem item={item} onDelete={removeGoalHandler} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50
  },
  text: {
    alignSelf: 'center',
    marginTop: 30
  }
});

export default App;
