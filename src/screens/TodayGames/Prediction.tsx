import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/styles'
import { FontAwesome5, FontAwesome, Ionicons } from "@expo/vector-icons";
import useModal from '../../hooks/useModal';

const Prediction = ({toggleModal}) => {
  return (
    <View style={{ paddingHorizontal: 16 }}>
    <Text
      style={[
        globalStyles.colorGrey,
        globalStyles.f14,
        globalStyles.fw500,
      ]}
    >
      What’s your prediction?
    </Text>
    <View
      style={[
        globalStyles.jcRSpaceAround,
        { paddingTop: 14, paddingBottom: 20 },
      ]}
    >
      <TouchableHighlight underlayColor="transparent" style={{}}>
        <View
          style={[globalStyles.backgroundDarkBlue, styles.memberButton]}
        >
          <FontAwesome5 name={"arrow-down"} size={12} color="#fff" />
          <Text
            style={[
              globalStyles.colorWhite,
              globalStyles.fw600,
              {
                textAlign: "center",
                paddingLeft: 10,
              },
            ]}
          >
            Under
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        onPress={toggleModal}
      >
        <View
          style={[globalStyles.backgroundLightBlue, styles.memberButton]}
        >
          <FontAwesome5 name={"arrow-up"} size={12} color="#fff" />
          <Text
            style={[
              globalStyles.colorWhite,
              globalStyles.fw600,
              {
                textAlign: "center",
                paddingLeft: 10,
              },
            ]}
          >
            Over
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  </View>
  )
}

export default Prediction

const styles = StyleSheet.create({
    memberButton: {
        paddingVertical: 11,
        paddingHorizontal: 44,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 20,
      },
})