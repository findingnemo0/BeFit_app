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
      >
        {/* Main Container  */}
        <View className="mx-5">
          <ExerciseCollection
                title="Collection name"
                exerciseNo="12"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Saved