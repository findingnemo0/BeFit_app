import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const MuscleFocusScreen = () => {

  const { title } = useLocalSearchParams(); // ✅ get passed params

  return (
    <SafeAreaView>
      <Text>muscleFocusScreen</Text>
      <Text>selected Muscle {title}</Text>
    </SafeAreaView>
  )
}

export default MuscleFocusScreen