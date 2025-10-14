import { View, Text, Image } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from "../../components/Header"
import SmallBox from '../../components/SmallBox';
import { images } from "../../assets/images/images.js";
import TargetMuscle from '../../components/TargetMuscle.jsx';



const ExerciseDetail = () => {

  const { exerciseName, equipment, muscleGroup, difficultyLevel } = useLocalSearchParams();


  return (
    <SafeAreaView>
      <Header
        title={exerciseName}
        showRightSideIcon={false}
        showSearchBar={false}
      />
      {/* Container  */}
      <View className="mx-5 mt-3 gap-3">
      {/* Tags section  */}
      <View className="flex flex-row gap-2">
          {/* Exercise Tag  */}
          <SmallBox
            title={equipment}
            isSelectable={false}
            navigateTo=""
          />
          {/* Muscle Group Tag  */}
          <SmallBox
            title={muscleGroup}
            isSelectable={false}
            navigateTo=""
          />
          {/* Difficulty Level  */}
          <SmallBox
            title={difficultyLevel}
            isSelectable={false}
            navigateTo=""
          />
      </View>
        {/* Exercise Image  */}
      <Image
          source={images.ExerciseImage}
          className="h-52 w-full rounded-2xl"
          resizeMode="cover"
      />
      {/* Sets & Repetation setion  */}
      <View className="flex flex-row gap-2">
        <SmallBox
          title={`Sets: ${muscleGroup}`}
          isSelectable={false}
          navigateTo=""
        />
        <SmallBox
          title={`Repetition: ${muscleGroup}`}
          isSelectable={false}
          navigateTo=""
        />
      </View>
        <TargetMuscle/>
      </View>
    </SafeAreaView>
  )
}

export default ExerciseDetail