import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Searchbar from "../../components/Searchbar";
import Header from "../../components/Header";
import { Icons } from "@/assets/icons/icons";
import Footer from "../../components/Footer";
import ExerciseCard from "../../components/ExerciseCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView className="flex-col mx-5 mt-[20px] gap-[20px]">
        {/* heading container */}
        <View className="flex-row justify-between items-center">
          {/* text  */}
          <Text className="font-Medium text-h2">Welcome, Kamal </Text>
          {/* icon  */}
          <TouchableOpacity className="h-[36px] w-[36px] bg-boxfill rounded-lg justify-center items-center border-[1.5px] border-radiusColor">
            <Icons.notification.outlined width={24} height={24} />
          </TouchableOpacity>
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
        <View className="">
          {/* Programs  */}
          <TouchableOpacity className="bg-boxfill py-4 px-4 rounded-3xl border-radiusColor border-[1.5px] w-full gap-10">
            {/* Text  */}
            <View>
              <Text 
                className="font-Medium"
                style={{
                  fontSize:18,
                }}
              >
                Programs
              </Text>
              <Text className="font-Regular text-caption ">
                Programs are list of workouts to achieve the desired goal.
              </Text>

              <TouchableOpacity className="flex flex-row py-2 px-2 rounded-xl items-center justify-between bg-screenbackground border-[2px] border-radiusColor">
                    <Text className="font-Medium text-label">
                        See all
                    </Text>
                    <Icons.arrow width={20} height={20}/>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          {/* Workouts  */}
          <TouchableOpacity className="bg-boxfill py-4 px-4 rounded-3xl border-radiusColor border-[1.5px] w-full">
            {/* Text  */}
            <View>
              <Text 
                className="font-Medium"
                style={{
                  fontSize:18,
                }}
              >
                Workouts
              </Text>
              <Text className="font-Regular text-caption ">
                Workouts are the exercises to achieve the desired goal.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
