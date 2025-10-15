import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import SmallBox from "../../components/SmallBox";
import { images } from "../../assets/images/images.js";
import TargetMuscle from "../../components/TargetMuscle.jsx";
import CTA from "../../components/CTA.jsx";
import { Icons } from "../../assets/icons/icons.js";
import Counter from "../../components/Counter.jsx";
import Footer from "../../components/Footer.jsx";


const ExerciseDetail = () => {
  // State for sets and reps
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [resetReps, setResetReps] = useState(false);

  const [exerciseStarted, setExerciseStarted] = useState(false);

  const maxSets = 3;
  const maxReps = 12;

  // When reps reach max, reset reps and increment sets
  useEffect(() => {
    if (reps >= maxReps) {
      if (sets < maxSets) {
        setSets((prev) => prev + 1);
        setReps(0); // reset reps
        setResetReps(true);
        setTimeout(() => setResetReps(false), 100);
      }
    }
  }, [reps]);

  const { exerciseName, equipment, muscleGroup, difficultyLevel } =
  useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1">
      <Header
        title={exerciseName}
        showRightSideIcon={false}
        showSearchBar={false}
      />
      {/* Main Container  */}
      <View className="flex-1 justify-between">
        {/* Top content section  */}
        <View className="mx-5 mt-3 gap-3">
          {/* Tags section  */}
          <View className="flex flex-row gap-2">
            {/* Muscle Group Tag  */}
            <SmallBox title={muscleGroup} isSelectable={false} navigateTo="" />
            {/* Exercise Tag  */}
            <SmallBox title={equipment} isSelectable={false} navigateTo="" />
            {/* Difficulty Level  */}
            <SmallBox
              title={difficultyLevel}
              isSelectable={false}
              navigateTo=""
            />
          </View>
          {/* Exercise Image  */}
          <Image
            source={images.ExerciseImage}
            className="h-44 w-full rounded-2xl"
            resizeMode="cover"
          />
          {/* Sets & Repetation setion  */}
          <View className="flex flex-row gap-2">
            <SmallBox
              title={`Sets: ${muscleGroup}`}
              isSelectable={false}
              navigateTo=""
            />
            <SmallBox
              title={`Repetition: ${muscleGroup}`}
              isSelectable={false}
              navigateTo=""
            />
          </View>

          {/* Target Muscle component section  */}
          <TargetMuscle muscleGroup={muscleGroup} />

          {/* Counter component section */}
          {exerciseStarted && (
            <View className="flex-col gap-4">
              {/* Sets Counter */}
              <Counter
                label="Sets"
                initialCount={sets}
                min={0}
                max={maxSets}
                onChange={(val) => setSets(val)}
              />

              {/* Repetition Counter */}
              <Counter
                label="Repetitions"
                initialCount={reps}
                min={0}
                max={maxReps}
                onChange={(val) => setReps(val)}
                resetTrigger={resetReps}
              />

              {/* Reset Button */}
              <TouchableOpacity
                className="bg-primary h-12 justify-center items-center rounded-xl"
                onPress={() => {
                  setSets(0);
                  setReps(0);
                  setResetReps(true);
                  setTimeout(() => setResetReps(false), 200);
                }}
              >
                <Text className="text-white text-center font-Medium">
                  Reset All
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Footer section */}
        {!exerciseStarted ? (
          <View className="mx-5 flex-row gap-3">
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
              <Icons.bookmarks.outlined width={32} height={32} />
            </TouchableOpacity>
            {/* CTA section  */}
            <View className="flex-1">
              <CTA
                title="Start Exercise"
                navigateTo=""
                isActive={true}
                width={"100%"}
                onPress={() => setExerciseStarted(true)}
              />
            </View>
          </View>
        ) : (
          <Footer
            sCTA_title="Quit & Discard"
            showPrimaryCTA={false}
            onSecondaryPress={() => setExerciseStarted(false)}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ExerciseDetail;
