import { View, Text, TouchableOpacity,Image, ImageBackground } from 'react-native'
import React from 'react'
import { images } from '../assets/images/images'
import { useNavigation } from "@react-navigation/native";


const MuscleGroup = () => {

    const navigation = useNavigation();

    const Muscle = [
    {title:"Biceps", bgImage:images.Biceps},
    {title:"Triceps", bgImage:images.Triceps},
    {title:"Chest", bgImage:images.Chest},
    {title:"Shoulder", bgImage:images.Shoulder},
    {title:"Back", bgImage:images.Back},
    {title:"Legs", bgImage:images.Legs},
    {title:"Forearms", bgImage:images.Forearms},
    {title:"Core", bgImage:images.Core},
]
  return (

    // all muscle group contaier 
    <View className="flex-row flex-wrap gap-3 items-center justify-center">
    {Muscle.map((Muscle,index)=>(
        <TouchableOpacity 
            key={index}
            style={{
                width: "48%",
                height:96,
                overflow:"hidden",
                borderRadius:16,
            }}
    >
        <ImageBackground
            source={Muscle.bgImage}
            resizeMode="cover"
            style={{
                flex:1,
                justifyContent: "flex-end",
            }}
        >
        <View className="my-2 mx-2 flex flex-col">
            <Text className="text-white font-Medium text-label ">
                {Muscle.title}
            </Text>
            <Text className="flex flex-row text-white font-Medium text-[8px]">
                Beginner | Intermediate | Advanced
            </Text>
        </View>
        </ImageBackground>
    </TouchableOpacity>
    ))}
    </View>
  )
}

export default MuscleGroup