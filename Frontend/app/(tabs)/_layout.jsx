import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import { Icons } from "../../assets/icons/icons.js";

function TabItem({ label, icon, focused }) {
  const IconComponent = icon;

  const active = (
    // active container
    <View className="flex-row gap-3 min-w-[142px] items-center rounded-xl py-2 px-2 bg-primary">
      {/* Icon container */}
      <View className="min-h-8 min-w-8 rounded-lg items-center justify-center bg-boxfill">
        <IconComponent.filled width={32} height={32} />
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
        <IconComponent.outlined width={32} height={32} />
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
        tabBarStyle: {
          position: "absolute",
          bottom: 40,
          marginHorizontal: 20,
          height: 64,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#EEEEEE",
          backgroundColor: "#F4F7FB",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingHorizontal: 8,
        },
        tabBarItemStyle: {
          flex: 1, // ensures equal width for each tab
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabItem label="Home" icon={Icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <TabItem label="Explore" icon={Icons.explore} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <TabItem label="Saved" icon={Icons.bookmarks} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabItem label="Profile" icon={Icons.profile} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
