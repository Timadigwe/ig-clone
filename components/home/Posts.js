import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'


const Posts = ({ post }) => {
  return (
    <View style={{ marginBottom: 30}}>
      <Divider width={1} color={'gray'}  orientation='horizontal'/>
      <PostHeader post={post} />
    </View>
  )
}
const styles= StyleSheet.create({
  image:{
      width:30,
      height:30,
      marginLeft:6,
      borderRadius:50,
      borderWidth:1.5,
      borderColor:'#ff8501'
  }
})
export default Posts

const PostHeader = ({ post }) => (
    <View style={{}}>
        <View>
            <Image source={{ uri: post.profilePic}}
            style={styles.image} />
            <Text>{}</Text>
        </View>
    </View>

    
)

