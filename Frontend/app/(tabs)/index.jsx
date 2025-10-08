import { Text, View } from "react-native";
import Searchbar from "../../components/Searchbar";
import Header from "../../components/Header";
import { Icons } from "@/assets/icons/icons";
import Footer from "../../components/Footer";
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-screenbackground gap-4">
      <Searchbar placeholder={"search exercise"} />
      <Header
        title="This is home screen"
        searchPlaceholder="this is header searchbar"
        showSearchBar={true}
        showRightSideIcon={true}
        rightSideicon={<Icons.more width={28} height={28} />}
      />
      <Footer
        sCTA_title="Secondary"
        showSecondaryCTA={true}
        pCTA_title="Primary"
        showPrimaryCTA={true}
        // onPrimaryPress={()=>}             to naviagte to different screen
        // onSecondaryPress={()=>}           to navigate to different screen
      />
    </View>
  );
}
