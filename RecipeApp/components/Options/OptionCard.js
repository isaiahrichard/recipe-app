import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native';

import OptionButton from './OptionButton';

const OptionCard = ({ buttonInfoArray, title }) => {

  return (
    <View style={styles.OptionCard}>
        <Text style={styles.CardTitle}>{title}</Text>
        <View style={styles.ButtonContainer}>
            {buttonInfoArray.map((buttonInfo, index) => {
                return <View style={{width: '50%', marginBottom: 12}} key={index}>
                            <OptionButton addMode={buttonInfo.addMode} title={buttonInfo.title}/>
                        </View>
            })}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    OptionCard:{
        marginHorizontal: 12,
        marginTop: 24
    },
    ButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    CardTitle: {
        paddingBottom: 5,
        paddingLeft: 6,
        fontSize: 16,
        color: '#000',
        fontFamily: 'Poppins-Regular'
    }
  });

export default OptionCard