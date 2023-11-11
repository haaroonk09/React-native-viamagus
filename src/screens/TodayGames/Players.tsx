import { View, Text } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/styles'
import { ProgressBar, TextInput } from "react-native-paper";
import { FontAwesome5, FontAwesome, Ionicons } from "@expo/vector-icons";

const Players = () => {
  return (
    <View
          style={[
            globalStyles.backgroundBlue2,
            { paddingHorizontal: 15, paddingVertical: 21 },
          ]}
        >
          <View style={[globalStyles.jcRSpaceBetween]}>
            <View style={[globalStyles.jcRCenter]}>
              <FontAwesome name={"user"} size={12} color="#727682" />
              <Text
                style={[
                  globalStyles.colorGrey,
                  globalStyles.f14,
                  globalStyles.fw600,
                  {
                    paddingLeft: 10,
                  },
                ]}
              >
                355 Players
              </Text>
            </View>
            <View style={[globalStyles.jcRCenter]}>
              <FontAwesome name={"area-chart"} size={12} color="#727682" />
              <Text
                style={[
                  globalStyles.colorGrey,
                  globalStyles.f14,
                  globalStyles.fw600,
                  {
                    paddingLeft: 10,
                  },
                ]}
              >
                View chart
              </Text>
            </View>
          </View>
          <View style={{ paddingVertical: 14 }}>
            <ProgressBar
              style={{ borderRadius: 10, height: 10 }}
              progress={0.7}
              color="#FE4190"
            />
          </View>
          <View style={[globalStyles.jcRSpaceBetween]}>
            <View>
              <Text
                style={[
                  globalStyles.f12,
                  globalStyles.fw500,
                  globalStyles.colorlight,
                ]}
              >
                232 predicted under
              </Text>
            </View>
            <View>
              <Text
                style={[
                  globalStyles.f12,
                  globalStyles.fw500,
                  globalStyles.colorlight,
                ]}
              >
                123 predicted over
              </Text>
            </View>
          </View>
        </View>
  )
}

export default Players