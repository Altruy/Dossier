import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text>The Calender Screen!</Text>
    </View>
  );
};

Calendar.navigationOptions = {
  headerTitle: "Calendar",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Calendar;
