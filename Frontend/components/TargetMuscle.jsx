import { View, Text, Image } from 'react-native'
import { images } from '../assets/images/images'

const TargetMuscle = ({
  muscleGroup="",
  showLabel=true,
}) => {

  const muscleImage ={
    Back:{
      front:images.Front_none,
      back:images.Back_back,
    },
    Abs:{
      front:images.Front_Abs,
      back:images.Back_none,
    },
    Biceps:{
      front:images.Front_Biceps,
      back:images.Back_none,
    },
    Triceps:{
      front:images.Front_none,
      back:images.Back_Triceps,
    },
    Chest:{
      front:images.Front_Chest,
      back:images.Back_none,
    },
    Shoulders:{
      front:images.Front_Shoulders,
      back:images.Back_Shoulders,
    },
    Legs:{
      front:images.Front_Legs,
      back:images.Back_Legs,
    },
    Forearms:{
      front:images.Front_Forearms,
      back:images.Back_Forearms,
    },
    Default: { 
      front: images.Front_none, 
      back: images.Back_none 
    },
  }

  const selectedImages = muscleImage[muscleGroup] || muscleImage.Default;

  return (
        /* Target Muscle Illustartion section  */
        <View className="flex gap-3">
            {showLabel && (<Text className="font-Medium text-title">Target Muscle</Text>)}
            {/* Muscle Container  */}
          <View className="flex flex-row justify-center">
            <Image
            source={selectedImages.front}
            className="h-60"
            resizeMode="contain"
            />
            <Image
            source={selectedImages.back}
            className="h-60"
            resizeMode="contain"
            />
          </View>
        </View>
  )
}

export default TargetMuscle