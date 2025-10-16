import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from "expo-router";
import ExerciseCard from "../components/ExerciseCard"


const ExerciseList = ({
    label="Exercise List",
    showLable=true,
    showTitle=true,
}) => {

    const { title } = useLocalSearchParams();

  return (
    <View>
      {showLable && (<Text className="font-Medium text-title ">{label}</Text>)}
      {showTitle && (<Text className="font-Medium text-title ">{title}</Text>)}

      {/* Exercise List Section  */}
      <View className="flex-col gap-3">
      <ExerciseCard
      />
      <ExerciseCard
        exerciseName="Arnold Press"
            equipment="Dumbbell"
            muscleGroup="Shoulders"
            difficultyLevel="Advanced"
      />
      <ExerciseCard
        exerciseName="Arnold Press"
            equipment="Dumbbell"
            muscleGroup="Shoulders"
            difficultyLevel="Advanced"
      />
      <ExerciseCard
        exerciseName="Arnold Press"
            equipment="Dumbbell"
            muscleGroup="Shoulders"
            difficultyLevel="Advanced"
      />
      <ExerciseCard
        exerciseName="Arnold Press"
            equipment="Dumbbell"
            muscleGroup="Shoulders"
            difficultyLevel="Advanced"
      />
      <ExerciseCard
        exerciseName="Arnold Press"
            equipment="Dumbbell"
            muscleGroup="Shoulders"
            difficultyLevel="Advanced"
      />
      </View>
    </View>
  )
}

export default ExerciseList