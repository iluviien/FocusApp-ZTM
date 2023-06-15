import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {colors} from '../utils/colors'
import { TextInput } from 'react-native-paper'
import {RoundedButton} from '../components/RoundedButton'
import {spacing} from '../utils/sizes'


export const Focus = ({addSubject}) =>{
  const [subject, setSubject] = useState(null);
return (

  <View styles={styles.container}>
  <View style={styles.inputContainer}>
  <TextInput style={styles.textInput} label="What would you like to focus on today?"  onChangeText={setSubject} />
  <View styles={styles.button}>
  <RoundedButton  onPress={()=> addSubject(subject)} title="+" size={50}/>
  </View>
  </View>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
  },
  button:{
    justifyContent: 'center'

  },
  textInput :{
    flex: 1,
    marginRight: spacing.sm
  },
  inputContainer:{
    padding: spacing.lg, 
    justifyContent: 'top',
    flexDirection: 'row'
  },
})