import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router"; 


const BigBox = ({
  title = "Box Title",
  isSelectable = false, // if true it will acts like a filter toggle
  isActiveInitially = false, // initial state for toogle mode
  navigateTo ="/Equipment/equipmentScreen", // screen name to navigate , used only if not selectable
  onSelect = () => {}, // callback for parent when slected
  width = null,
}) => {
  
  const [isActive, setIsActive] = useState(isActiveInitially);

  const handlePress = () => {
    if (isSelectable) {
      // toggle state
      setIsActive(!isActive);
      onSelect(title, !isActive);
    } else if (navigateTo) {
      // navigate to other screen
      router.push({
        pathname: navigateTo,
        params:{equipmentName:title}
      });
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        width: width || "auto", // <--- use prop if provided, else auto
        paddingHorizontal: 14,  // optional padding
        height: 44,
        backgroundColor: isActive ? "#1D1D1F" : "#FEFEFE",
        borderRadius: 12,
        borderColor: isActive ? "#1D1D1F" : "#EEEEEE",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        className="font-Regular text-body"
        style={{
          color: isActive ? "#FFFFFF" : "#1D1D1F",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default BigBox;
