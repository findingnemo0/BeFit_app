import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
const Counter = ({
  label = "",
  initialCount = 1,
  min = 1,
  max = 4,
  resetTrigger = false,
  onChange = () => {},
}) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  // Decrease count
  const handleDecrease = () => {
    if (count > min) {
      const newCount = count - 1;
      setCount(newCount);
      onChange(newCount);
    }
  };

  // Increase count
  const handleIncrease = () => {
    if (count < max) {
      const newCount = count + 1;
      setCount(newCount);
      onChange(newCount);
    }
  };

  useEffect(() => {
    if (resetTrigger) {
      setCount(0);
      onChange(0);
    }
  }, [resetTrigger]);

  return (
    // Container
    <View className="flex-col gap-2">
      <Text className="font-Medium text-body">{label}</Text>

      {/*  Decrease , Increase option & Counter  */}
      <View className="flex-row justify-between">
        {/* Decrease option  */}
        <TouchableOpacity
          className={`h-10 w-10 rounded-lg flex justify-center items-center ${
            count <= min ? "bg-[##636364]" : "bg-primary"
          }`}
          onPress={handleDecrease}
          disabled={count <= min}
        >
          <Text className="font-Medium text-white text-h2">-</Text>
        </TouchableOpacity>

        {/* Counter  */}
        <View className="h-10 w-10 bg-boxfill rounded-lg border-radiusColor border-[1.5px] flex justify-center items-center">
          <Text className="font-Medium text-label text-primary">{count}</Text>
        </View>

        {/* Increase option  */}
        <TouchableOpacity
          className={`h-10 w-10 rounded-lg flex justify-center items-center ${
            count >= max ? "bg-gray-300" : "bg-primary"
          }`}
          onPress={handleIncrease}
          disabled={count >= max}
        >
          <Text className="font-Medium text-white text-h2">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;
