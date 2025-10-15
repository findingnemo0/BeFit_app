import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import Header from "../../components/Header"
import { Icons } from "@/assets/icons/icons";
import BigBox from "../../components/BigBox"
import ExerciseCard from "../../components/ExerciseCard"

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
        
      <ScrollView 
          showsVerticalScrollIndicator={false}
      >
        {/* Main Container || contains all content except header */}
        <View className="mx-5 flex-col gap-4">
          {/* Muscle group section  */}
          <View className="flex-col gap-2">
            <Text className="font-Medium text-title">
              Muscle Group
            </Text>
            {/* muscle container  */}
            <View className="flex-wrap flex-row gap-2">
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

          {/* Difficulty level section  */}
          <View className="flex-col gap-2">
            <Text className="font-Medium text-title">
              Difficulty Level
            </Text>
            {/* level container  */}
            <View className="flex-wrap flex-row gap-3">
              <BigBox
                title="Beginner"
                isSelectable={true}
                padding={"12"}
              />
              <BigBox
                title="Intermediate"
                isSelectable={true}
                padding={"12"}
              />
              <BigBox
                title="Advanced"
                isSelectable={true}
                padding={"12"}
              />
            </View>
          </View>

          {/* Exercise List section */}
          <View className="flex gap-2">
              <Text className="font-Medium text-title">Exercise List</Text>
              {/* List  */}
              <View className="flex flex-col gap-3">
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
                  <ExerciseCard/>
              </View>
          </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Equipment;
