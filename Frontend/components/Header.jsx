import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Searchbar from "./Searchbar";
import { Icons } from "@/assets/icons/icons";
import { useNavigation } from '@react-navigation/native';


const Header = ({
  title = "",
  showRightSideIcon = true,
  rightSideicon = <Icons width={28} height={28} />,
  showSearchBar = true,
  searchPlaceholder = " ",
  onPress = () => {},
}) => {
  const navigation = useNavigation();  // this will gives access to navigation methods to navigate between screens

  const handleGoBack = () => {
    if (navigation.canGoBack()) {      //  only go back if possible , always use this method if the user can go back it will apply else not
      navigation.goBack();
    }
  };

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
          paddingHorizontal: 16,
        }}
      >
        {/* Back and Title container */}
        <View
          className="flex flex-row justify-center items-center"
          style={{
            gap: 12,
          }}
        >
          
          {/* Back navigation option  */}
          <TouchableOpacity
            onPress={handleGoBack}  // now , if the user click on the Back icon the user will navigate back to previous screen , only when if the user can go back if its first screen then they won't
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
        {showRightSideIcon && (
          <TouchableOpacity onPress={onPress}>{rightSideicon}</TouchableOpacity>
        )}
      </View>
      {/* Search Bar  */}
      {showSearchBar && (
        <Searchbar placeholder={String(searchPlaceholder)} />
      )}
    </View>
  );
};

export default Header;
