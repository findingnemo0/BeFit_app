import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { Icons } from '../assets/icons/icons';
import { useRouter } from "expo-router"; 

const ExerciseCollection = ({
    title = "",
    exerciseNo = "",
    navigateTo = " ",
    width = null,
    onPress = () => {},
}) => {

    const navigation = useNavigation();

    const router = useRouter();

    const handlePress = () => {
    router.push({
      pathname: navigateTo,
      params: {
        title,
        exerciseNo,
      }, // send the selected exercise name
    });
  };

  return (
    <TouchableOpacity
        className = "bg-boxfill border-[2px] border-radiusColor rounded-2xl flex-col gap-8 py-3 px-3"
        style={{
            width:width ||"auto", // in Saved module in Exercise Collection give ExerciseCollectionCard "48% width"
        }}
        onPress={handlePress}
    > 
        <Icons.exercise.outlined width={32} height={32}/>
        <View className="flex-col gap-2">
            <Text 
                className="font-Regular text-title"
                numberOfLines={1}
            >
                {title}
            </Text>

            <View className="h-11 w-full flex justify-center bg-screenbackground px-3 py-2 rounded-lg border-radiusColor border">
                <Text className="font-Regular text-body">
                    {`Exercises: ${exerciseNo}`}
                </Text>
            </View>
            
        </View>
    </TouchableOpacity>
  )
}

export default ExerciseCollection