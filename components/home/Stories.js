import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { USERS } from "../../data/USERS"

const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        >
           
    {USERS.map((user, index) => (
        <View 
        key={index}
        style={{alignItems:'center'}}
        >
            <Image
             source={{ uri: user.image}}
             style={styles.image}
            />
            <Text style={{color:'white'}}>{user.user.toLocaleLowerCase()}
            </Text>
        </View>
    ))}
        </ScrollView>
    </View>
  )
}

    const styles= StyleSheet.create({
        image:{
            width:40,
            height:40,
            marginLeft:6,
            borderRadius:50,
            borderWidth:3,
            borderColor:'#ff8501'
        }
    })
export default Stories