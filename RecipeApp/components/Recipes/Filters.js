import React from 'react'
import {View, StyleSheet} from 'react-native';

import CheckBoxMsg from '../CheckBoxMsg';

const Filters = () => {
  return (
    <View style={styles.FiltersWrapper}>
        <CheckBoxMsg message="Only show me recipes I can make"/>
        <CheckBoxMsg message="I only have       2 hours        to cook"/>
    </View>
  )
}

const styles = StyleSheet.create({
    FiltersWrapper: {
        backgroundColor: '#FFC7C7',
        borderRadius: 10,
        maxHeight: 73,
        marginHorizontal: 16
    }
})

export default Filters