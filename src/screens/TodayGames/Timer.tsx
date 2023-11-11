import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/styles'
import { ImageBackground } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Timer = () => {
  return (
    <View>
          <ImageBackground
            source={require("../../../assets/images/bg.png")}
            style={{ width: "100%", height: "auto" }}
          >
            <View
              style={[
                globalStyles.jcRSpaceBetween,
                { paddingHorizontal: 15, paddingVertical: 20 },
              ]}
            >
              <View>
                <Text
                  style={[
                    globalStyles.colorBlue,
                    globalStyles.f12,
                    globalStyles.fw600,
                  ]}
                >
                  UNDER OR OVER
                </Text>
              </View>
              <View style={[globalStyles.jcRSpaceBetween]}>
                <Text
                  style={[
                    globalStyles.colorBlue1,
                    globalStyles.f12,
                    globalStyles.fw500,
                  ]}
                >
                  Starting in
                </Text>
                <MaterialCommunityIcons
                  name="clock"
                  size={14}
                  color="#D2BAF5"
                  style={{ paddingHorizontal: 8 }}
                />
                <Text
                  style={[
                    globalStyles.colorBlue,
                    globalStyles.f14,
                    globalStyles.fw500,
                  ]}
                >
                  03:23:12
                </Text>
              </View>
            </View>
            <View style={[{ paddingHorizontal: 15, paddingVertical: 15 }]}>
              <Text
                style={[
                  globalStyles.colorBlue,
                  globalStyles.f14,
                  globalStyles.fw500,
                ]}
              >
                Bitcoin price will be under
              </Text>
              <Text
                style={[
                  globalStyles.colorWhite,
                  globalStyles.f14,
                  globalStyles.fw500,
                ]}
              >
                <Text style={{fontWeight:"bold",fontSize:15}}>$24,524</Text> at 7 a ET on 22nd Jan’21
              </Text>
            </View>
          </ImageBackground>
        </View>
  )
}

export default Timer

const styles = StyleSheet.create({})