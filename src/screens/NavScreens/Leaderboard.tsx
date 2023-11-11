import { View, Text } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/styles'

const Leaderboard = () => {
  return (
    <View style={[globalStyles.full,globalStyles.backgroundWhite,{alignItems:"center",justifyContent:"center"}]}>
      <Text style={globalStyles.f24}>Leaderboard</Text>
    </View>
  )
}

export default Leaderboard