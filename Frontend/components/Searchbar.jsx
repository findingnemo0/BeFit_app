import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Icons } from "@/assets/icons/icons";

const Searchbar = ({ placeholder }) => {
  return (
    // search bar container contains both search option and filter icon
    <View 
        className="flex-row "
        style={{
            minWidth:328,
        }}
    >
      {/* search bar opiton  */}
      <TouchableOpacity 
        className="flex-row justify-center items-center"
        style={{
          minHeight: 48,
          minWidth: 48,
          borderRadius: 12,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FEFEFE",
          borderWidth: 2,
          borderColor: "#EEEEEE",
          paddingVertical:8,
          paddingHorizontal:8,
        }}
      >
        <Icons.search width={32} height={32} />
        <TextInput 
            placeholder={placeholder} 
            placeholderTextColor="#736E6E" 
        />
      </TouchableOpacity>

      {/* filter icon container */}
      <TouchableOpacity
        style={{
          minHeight: 48,
          minWidth: 48,
          borderRadius: 12,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FEFEFE",
          borderWidth: 2,
          borderColor: "#EEEEEE",
        }}
      >
        <Icons.sort width={32} height={32} />
      </TouchableOpacity>
    </View>
  );
};

export default Searchbar;
