import { View, Text, ScrollView, } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Seachbar from "../../components/Searchbar"
import MuscleGroup from "../../components/MuscleGroup";
import { images } from "../../assets/images/images";
const explore = () => {
  return (
      <SafeAreaView
          style={{
            paddingTop:12,
            gap:20,
          }}
      >
        <Seachbar
          placeholder={"Search Exercise"}
          showFilterIcon={false}
        />

        <ScrollView
          className="flex-col mx-5"
          showsVerticalScrollIndicator={false}
        >
          {/* gloabl container or explore page container  */}
        <View className="flex flex-col gap-5">
          {/* Muscle group container   */}
          <View className="flex-col gap-4">
              <Text className="font-Medium text-h2 ">
                Muscle Focus
              </Text>
             <MuscleGroup/>
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
  );
};

export default explore;


