import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import BigBox from '../../components/MediumBox'
import {useLocalSearchParams} from "expo-router"
import Header from '../../components/Header'
import {Icons} from "../../assets/icons/icons.js"
import { SafeAreaView } from 'react-native-safe-area-context'
import ExerciseList from '../../components/ExerciseList.jsx'

const Category = () => {


    const { equipmentName } = useLocalSearchParams();

  return (
    <SafeAreaView>
        <Header  
          title={equipmentName} 
          rightSideicon={<Icons.more width={28} height={28} />}
          searchPlaceholder="search band exercise"
          showSearchBar={false}
          showRightSideIcon={false}
        />
        <ScrollView 
            showsVerticalScrollIndicator={false}
        >
          {/* Main Container || contains all content except header */}
                  <View className="mx-5 flex-col mt-2">
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

            {/* Exercise List section  */}

            <ExerciseList
              showTitle={false}
            />

          </View>
          </View>
          </ScrollView>
    </SafeAreaView>
  )
}

export default Category