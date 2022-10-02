import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {View, StyleSheet, Text} from 'react-native';



const CheckBoxMsg = ({message}) => {

    const [toggleCheckbox, setToggleCheckbox] = useState(false);

  return (
    <View style={styles.CheckboxWrapper}>
          <CheckBox
          value={toggleCheckbox}
          onValueChange={(newValue) => setToggleCheckbox(newValue)}
          tintColors={{ true: '#FF6C6C'}}
          />
          <Text style={styles.CheckboxMsg}>{message}</Text>
        </View> 
  )
}

const styles = StyleSheet.create({
    CheckboxWrapper: {  
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 50
    },
  
    CheckboxMsg: {
      fontSize: 13,
      fontFamily: 'Poppins-Regular',
      color: '#000',
      paddingLeft: 10,
      paddingTop: 2
    }
  })

export default CheckBoxMsg