import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { images } from "../../assets/images/images";
import MediumBox from "../../components/MediumBox";
import TargetMuscle from "../../components/TargetMuscle";
import { useState } from "react";
import ExerciseList from "../../components/ExerciseList";

const MuscleFocusScreen = ({}) => {
  const { title } = useLocalSearchParams(); // ✅ get passed params

  const [activeTab, setActiveTab] = useState("ExerciseList"); 


  const muscleBackgroundImage = {
      Core:images.Core,
      Chest:images.Chest,
      Back:images.Back,
      Biceps:images.Biceps,
      Triceps:images.Triceps,
      Shoulder:images.Shoulder,
      Legs:images.Legs,
      Forearms:images.Forearms,
  }

  const backgroundImage = muscleBackgroundImage[title] || images.DefaultBackground;
 
  return (
    <SafeAreaView className="flex-1">
      <View className="relative">
      <ImageBackground 
          source={backgroundImage}
          resizeMode="cover"
          className="h-[180] w-full justify-end"
      />
      <View className="absolute top-0 left-0 right-0">
        <Header
        showSearchBar={false}
        showRightSideIcon={false}
        title={title}
        titleColor="#FFFFFF"
      />
      </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Main container  */}
        <View className="mx-5 gap-5 mt-3">
          {/* Difficulty level section  */}
          <View className="flex-col gap-2">
            <Text className="font-Medium text-title">
              Difficulty Level
            </Text>
            {/* level container  */}
            <View className="flex-wrap flex-row gap-3">
              <MediumBox
                title="Beginner"
                isSelectable={true}
                padding={"12"}
              />
              <MediumBox
                title="Intermediate"
                isSelectable={true}
                padding={"12"}
              />
              <MediumBox
                title="Advanced"
                isSelectable={true}
                padding={"12"}
              />
            </View>
          </View>

          {/* Equipment section  */}
          <View className="flex-col gap-2">
            <Text className="font-Medium text-title">
              Equipment
            </Text>
            {/* equipment container  */}
            <View className="flex-wrap flex-row gap-3">
              <MediumBox
                title="Dumbbell"
                isSelectable={true}
              />
              <MediumBox
                title="Barbell"
                isSelectable={true}
              />
              <MediumBox
                title="Body Weight"
                isSelectable={true}
              />
              <MediumBox
                title="Kettlebell"
                isSelectable={true}
              />
              <MediumBox
                title="Cable"
                isSelectable={true}
              />
              <MediumBox
                title="Band"
                isSelectable={true}
              />
            </View>
          </View>

          {/* Toogle section  */}
          <View className="flex-row">
            <TouchableOpacity 
              className="flex-1 justify-center items-center border-b-2 py-1"
              style={{
                borderColor: activeTab === "ExerciseList" ? "#1D1D1F" : "#ECEDEE",
              }}
              onPress={() => setActiveTab("ExerciseList")}
            >
                <Text 
                  className="font-Medium text-title"
                  style={{ 
                    color: activeTab === "ExerciseList" ? "#1D1D1F" : "#8E8E93" 
                  }}
                >
                  Exercise List
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              className="flex-1 justify-center items-center border-b-2 py-1"
              style={{
                borderColor: activeTab === "TargetMuscle" ? "#1D1D1F" : "#ECEDEE",
              }}
              onPress={() => setActiveTab("TargetMuscle")}
            >
                 <Text 
                  className="font-Medium text-title"
                  style={{ 
                    color: activeTab === "TargetMuscle" ? "#1D1D1F" : "#8E8E93" 
                  }}
                 >
                  Target Muscle
                </Text>
            </TouchableOpacity>
          </View>

          {activeTab === "ExerciseList" ? (
            <ExerciseList
                  showLable={false}
            />
          ):(
            <TargetMuscle
                showLabel={false}
                muscleGroup={title}
            />
          )}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MuscleFocusScreen;
