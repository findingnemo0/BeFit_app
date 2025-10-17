import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { Icons } from '../assets/icons/icons';

const ExerciseCollection = ({
    title = "",
    exerciseNo = "",
    navigateTo = " ",
    width = null,
    onPress = () => {},
}) => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity
        className = "bg-boxfill border border-radiusColor rounded-2xl flex-col gap-8 py-3 px-3"
        style={{
            width:width ||"auto",
        }}
    > 
        <Icons.Exercise width={32} height={32}/>
        <View>
            <Text>
                {title}
            </Text>

            <View className="h-11 w-full bg-green-500 ">
                <Text>
                    {`Exercises:${exerciseNo}`}
                </Text>
            </View>
            
        </View>
    </TouchableOpacity>
  )
}

export default ExerciseCollection