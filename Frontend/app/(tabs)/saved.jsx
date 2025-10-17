import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Searchbar from '../../components/Searchbar'
import SmallBox from '../../components/SmallBox'
import { useState } from "react";
import ExerciseCollection from '../../components/ExerciseCollection'

const Saved = () => {

  const [activeTab, setActiveTab] = useState("All");

  return (
    <SafeAreaView>
      <Searchbar
        placeholder={"Search Collection"}
        showFilterIcon={false}
      />
      {/* Tags  */}
      <View className="flex-row gap-3 mx-5 pt-3">
        <SmallBox 
            title="All"
            isSelectable={true}
            isActive={activeTab === "All"}
            onPress={() => setActiveTab("All")}
        />
        <SmallBox   
            title="Programs"
            isSelectable={true}
            isActive={activeTab === "Programs"}
            onPress={() => setActiveTab("Programs")}
        />
        <SmallBox 
            title="Workouts"
            isSelectable={true}
            isActive={activeTab === "Workouts"}
            onPress={() => setActiveTab("Workouts")}
        />
        <SmallBox 
            title="Exercise"
            isSelectable={true}
            isActive={activeTab === "Exercise"}
            onPress={() => setActiveTab("Exercise")}
        />
      </View>

      {/* ScrollView Container  */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom:184,
          }}
      >
        {/* Main Container  */}
        <View className="mx-5 gap-4 pt-3">

          {/* Exercise Collection Section  */}
          <View className="flex-col gap-2">
            {/* Contains Heading and see all option  */}
            <View className="flex-row justify-between items-center">
            {/* Exercise collection Heading  */}
            <Text className="font-Medium text-h2">
                Exercise List
            </Text>
            {/* see all  */}
            <TouchableOpacity onPress={""}>
            <Text className="font-Regular text-label">
                See all
            </Text>
            </TouchableOpacity>
           </View>

          {/* Exercise Collection Conent  */}
          <View className="flex-row flex-wrap justify-between gap-3">
          <ExerciseCollection
                title="Biceps exercise"
                exerciseNo="12"
                width={"48%"}
          />
          <ExerciseCollection
                title="Triceps exercise"
                exerciseNo="12"
                width={"48%"}
          />
          <ExerciseCollection
                title="Shoulders exercise"
                exerciseNo="12"
                width={"48%"}
          />
          <ExerciseCollection
                title="Legs exercise"
                exerciseNo="12"
                width={"48%"}
          />
          <ExerciseCollection
                title="Abs exercise"
                exerciseNo="12"
                width={"48%"}
          />
          <ExerciseCollection
                title="Forearms exercise"
                exerciseNo="12"
                width={"48%"}
          />
          </View>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Saved