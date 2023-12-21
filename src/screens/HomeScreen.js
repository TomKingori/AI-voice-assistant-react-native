import { View, Text, SafeAreaView, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useState } from "react";
import Features from "../components/features";

const ios = Platform.OS == "ios";

export default function HomeScreen() {
  const [messages, setMessages] = useState([]);

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView
        className={
          ios ? "-mb-2 flex-1 flex mx-5" : "mb-3 mt-12 flex-1 flex mx-5"
        }
      >
        {/* Bot icon */}
        <View className="flex-row justify-center">
          <Image
            source={require("../../assets/images/bot.png")}
            style={{ height: hp(15), width: hp(15) }}
          />
        </View>

        {/* Features || messages */}
        {messages.length > 0 ? <View></View> : <Features />}
      </SafeAreaView>
    </View>
  );
}
