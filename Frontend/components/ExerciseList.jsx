import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from "expo-router";
import ExerciseCard from "../components/ExerciseCard"


const ExerciseList = ({
    label="",
    showLable=true,
}) => {

    const { title } = useLocalSearchParams();

  return (
    <View>
      {showLable && (<Text>This component is for ExerciseList{label}</Text>)}
      <Text>{title}</Text>
      <ExerciseCard/>
      <ExerciseCard/>
      <ExerciseCard/>
      <ExerciseCard/>
      <ExerciseCard/>
      <ExerciseCard/>
    </View>
  )
}

export default ExerciseList