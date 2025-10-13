import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import Header from "../../components/Header"
import { Icons } from "@/assets/icons/icons";
import BigBox from "../../components/BigBox"


const Equipment = ({}) => {
  const { equipmentName } = useLocalSearchParams(); // read passed equipment , it will show the title of selected equipment option

  return (
    <SafeAreaView>
      {/* Header Component  */}
      <Header  
          title={equipmentName} 
          rightSideicon={<Icons.more width={28} height={28} />}
          searchPlaceholder="search band exercise"
          showSearchBar={false}
        />
        {/* Main Container || contains all content except header */}
      <View className="mx-5">
      <ScrollView>
          {/* Muscle group section  */}
          <View className="flex-col">
            <Text className="font-Medium text-title">
              Muscle Group
            </Text>
            {/* muscle container  */}
            <View>
              <BigBox
                title="Biceps"
                isSelectable={true}
              />
              <BigBox
                title="Tricpes"
                isSelectable={true}
              />
              <BigBox
                title="Foreamrs"
                isSelectable={true}
              />
              <BigBox
                title="Abs"
                isSelectable={true}
              />
              <BigBox
                title="Chest"
                isSelectable={true}
              />
              <BigBox
                title="Back"
                isSelectable={true}
              />
              <BigBox
                title="Shoulder"
                isSelectable={true}
              />
              <BigBox
                title="Legs"
                isSelectable={true}
              />
            </View>
          </View>
      </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Equipment;
