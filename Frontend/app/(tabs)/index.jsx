import { Text, View } from "react-native";
import Searchbar from "../../components/Searchbar";
import Header from "../../components/Header";
import { Icons } from "@/assets/icons/icons";
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-screenbackground">
      {/* <Searchbar placeholder={"search exercise"} /> */}
      <Header 
        title="This is home screen "
        rightSideicon={<Icons.more width={28} height={28}/>}
      />
    </View>
  );
}
