import { Text, View } from "react-native";
import Searchbar  from "../../components/Searchbar"

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-screenbackground">
      <Text className="font-Semibold text-h1 text-green-500">Welcome , Kamal</Text>
        <Searchbar 
          placeholder={"search exercise"}
        />
    </View>
  );
}
