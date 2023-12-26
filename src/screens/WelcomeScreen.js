import {
    View,
    Text,
    SafeAreaView,
    Platform,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import { useNavigation } from "@react-navigation/native";
  
  const ios = Platform.OS == "ios";
  
  export default function WelcomeScreen() {
    const navigation = useNavigation();
  
    return (
      <View className="flex-1 bg-white">
        <SafeAreaView
          className={
            ios
              ? "-mb-2 flex-1 flex justify-around bg-white"
              : "mb-3 flex-1 flex justify-around bg-white"
          }
        >
          <View className="space-y-2">
            <Text
              style={{ fontSize: wp(10) }}
              className="text-center font-bold text-gray-700"
            >
              SanderAI
            </Text>
            <Text
              style={{ fontSize: wp(4) }}
              className="text-center tracking-wider text-gray-600 font-semibold"
            >
              Chat smarter, think AI.
            </Text>
          </View>
          <View className="flex-row justify-center">
            <Image
              source={require("../../assets/images/welcome.png")}
              style={{ width: wp(75), height: wp(75) }}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="bg-emerald-600 mx-5 p-4 rounded-2xl"
          >
            <Text
              style={{ fontSize: wp(6) }}
              className="text-center font-bold text-white text-2xl"
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }
  