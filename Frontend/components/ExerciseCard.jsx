import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { images } from "../assets/images/images.js";

const ExerciseCard = ({
  exerciseName = "",
  equipment = "",
  muscleGroup = "",
  difficultyLevel = "",
  onPress=()=>{},
}) => {
  return (
    // Exercise card container
    <View 
        className="w-full bg-red-500"
        style={{
            marginHorizontal:16,
        }}
    >
    <TouchableOpacity 
        className="flex flex-row items-center bg-boxfill h-[88px] w-full px-3 py-3 gap-3"
        onPress={onPress}
    >
      <Image source={images.ExerciseImage} className="size-20 rounded-2xl" />

      {/* Exercise Details container */}
      <View>
        {/* Exercise Name  */}
        <Text
          className="font-Medium text-body text-black"
          numberOfLines={2}
        >
          {exerciseName}
        </Text>

        {/* Tags container */}
        <View className="flex flex-row gap-2">

          {/* Muscle Group Tag  */}
          <View>
            <Text className="text-small font-Regular min-h-auto py-1 px-2 rounded-lg border-[1px] border-radiusColor bg-screenbackground ">
              {muscleGroup}
            </Text>
          </View>

          {/* Equipment Tag  */}
          <View>
            <Text className="text-small font-Regular min-h-auto py-1 px-2 rounded-lg border-[1px] border-radiusColor bg-screenbackground ">
              {equipment}
            </Text>
          </View>

          {/*  Difficulty level Tag  */}
          <View>
            <Text className="text-small font-Regular min-h-auto py-1 px-2 rounded-lg border-[1px] border-radiusColor bg-screenbackground ">
              {difficultyLevel}
            </Text>
          </View>

        </View>

      </View>
    </TouchableOpacity>
    </View>
  );
};

export default ExerciseCard;
