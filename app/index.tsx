import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Home from './home';

export default function App() {
  return (
    <>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-black">Start</Text>
        <Home />

        <StatusBar style="auto" />
      </View>
    </>
  );
}
