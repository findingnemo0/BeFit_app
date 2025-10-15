import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { images } from '../assets/images/images'
import { useRouter } from "expo-router";


const MuscleGroup = () => {

    const Muscle = [
    {title:"Biceps", bgImage:images.Biceps},
    {title:"Triceps", bgImage:images.Triceps},
    {title:"Chest", bgImage:images.Chest},
    {title:"Shoulders", bgImage:images.Shoulder},
    {title:"Back", bgImage:images.Back},
    {title:"Legs", bgImage:images.Legs},
    {title:"Forearms", bgImage:images.Forearms},
    {title:"Abs", bgImage:images.Core},
]
    const router = useRouter();

    const handlePress = (title) => {
    router.push({
      pathname: "MuscleFocus/muscleFocusScreen", // ✅ relative path (no / at start)
      params: { title },
    });
  };

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
        onPress={() => handlePress(Muscle.title)} // ✅ navigate with params
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