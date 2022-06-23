import React from 'react';
import {StyleSheet, Text, View, Linking} from 'react-native';
import {useStateValue} from '../views/stateProvider';


const WaterUsageScreen = () => {
  const [{user, score}] = useStateValue();
  return (
    <View style={styles.resultScreen}>
      <Text style={styles.resultText}>
        Water Usage {score} litres/day
      </Text>
      <Text style={styles.resultText}>
        Canada Average Water Usage 1022 litres/day
      </Text>
    </View>
  );
};

export default WaterUsageScreen;

const styles = StyleSheet.create({
  resultScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 25,
    textAlign: 'center',
    color: '#409cd0',
  },
});