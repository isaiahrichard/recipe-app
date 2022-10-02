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
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderWidth: 0,
    borderColor: '#000',
    height: 40,
    borderRadius: 10,
    margin: 12,
    marginHorizontal: 16,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  },
  ImageStyle: {
      padding: 10,
      margin: 10,
      height: 15,
      width: 15,
      resizeMode: 'stretch',
      alignItems: 'center',
      position: 'absolute',
      zIndex: 1
  },
  textStyle: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    width: '100%',
    fontSize: 16,
    paddingTop: 3,
    paddingBottom: 0,
    paddingLeft: 50,
    borderRadius: 10,
    height: '100%',
    zIndex: 2
  }
});

export default SearchComp;