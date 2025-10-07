import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Icons } from "../../assets/icons/icons.js";

function TabItem({ label, icon, focused }) {
  const IconComponent = icon;

  const active = (
    // active container
    <View className="flex-row gap-3 min-w-[130px] items-center rounded-xl py-2 px-2 bg-primary">
      {/* Icon container */}
      <View className="min-h-8 min-w-8 rounded-lg items-center justify-center bg-boxfill">
        <IconComponent.filled width={24} height={24} />
      </View>

      {/* Label  */}
      <Text className="text-sm font-medium text-white">{label}</Text>
    </View>
  );

  const inactive = (
    // inactive container
    <View className="min-h-12 min-w-12 rounded-xl items-center justify-center bg-navigationBackground">
      {/* Icon  */}
      <View>
        <IconComponent.outlined width={24} height={24} />
      </View>
    </View>
  );

  return focused ? active : inactive;
}

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 40,
          marginHorizontal: 20,
          height: 100,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#E2E8F0",
          backgroundColor: "#F4F7FB",
          flexDirection: "row",
          justifyContent:"space-between",
          alignItems: "center",
          paddingHorizontal: 12,
          paddingVertical:12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel:false,
          tabBarIcon: ({ focused }) => (
            <TabItem label="Home" icon={Icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarShowLabel:false,
          tabBarIcon: ({ focused }) => (
            <TabItem label="Explore" icon={Icons.explore} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarShowLabel:false,
          tabBarIcon: ({ focused }) => (
            <TabItem label="Saved" icon={Icons.bookmarks} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel:false,
          tabBarIcon: ({ focused }) => (
            <TabItem label="Profile" icon={Icons.profile} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
