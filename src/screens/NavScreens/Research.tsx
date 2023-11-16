import { View, Text } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/styles'

const Research = () => {
  return (
    <View style={[globalStyles.full,globalStyles.backgroundWhite,{alignItems:"center",justifyContent:"center"}]}>
      <Text style={[globalStyles.f24,globalStyles.colorBlack]}>Research</Text>
    </View>
  )
}

export default Research