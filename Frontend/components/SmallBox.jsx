import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";


const SmallBox = ({
  title = " ",
  isSelectable = false, // if true it will acts like a filter toggle
  isActiveInitially = false, // initial state for toogle mode
  navigateTo = " ", // screen name to navigate , used only if not selectable
  width = null,
  padding = null,
  onSelect = () => {}, // callback for parent when slected
}) => {
  const navigation = useNavigation();
  const [isActive, setIsActive] = useState(isActiveInitially);

  const handlePress = () => {
    if (isSelectable) {
      // toggle state
      setIsActive(!isActive);
      onSelect(title, !isActive);
    } else if (navigateTo) {
      // navigate to other screen
      navigation.navigate(navigateTo);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        width: width || "auto",
        paddingHorizontal: padding || 14,
        height: 28,
        backgroundColor: isActive ? "#1D1D1F" : "#FEFEFE",
        borderRadius: 6,
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
