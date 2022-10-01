import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';

const SearchComp = () => {

  const [searchText, setSearchText] = useState("");


  return (
    <View style={styles.SectionStyle}>
        <Image
            source={require('../Images/SearchIcon.png')} 
            style={styles.ImageStyle}
        />
        <TextInput
            style={styles.textStyle}
            placeholder="Search for a recipe"
            placeholderTextColor="#000"
            underlineColorAndroid="transparent"
            spellCheck={false}
            value={searchText}
            onChange={(inputText) => setSearchText(inputText)}
        />
    </View>
  );
};

const styles = StyleSheet.create({

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderWidth: 0,
    borderColor: '#000',
    height: 40,
    borderRadius: 10,
    margin: 12,
    marginBottom: 4,
    marginHorizontal: 16,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  },
  ImageStyle: {
      padding: 10,
      margin: 10,
      marginRight: 15,
      height: 21,
      width: 21,
      resizeMode: 'stretch',
      alignItems: 'center',
  },
  textStyle: {
    color: 'black',
    flex: 1,
    fontFamily: 'Poppins-Black'
  }
});

export default SearchComp;