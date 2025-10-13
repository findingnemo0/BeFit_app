import { View, Text, ScrollView, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Seachbar from "../../components/Searchbar"
import MuscleGroup from "../../components/MuscleGroup";
import { images } from "../../assets/images/images";
import BigBox from "../../components/BigBox";
import RecommendedForYouCard from "../../components/RecommendedForYouCard";
const { width } = Dimensions.get("window");

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
          contentContainerStyle={{
            paddingBottom:164,
          }}
        >
          {/* gloabl container or explore page container  */}
        <View className="flex flex-col gap-5">
          {/* Muscle group container   */}
          <View className="flex-col gap-3">
              <Text className="font-Medium text-h2 ">
                Muscle Focus
              </Text>
             <MuscleGroup/>
          </View>

          {/* Category Section container  */}
          <View className="flex gap-3">
            {/* heading  */}
            <Text className="font-Medium text-h2 ">Category</Text>
            {/* category options  */}
            <View className="flex-row justify-between flex-wrap gap-3">
              <BigBox
                title="Muscle" 
                navigateTo=""
                width={"48%"}
              />
              <BigBox
                title="Strength" 
                navigateTo=""
                width={"48%"}
              />
              <BigBox
                title="Stamina" 
                navigateTo=""
                width={"48%"}
              />
              <BigBox
                title="Cardio" 
                navigateTo=""
                width={"48%"}
              />
              <BigBox
                title="Calisthenics" 
                navigateTo=""
                width={"48%"}
              />
              <BigBox
                title="Fat Burning" 
                navigateTo=""
                width={"48%"}
              />
            </View>
          </View>
            {/* Recommended for you Section  */}
            <View className="flex gap-3">
              <Text className="font-Medium text-h2">
                Recommended for you
              </Text>
          <ScrollView 
            className="flex flex-row"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap:12,
              width:"100%"
            }}
          >
            <RecommendedForYouCard title="Stretching" width={width * 0.72}/>
            <RecommendedForYouCard title="Stamina" width={width * 0.72}/>
            <RecommendedForYouCard title="Yog" width={width * 0.72}/>
          </ScrollView>
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
  );
};

export default explore;


