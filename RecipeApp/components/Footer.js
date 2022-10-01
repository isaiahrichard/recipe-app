import React from 'react'
import { View, Image, StyleSheet} from 'react-native'

const Footer = () => {

    const ImgSources = [require('../Images/Home.png'), require('../Images/Food.png'), require('../Images/Chef.png'), require('../Images/User.png')]
    
  return (
    <View style={styles.FooterWrapper}> 
        {ImgSources.map((ImgSrc, index) => {
            return <View style={styles.IconContainer} key={index}> 
                <Image source={ImgSrc} style={styles.FooterIcons} />
            </View>
        })}
    </View>
  )
}

const styles = StyleSheet.create({
    FooterIcons: {
        height: 30,
        width: 35,
        resizeMode: 'contain'
    },
    IconContainer: {
    },
    FooterWrapper: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FF6C6C',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    }
  });

export default Footer