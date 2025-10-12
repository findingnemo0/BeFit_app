import { Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { images } from "../assets/images/images";
import { Icons } from "../assets/icons/icons.js";

const RecommendedForYouCard = ({
    title="",
    onPress=()=>{},
    navigateTo="",
}) => {
  return (
    <TouchableOpacity   
        className="border-[2px] border-radiusColor rounded-2xl overflow-hidden"
        style={{
            width:"72%"
        }}
        // onPress={}
    >
      <Image
        source={images.Chest}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 108,
        }}
      />
      <View className="flex flex-row items-center justify-between h-[48px] px-4 bg-boxfill">
        <Text className="font-Medium text-label"> {title} </Text>
        <View className="flex flex-row">
          <Icons.bolt.filled width={28} height={28} />
          <Icons.bolt.filled width={28} height={28} />
          <Icons.bolt.filled width={28} height={28} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecommendedForYouCard;
