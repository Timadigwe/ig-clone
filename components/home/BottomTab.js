import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState} from 'react'
import { Divider} from 'react-native-elements'


const BottomTab = () => {
    const [activeTab, setIsActiveTab] = useState('Home')
    
    return (
 <View style={styles.wrapper} >
     <Divider width={1} color={'gray'}  orientation='horizontal'/>
    <View style={styles.iconsContainer}>
        
       
       <TouchableOpacity>
            <Image style={styles.icons} source={require('../../assets/icons8-home-24.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
            <Image  style={styles.icons} source={require('../../assets/icons8-search-30.png')}/>
        </TouchableOpacity>

        <TouchableOpacity>
            <Image style={styles.icons} source={require('../../assets/icons8-instagram-reels-50.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
            <Image style={styles.icons} source={require('../../assets/icons8-shopping-bag-full-30.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
            <Image style={styles.icons} source={require('../../assets/icons8-circled-user-64.png')} />
        </TouchableOpacity>

    </View>
    </View>
  )
}
const styles = StyleSheet.create({

    icons:{
        width:20,
        height:20
    },
    iconsContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop:10,
    

    },
    wrapper :{
        position:'absolute',
        width:'100%',
        bottom: '1%',
        zIndex:999,
        backgroundColor:'#000'
    }
})

export default BottomTab

