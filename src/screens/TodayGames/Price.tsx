import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/styles'

const Price = () => {
  return (
    <View
          style={[
            globalStyles.jcRSpaceEvenly,
            { paddingHorizontal: 16, paddingVertical: 20 },
          ]}
        >
          <View>
            <Text
              style={[
                globalStyles.f12,
                globalStyles.fw500,
                globalStyles.colorlight,
              ]}
            >
              PRIZE POOL
            </Text>
            <Text style={[globalStyles.f14, globalStyles.fw600,globalStyles.colorBlack,]}>$12,000</Text>
          </View>
          <View>
            <Text
              style={[
                globalStyles.f12,
                globalStyles.fw500,
                globalStyles.colorlight,
              ]}
            >
              UNDER
            </Text>
            <Text style={[globalStyles.f14, globalStyles.fw600,globalStyles.colorBlack]}>3.25x</Text>
          </View>
          <View>
            <Text
              style={[
                globalStyles.f12,
                globalStyles.fw500,
                globalStyles.colorlight,
              ]}
            >
              OVER
            </Text>
            <Text style={[globalStyles.f14, globalStyles.fw600,globalStyles.colorBlack]}>1.25x</Text>
          </View>
          <View>
            <Text
              style={[
                globalStyles.f12,
                globalStyles.fw500,
                globalStyles.colorlight,
              ]}
            >
              ENTRY FEES
            </Text>
            <View style={[globalStyles.jcRFlexEnd]}>
              <Text
                style={[
                  globalStyles.f14,
                  globalStyles.fw600,,globalStyles.colorBlack,
                  { paddingRight: 8 },
                ]}
              >
                5
              </Text>
              <Image source={require("../../../assets/images/yellow.png")} />
            </View>
          </View>
        </View>
  )
}

export default Price

const styles = StyleSheet.create({})