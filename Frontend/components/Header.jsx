import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Searchbar from "./Searchbar";
import { Icons } from "@/assets/icons/icons";

const Header = ({
  title = "",
  rightSideicon = <Icons.edit width={28} height={28} />,
  onPress = () =>{},
}) => {
  return (
    // Header conatiner
    <View
      style={{
        width: "100%",
        gap: 16,
      }}
    >
      {/* Heading */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 16,
        }}
      >
        {/* Icon and Title */}
        <View
          className="flex flex-row justify-center items-center"
          style={{
            gap: 12,
          }}
        >
          {/* Back navigation option  */}
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
            <Icons.arrow width={24} height={24} />
          </TouchableOpacity>

          {/* Title  */}
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Montserrat-Medium",
            }}
          >
            {title}
          </Text>
        </View>

        {/* Rightside Icon (Dynamic) */}
        <TouchableOpacity onPress={rightSideicon}>
          {rightSideicon}
        </TouchableOpacity>
      </View>

      {/* Search Bar  */}
      <Searchbar placeholder={"search exsercise"} />
    </View>
  );
};

export default Header;
