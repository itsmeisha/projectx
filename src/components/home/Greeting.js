import { View, Text } from 'react-native'
import React from 'react'

const Greeting = () => {
  const username="New User";
    return (
    <View>
      <Text>Welcome</Text>
      <Text >{username}</Text>
    </View>
  )
}

export default Greeting