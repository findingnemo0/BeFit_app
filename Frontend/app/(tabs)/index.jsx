import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Icons } from "@/assets/icons/icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView className="flex-col mx-5 mt-[20px] ">
        {/* gloabl container or home page container  */}
        <View className="flex flex-col gap-5">
          {/* heading container */}
          <View className="flex-row justify-between items-center">
            {/* text  */}
            <Text className="font-Medium text-h2">Welcome, Kamal </Text>

              {/* Profile and Notification Icons Container */}
            <View className="flex flex-row gap-1">
              
            {/* Notification Icon  */}
            <TouchableOpacity className="h-[36px] w-[36px] bg-boxfill rounded-xl justify-center items-center border-[1.5px] border-radiusColor">
              <Icons.notification.outlined 
                width={22} 
                height={22} 
                fill="#EF4444"
              />
            </TouchableOpacity>

            {/* Notification Icon  */}
            <TouchableOpacity className="h-[36px] w-[36px] bg-boxfill rounded-xl justify-center items-center border-[1.5px] border-radiusColor">
              <Icons.profile.filled 
                width={22} 
                height={22} 
              />
            </TouchableOpacity>
            </View>
          </View>

          {/* Activity progress  */}
          <TouchableOpacity className="flex-row bg-primary w-full h-[120px] rounded-3xl py-4 px-4 items-center justify-between ">
            {/* info  */}
            <View className="flex flex-col gap-[2px] ">
              <Text className="font-Medium text-body text-white">
                Workout Progress
              </Text>
              <Text className="font-Regular text-label text-mutedgrey">
                4 Exercise completed
              </Text>
            </View>
            {/* progress chart  */}
            <View>
              <Text className="text-white">Progress chart</Text>
            </View>
          </TouchableOpacity>

          {/* Programs & Workouts  */}
          <View className="flex flex-row justify-between gap-3">
            {/* Programs  */}
            <TouchableOpacity
              className="bg-boxfill py-4 px-4 rounded-3xl border-radiusColor border-[1.5px] w-full gap-12"
              style={{
                width: "48%",
              }}
            >
              {/* Text  */}
              <View className="flex gap-1">
                <Text
                  className="font-Medium"
                  style={{
                    fontSize: 18,
                  }}
                >
                  Programs
                </Text>
                <Text className="font-Regular text-caption ">
                  Programs are list of workouts to achieve the desired goal.
                </Text>
              </View>

              {/* see all container */}
              <TouchableOpacity className="flex flex-row py-2 px-2 rounded-xl items-center justify-between bg-screenbackground border-[2px] border-radiusColor">
                <Text className="font-Medium text-label">See all</Text>
                {/* Icon container  */}
                <View
                  style={{
                    height: 28,
                    width: 28,
                    backgroundColor: "#1D1D1F",
                    borderWidth: 1,
                    borderColor: "#F4F7FB",
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icons.arrow
                    width={20}
                    height={20}
                    fill="#F4F7FB"
                    style={{
                      transform: [{ rotate: "180deg" }],
                    }}
                  />
                </View>
              </TouchableOpacity>
            </TouchableOpacity>

            {/* Workouts  */}
            <TouchableOpacity
              className="bg-boxfill py-4 px-4 rounded-3xl border-radiusColor border-[1.5px] w-full gap-12"
              style={{
                width: "48%",
              }}
            >
              {/* Text  */}
              <View className="flex gap-1">
                <Text
                  className="font-Medium"
                  style={{
                    fontSize: 18,
                  }}
                >
                  Workouts
                </Text>
                <Text className="font-Regular text-caption ">
                  Workouts are the list of exercises to achieve the desired
                  goal.
                </Text>
              </View>

              {/* see all container */}
              <TouchableOpacity className="flex flex-row py-2 px-2 rounded-xl items-center justify-between bg-screenbackground border-[2px] border-radiusColor">
                <Text className="font-Medium text-label">See all</Text>
                {/* Icon container  */}
                <View
                  style={{
                    height: 28,
                    width: 28,
                    backgroundColor: "#1D1D1F",
                    borderWidth: 1,
                    borderColor: "#F4F7FB",
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icons.arrow
                    width={20}
                    height={20}
                    fill="#F4F7FB"
                    style={{
                      transform: [{ rotate: "180deg" }],
                    }}
                  />
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
