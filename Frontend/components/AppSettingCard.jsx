import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from "expo-router"; 
import { Icons } from '../assets/icons/icons';


const AppSettingCard = ({
  title = " ",
  navigateTo = " ",
  icon: Icon = Icons.bolt.outlined,
  onPress,
}) => {

  const router = useRouter();

    router.push({
      pathname: navigateTo,
      params: {
            title,
      },
    });

  return (
    <TouchableOpacity onPress={onPress}>
      {/* Main Container  */}
      <View className="flex-row justify-between items-center py-2 px-2 bg-boxfill rounded-lg border-radiusColor border h-fit">
        {/* Icon & Title section  */}
        <View className="flex-row items-center justify-center gap-2">
          {/* Icon container  */}
          <View className="h-8 w-8 rounded-lg bg-navigationBackground justify-center items-center p-1.5 mr-3">
            <Icon width={20} height={20} />
          </View>
          {/* Title of the Card  */}
          <Text className="font-Regular text-body">{title}</Text>
        </View>

       <View>
        <Icons.arrow 
            width={24}
            height={24}
            style={{
              transform: [{ rotate: "180deg" }],
            }}
        />
       </View>
          
      </View>
    </TouchableOpacity>
  )
}

export default AppSettingCard