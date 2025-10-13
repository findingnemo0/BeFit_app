import { View, Text } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const exerciseDetail = ({
    navigateTo ="/exerciseDetail",
}) => {

    router.push({
        pathname:"/exerciseDetail"
    })

  return (
    <View>
      <Text>exerciseDetail</Text>
    </View>
  )
}

export default exerciseDetail