import { View, Text ,Image, StyleSheet} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container} >
        <TouchableOpacity>
            <Image 
                style={styles.logo}
                source={require('../../assets/header-logo.png')}
                />
        </TouchableOpacity>
        <View style={styles.iconsContainer}>
           
            <TouchableOpacity>
                <Image  source={{ 
                    uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'}} 
                    style={styles.icon}
                    />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image  source={{ 
                    uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'}} 
                    style={styles.icon}
                    />
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>20</Text>
                </View>
                <Image  source={{ 
                    uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'}} 
                    style={styles.icon}
                    />
            </TouchableOpacity>


        </View>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:10,
        
    },
    iconsContainer:{
        flexDirection:'row',
    },
    logo:{
        width:80,
        height:50,
        resizeMode: 'contain',
    },
    icon:{
        width: 20,
        height: 20,
        marginLeft:10,
        resizeMode:'contain'
    },

    unreadBadge:{
        backgroundColor: '#FF3250',
        position:'absolute',
        left:20 ,
        bottom:18,
        width:20,
        height:10,
        zIndex:100,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center'
    },
    unreadBadgeText:{
        color:'white',
        
    }


})

export default Header