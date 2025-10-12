import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { images } from "../assets/images/images.js";

const ExerciseCard = ({
  exerciseName = "exercise name",
  equipment = "equipment",
  muscleGroup = "muscle",
  difficultyLevel = "difficulty",
  onPress = () => {},
}) => {
  return (
    // Exercise card container
    <View 
      style={{
        width:"100%",
      }}
    >
    <TouchableOpacity
      className=" flex-row items-center bg-boxfill h w-full px-3 py-3 gap-3 rounded-2xl border-[2px] border-radiusColor"
      onPress={onPress}
    >
      <Image source={images.ExerciseImage} className="size-20 rounded-[8px]" />

      {/* Exercise Details container */}
      <View>
        {/* Exercise Name  */}
        <Text className="font-Medium text-body text-black" numberOfLines={2}>
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
