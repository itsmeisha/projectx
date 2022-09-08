import { View, Text, Pressable, Alert } from 'react-native'
import React from 'react'

const Welcome = () => {
  function handleSignUp()
  {
    Alert("Let;s Get Started");
  }
  function handleSignUp()
  {
    Alert("Already have a account ?");
  }
  return (
    <View>
      <Text style={FirstText}> Hey !Welcome</Text>
      <Text>
        lets Make some connections. continue with us with your socials and help
        yourself and others.
      </Text>
      <Pressable onPress={handleSignUp()}>Get Started</Pressable>
      <Pressable onPress={handleSignIn()}>Already have an account?</Pressable>
    </View>
  );
}

export default Welcome