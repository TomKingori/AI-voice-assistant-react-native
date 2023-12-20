import { View, Text, SafeAreaView, Platform } from "react-native";
import GlobalStyles from "./theme/GlobalStyles";
import React from "react";

const ios = Platform.OS == "ios";

export default function App() {
  return (
    <View className="flex-1 bg-neutral-800">
    <SafeAreaView className={ios ? "-mb-2" : "mb-3 mt-12"}>
        <Text className="text-white">App</Text>
    </SafeAreaView>
    </View>
  );
}
