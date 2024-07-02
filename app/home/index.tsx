import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Pressable, Text, View } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-black">Home Page</Text>
      <Link
        href="/details"
        asChild
        className="border-2 border-blue-500 border-dotted p-4 m-4"
      >
        <Pressable
          onPress={() => {
            Alert.alert('Pressed', 'You just pressed Details Screen Button');
          }}
        >
          <Text className="text-xl font-bold">Go to Details</Text>
        </Pressable>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
