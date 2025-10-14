import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from "expo-router"; 

const CTA = ({
    title="",
    navigateTo="",
    width=null,
    isActive=false,
    onPress = () => {},
}) => {

    const router = useRouter(); // ✅ initialize router

     // ✅ handle press
  const handlePress = () => {
    router.push({
      pathname: navigateTo,
      params: {
        title,
      }, // send the selected exercise name
    });
  };

  return (
    <TouchableOpacity
        className="bg-primary rounded-2xl justify-center items-center "
        onPress={handlePress}
        style={{
            width:width || "auto",
            height:48,
            backgroundColor: isActive ? "#1D1D1F" : "#FEFEFE",
            borderWidth:1,
            borderColor: isActive ? "#1D1D1F" : "#EEEEEE",
        }} 
    >
        <Text 
            className="font-Medium text-title text-white"
            style={{
            color: isActive ? "#FFFFFF" : "#1D1D1F",
            }}
        >
             {title}
        </Text>
    </TouchableOpacity>
    
  )
}

export default CTA