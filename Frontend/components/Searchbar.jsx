import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Icons } from "@/assets/icons/icons";

const Searchbar = ({ placeholder }) => {
  return (
    // search bar container contains both search option and filter icon
    <View
      style={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width: "100%",
        paddingHorizontal: 16,
        gap: 12,
      }}
    >
      {/* search bar option  */}
      <TouchableOpacity
        style={{
          flexDirection:"row",
          alignItems:"center",
          flex:1,                         // takes all available space
          minHeight: 48,
          width: "100%",
          borderRadius: 12,
          justifyContent:"flex-start",    // adjust the content from starting 
          backgroundColor: "#FEFEFE",
          borderWidth: 2,
          borderColor: "#EEEEEE",
          paddingHorizontal: 8,
        }}
      >
        <Icons.search width={24} height={24} />
        <TextInput placeholder={placeholder} placeholderTextColor="#736E6E" />
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
        <Icons.sort width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Searchbar;
