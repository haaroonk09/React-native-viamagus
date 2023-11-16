import { View, Text } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/styles'

const ProfilePage = () => {
  return (
    <View style={[globalStyles.full,globalStyles.backgroundWhite,{alignItems:"center",justifyContent:"center"}]}>
      <Text style={[globalStyles.f24,globalStyles.colorBlack]}>Profile</Text>
    </View>
  )
}

export default ProfilePage