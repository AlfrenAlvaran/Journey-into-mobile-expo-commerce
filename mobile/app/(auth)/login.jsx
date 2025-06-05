import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Link } from "expo-router";

export default function Login() {
  const COLORS = {
    primary: "#1976D2",
    textPrimary: "#1a4971",
    textSecondary: "#6d93b8",
    textDark: "#0d2b43",
    placeholderText: "#767676",
    background: "#e3f2fd",
    cardBackground: "#f5f9ff",
    inputBackground: "#f0f8ff",
    border: "#bbdefb",
    white: "#ffffff",
    black: "#000000",
  };

  const { width } = Dimensions.get("window");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    // Add login logic here
  };

  return (
    <KeyboardAvoidingView>
      <View className="flex-grow bg-gray-100 p-5 justify-center">
        {/* Image */}
        <View className="items-center w-full">
          <Image
            source={require("@/assets/images/home-story.png")}
            className="rounded-lg"
            style={{ width: width * 0.75, height: width * 0.75 }}
            resizeMode="contain"
          />
        </View>

        <View
          className="rounded-2xl p-6 shadow-md border-2 -mt-6"
          style={{
            backgroundColor: COLORS.cardBackground,
            borderColor: COLORS.border,
          }}
        >
          {/* Email Field */}
          <View className="mb-5">
            <Text
              style={{ color: COLORS.textPrimary }}
              className="text-sm mb-2 font-medium"
            >
              Email
            </Text>
            <View
              className="flex-row items-center rounded-xl border px-3"
              style={{
                backgroundColor: COLORS.inputBackground,
                borderColor: COLORS.border,
              }}
            >
              <Ionicons
                name="mail-outline"
                size={20}
                color={COLORS.placeholderText}
                style={{ marginRight: 10 }}
              />
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor={COLORS.placeholderText}
                className="flex-1 h-12"
                style={{ color: COLORS.textDark }}
              />
            </View>
          </View>

          {/* Password Field */}
          <View className="mb-5">
            <Text
              style={{ color: COLORS.textPrimary }}
              className="text-sm mb-2 font-medium"
            >
              Password
            </Text>
            <View
              className="flex-row items-center rounded-xl border px-3"
              style={{
                backgroundColor: COLORS.inputBackground,
                borderColor: COLORS.border,
              }}
            >
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color={COLORS.placeholderText}
                style={{ marginRight: 10 }}
              />
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor={COLORS.placeholderText}
                secureTextEntry={!showPassword}
                className="flex-1 h-12"
                style={{ color: COLORS.textDark }}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                className="p-2"
              >
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={20}
                  color={COLORS.placeholderText}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            className="rounded-xl h-12 justify-center items-center mt-4 shadow-sm"
            style={{ backgroundColor: COLORS.primary, elevation: 2 }}
            onPress={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="text-black text-base font-semibold">Login</Text>
            )}
          </TouchableOpacity>

          {/* Register Link */}
          <View className="flex-row justify-center mt-6">
            <Text style={{ color: COLORS.textSecondary }} className="mr-1.5">
              Don't have an account?
            </Text>
            <Link href="/register" asChild>
              <TouchableOpacity>
                <Text
                  style={{ color: COLORS.primary }}
                  className="font-semibold"
                >
                  Register
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
