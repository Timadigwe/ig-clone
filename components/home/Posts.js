import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const postFooterIcons = [

  {
    name:'like',
    source:
    '',
    likedImageUrl:
    ''
  },

  {
    name:'comment',
    imageUrl:
    ''
  },
  {
    name:'share',
    imageUrl:
    ''
  },
  {
    name:'save',
    imageUrl:
    ''
  }
]

const Posts = ({ post }) => {
  return (
    <View style={{ marginBottom: 30}}>
      <Divider width={1} color={'gray'}  orientation='horizontal'/>
      <PostHeader post={post} />
      <PostImage post={post} />
       <View style={{marginHorizontal:10, marginTop:8}}>
          <PostFooter />
          <Likes post={post} />
          <Caption post={post} />
          <CommentSection post={post} />
          <Comment post={post} />
       </View>
    </View>
  )
}

export default Posts

const PostHeader = ({ post }) => (
    <View style={{
      margin:5 ,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    }}>
        <View  style={{
      flexDirection:'row',
      alignItems:'center'}}>
            <Image source={{ uri: post.profilePic}}
            style={styles.profilePic} />
            <Text style={{color:'white',
            margin:5,fontWeight:'700'}}
            >{post.user}</Text>
        </View>
        <Text style={{color:'white', fontWeight:900}}>...</Text>
    </View>

 
)
const PostImage =({ post}) => (
  <View
  style={{ 
    width:'100%',
    height: 400
  }}
  >
     <Image 
    source={{ uri: post.imageUrl}}
    style={styles.image}
    />
  </View>
)

const PostFooter = () => (
    <View style={{flexDirection:'row', justifyContent:'space-between' }}>
      <View style={styles.Leftcontainer} >
        <TouchableOpacity>
          <Image style={styles.icons} 
          source={{ 
            uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'}} 
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image 
          style={styles.icons} 
          source={require('../../assets/icons8-comments-24.png')}
           />
        </TouchableOpacity>

        <TouchableOpacity>
           <Image style={styles.icons} 
           source={require('../../assets/icons8-share-30 (1).png')}
           />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Image 
          style={styles.icons}
          source={require('../../assets/icons8-bookmark-30.png')}
        />
      </TouchableOpacity>
    </View>
)

const Likes = ({post}) => (
    <Text style={{color:'white', fontWeight:600}}>{post.likes.toLocaleString('en')} likes</Text>
)

const Caption = ({ post }) => (
  <View style={{marginTop:2}}>
    <Text style={{color:'white', marginRight:10}}>
      <Text style={{fontWeight:900}}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  
  </View>
)

const CommentSection = ({ post }) => (
    <View style={{marginTop:3}}>
      {!!post.comments.length && (
     <Text style={{color:'gray'}}>
      View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}
      {post.comments.length > 1 ? ' comments' : 'comment'}
      </Text>)} 
    </View>
)
const Comment = ({ post }) => (
    <>
     
          {post.comments.map((comment, index) => (
          <View key={index} style={{flexDirection:'row', marginTop:5}}>  
            <Text style={{color:'white'}}>
              <Text style={{fontWeight:'800'}}>{comment.user} </Text>
              {comment.comment}
            </Text>
          </View>
          ))}
      
    </>
)

const styles= StyleSheet.create({
  profilePic:{
      width:30,
      height:30,
      marginLeft:6,
      borderRadius:50,
      borderWidth:1.5,
      borderColor:'#ff8501'
  },
  image:{
    height:'100%',
    resizeMode:'cover'
  },

  icons:{
    width:25,
    height:25,
  },

  Leftcontainer:{
    flexDirection: 'row',
    width: '32%',
    justifyContent:'space-between',

  }
})