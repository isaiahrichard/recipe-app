import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>RecipEasy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
   header: {
    flexDirection: "row",
    height: 71,
    padding: 12,
    backgroundColor: "#FF6C6C",
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 32,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontWeight: '700'
  }
});

export default Header;