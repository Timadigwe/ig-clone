import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
//components
import Header from "../components/home/Header"
import { StyleSheet } from 'react-native'
import Stories from '../components/home/Stories'
import Posts from '../components/home/Posts'
import { ScrollView } from 'react-native'
import {POSTS} from "../data/POSTS"
import BottomTab from '../components/home/BottomTab'


const HomeScreen= () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
      {POSTS.map((post, index) => (
          <Posts post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTab/>
    </SafeAreaView>
  )
}
 const styles = StyleSheet.create({
     container : {
        backgroundColor: 'black',
        flex:1,
        margin: 20,
        borderRadius:20,
        paddingTop:10
     },
 })
export default HomeScreen