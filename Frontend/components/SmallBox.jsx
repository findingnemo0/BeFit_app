import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";


const SmallBox = ({
  title = " ",
  isSelectable = false, // if true it will acts like a filter toggle
  isActiveInitially = false, // initial state for toogle mode
  navigateTo = " ", // screen name to navigate , used only if not selectable
  isActive ,
  width = null,
  padding = null,
  onPress  = () => {}, // callback for parent when slected
}) => {
  const navigation = useNavigation();

   const handlePress = () => {
    if (isSelectable) {
      onPress(title);
    } else if (navigateTo) {
      navigation.navigate(navigateTo);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        width: width || "auto",
        paddingHorizontal: padding || 14,
        height: 30,
        backgroundColor: isActive ? "#1D1D1F" : "#FEFEFE",
        borderRadius: 8,
        borderWidth:1.5,
        borderColor: isActive ? "#1D1D1F" : "#EEEEEE",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        className="font-Regular text-caption"
        style={{
          color: isActive ? "#FFFFFF" : "#1D1D1F",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SmallBox;
