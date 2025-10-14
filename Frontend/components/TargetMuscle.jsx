import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '../assets/images/images'

const TargetMuscle = () => {
  return (
             /* Target Muscle Illustartion section  */
        <View className="flex gap-3">
            <Text className="font-Medium text-title">Target Muscle</Text>
            {/* Muscle Container  */}
          <View className="flex flex-row justify-between">
            <Image
            source={images.Front_Shoulders}
            className="h-72"
            resizeMode="contain"
            />
            <Image
            source={images.Back_Shoulders}
            className="h-72"
            resizeMode="contain"
            />
          </View>
        </View>
  )
}

export default TargetMuscle