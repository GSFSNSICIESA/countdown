import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CountdownTimer = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimeRemaining() {
    const total = Date.parse(targetDate) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.paragraph}>البــاقي على رمضان</Text>
      <View style={styles.container}>
        <View style={styles.countdownBox}>
          <View style={styles.box}>
            <Text style={styles.text}>Days: {timeRemaining.days}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Hours: {timeRemaining.hours}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Minutes: {timeRemaining.minutes}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Seconds: {timeRemaining.seconds}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  container: {
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 10,
    fontSize: 48
  },
  countdownBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'black',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    
  },
});

export default CountdownTimer;
