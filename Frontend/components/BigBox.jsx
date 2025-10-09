import { View, Text } from 'react-native'
import React from 'react'

const BigBox = ({
    title = " ",
    isSelectable = true,
    isActiveInitally = true,
    navigateTo = " ",
    onSelect = () => {},

}) => {
  return (
    <View>
      <Text>BigBox</Text>
    </View>
  )
}

export default BigBox