import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Alert,
  Button,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Details() {
  return (
    <>
      <Stack.Screen
        options={{ headerShown: false, headerBackTitleVisible: false }}
      />

      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-black">Details Page</Text>
        <Link
          href="/home"
          asChild
          className="border-2 border-blue-500 border-dotted p-4 m-4"
        >
          <Pressable
            onPress={() => {
              Alert.alert('Pressed', 'You just pressed Home Screen Button');
            }}
          >
            <Text className="text-xl font-bold">Home</Text>
          </Pressable>
        </Link>
        <StatusBar style="dark" />
      </View>
    </>
  );
}
