import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from "expo-router"; 
import { Icons } from '../assets/icons/icons';
  

const ProfileCard = ({
  title = " ",
  value = " ",
  navigateTo = " ",
  icon: Icon = Icons.bolt.outlined,
  width = null ,
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
    <TouchableOpacity>

        {/* Main Container  */}
        <View  
            className="flex-row gap-2 py-2 px-2 rounded-xl border-radiusColor border-[1.5px] bg-boxfill"
            style={{
                width: width || "auto"
            }}
        >
            {/* Icon container section */}
                <View className="h-10 w-10 rounded-lg bg-navigationBackground justify-center items-center p-1.5 mr-3">
                  <Icon width={22} height={22} />
                </View>

            {/* Text Container section */}
            <View className="flex-col">
                <Text className="text-caption font-Regular -mb-1">{title}</Text>
                <Text className="text-caption font-Medium">{value}</Text>
            </View>

        </View>
        
    </TouchableOpacity>
  )
}

export default ProfileCard