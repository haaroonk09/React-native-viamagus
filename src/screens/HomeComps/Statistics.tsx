import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/styles'
import { Avatar, Badge } from "react-native-elements";


const Statistics = () => {
  return (
    <View style={[globalStyles.jcRSpaceAround, styles.statsBox]}>
            <Avatar
              rounded
              size={26}
              source={require("../../../assets/images/start.png")}
              containerStyle={{ position: "absolute", top: -15, left: "52%" }}
            />
            <View style={[globalStyles.jcCCenter]}>
              <View>
                <Text
                  style={[
                    globalStyles.fw600,
                    globalStyles.f14,
                    globalStyles.colorGrey,
                    { paddingBottom: 14 },
                  ]}
                >
                  Under or Over
                </Text>
              </View>
              <View style={[globalStyles.jcRCenter]}>
                <Image source={require("../../../assets/images/up.png")} />
                <Text
                  style={[
                    globalStyles.f24,
                    globalStyles.fw700,
                    globalStyles.colorBlack,
                    { paddingLeft: 12 },
                  ]}
                >
                  81%
                </Text>
              </View>
            </View>
            <View style={[globalStyles.jcCFlexStart]}>
              <View style={{ justifyContent: "flex-start" }}>
                <Text
                  style={[
                    globalStyles.fw600,
                    globalStyles.f14,
                    globalStyles.colorGrey,
                    { paddingBottom: 14, textAlign: "left" },
                  ]}
                >
                  Top 5
                </Text>
              </View>
              <View style={[globalStyles.jcRCenter]}>
                <Image source={require("../../../assets/images/down.png")} />
                <Text
                  style={[
                    globalStyles.f24,
                    globalStyles.fw700,
                    globalStyles.colorBlack,
                    { paddingLeft: 12 },
                  ]}
                >
                  -51%
                </Text>
              </View>
            </View>
          </View>
  )
}

export default Statistics

const styles = StyleSheet.create({
    statsBox: {
        padding: 20,
        borderColor: "#EEEAF3",
        borderWidth: 1,
        marginTop: 44,
        marginBottom: 28,
      },
})