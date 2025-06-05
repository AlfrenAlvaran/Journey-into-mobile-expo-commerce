import { Slot } from "expo-router";
import "../global.css";
import { AuthProvider } from "@/context/auth-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeScreen from "@/components/SafeScreen";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <SafeScreen>
          <Slot />
        </SafeScreen>
      </SafeAreaProvider>
      <StatusBar barStyle={"dark-content"} backgroundColor="transparent" />
    </AuthProvider>
  );
}
