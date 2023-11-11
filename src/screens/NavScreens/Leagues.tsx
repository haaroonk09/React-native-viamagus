import { View, Text } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/styles'

const Leagues = () => {
  return (
    <View style={[globalStyles.full,globalStyles.backgroundWhite,{alignItems:"center",justifyContent:"center"}]}>
      <Text style={globalStyles.f24}>Leagues</Text>
    </View>
  )
}

export default Leagues