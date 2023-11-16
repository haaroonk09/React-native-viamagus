import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/styles'
import { TouchableHighlight } from 'react-native'
import { Avatar, Badge } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Profile = ({navigation}:any) => {
    
  return (
    <View style={{ paddingHorizontal: 15 }}>
          <View style={[globalStyles.jcRSpaceBetween, { paddingTop: 5 }]}>
            <Avatar
              rounded
              size="small"
              source={require("../../../assets/images/logo.png")}
              onPress={() => navigation.navigate("Today's Games")}
            />
            <Text style={[globalStyles.f14,globalStyles.colorBlack,globalStyles.fw500]}>Profile</Text>
            <View>
              <Avatar
                rounded
                source={require("../../../assets/images/comment-alt.png")}
                size={25}
              />
              <Badge
                status="primary"
                value={1}
                containerStyle={{ position: "absolute", bottom: 15, left: 13 }}

              />
            </View>
          </View>
          <View>
            <View style={[globalStyles.jcRCenter, { paddingTop: 10 }]}>
              <Avatar
                rounded
                size="large"
                source={require("../../../assets/images/woman.png")}
              />
              <View
               style={{
                  position: "absolute",
                  bottom: 0,
                  right: "40%",backgroundColor:"#fff",padding:5,borderRadius:50
                }}
              ><Icon name="edit" size={14} color="#727682" /></View>
            </View>
          </View>
          <View style={[globalStyles.jcCCenter]}>
            <Text
              style={[
                globalStyles.fw500,
                globalStyles.f14,globalStyles.colorBlack,
                { paddingTop: 12, paddingBottom: 8},
              ]}
            >
              Jina Simons
            </Text>
            <Text
              style={[
                globalStyles.fw500,
                globalStyles.f12,
                globalStyles.colorGrey,
                { paddingBottom: 8 },
              ]}
            >
              6000 Pts
            </Text>
            <Text
              style={[
                globalStyles.fw500,
                globalStyles.f14,
                globalStyles.colorGrey,
                { lineHeight: 20 },
              ]}
            >
              I’m a software developer that has been in the crypto space since
              2012. And I’ve seen it grow and falter over a period of time.
              Really happy to be here!
            </Text>
          </View>
          <TouchableHighlight>
          <View style={[globalStyles.jcRCenter, { paddingTop: 20 }]}>
            <Icon name="sign-out-alt" size={18} color="#727682" />
            <Text
              style={[
                globalStyles.fw500,
                globalStyles.f14,
                globalStyles.colorGrey,
                { paddingLeft: 5 },
              ]}
            >
              Logout
            </Text>
          </View>
          </TouchableHighlight>
        </View>
  )
}

export default Profile

const styles = StyleSheet.create({})