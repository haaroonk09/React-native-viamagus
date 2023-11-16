import { View, Text, TouchableHighlight, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import globalStyles from '../../styles/styles'
import Modal from "react-native-modal";
import { Dimensions } from 'react-native';

const Item = ({ title }: any) => {
    const [isPressed, setIsPressed] = useState(false);
  
    const handlePress = () => {
      setIsPressed(prevState => !prevState);
    };
    const windowWidth = Dimensions.get('window').width;
    return (
      <TouchableOpacity
        
        onPress={handlePress}
      >
        <View style={[styles.item, isPressed && styles.pressed,{width:windowWidth}]}>
        <Text style={isPressed ? styles.pressedTitle : styles.title }>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

const SubmitModal = ({isModalVisible,toggleModal}:any) => {
  const causes = [
]
for (let i = 0; i < 20; i++) {
  causes.push({
    id: (i + 1).toString(),
    title: (i + 1).toString(),
  });
}

  return (
    <View>
          <Modal
            isVisible={isModalVisible}
            style={{ justifyContent: "flex-end", margin: 0 }}
          >
            <View
              style={{
                backgroundColor: "white",
                flex: 0.6,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingTop: 44,
                paddingHorizontal: 16,
              }}
            >
              <View>
                <Text style={[globalStyles.f16,globalStyles.colorBlack,globalStyles.fw500,{paddingBottom:28}]}>
                  Your Prediction is Under
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    globalStyles.colorGrey,
                    globalStyles.f14,
                    globalStyles.fw500,{paddingBottom:15}
                  ]}
                >
                  ENTRY TICKETS
                </Text>
              </View>
              <View style={{paddingBottom:10}}>
              <FlatList
              
          data={causes}
          renderItem={({ item }) => (
            <View style={[globalStyles.jcRCenter]}>
              <Item title={item.title} />
            </View>
          )}
          keyExtractor={(item) => item.id}
          style={[styles.selectBox]}
        />
              </View>
              <View style={[globalStyles.jcRSpaceEvenly,{ paddingBottom: 28 }]}>
                <View>
                  <Text
                    style={[
                      globalStyles.f12,
                      globalStyles.fw500,
                      globalStyles.colorlight,
                    ]}
                  >
                    You can win
                  </Text>
                  <Text
                    style={[
                      globalStyles.f14,
                      globalStyles.fw600,
                      { color: "#03A67F" },
                    ]}
                  >
                    $2,000
                  </Text>
                </View>
                <View >
                  <Text
                    style={[
                      globalStyles.f12,
                      globalStyles.fw500,
                      globalStyles.colorWhite,
                    ]}
                  >Hello</Text>
                  <View
                    style={[globalStyles.jcRFlexEnd]}
                  >
                    <Text
                      style={[
                        globalStyles.colorGrey,
                        globalStyles.f14,
                        globalStyles.fw500,
                      ]}
                    >
                      Total
                    </Text>
                    <View style={{paddingHorizontal:8}}>
                    <Image source={require("../../../assets/images/yellow.png")} />
                    </View>
                    <Text
                      style={[
                        globalStyles.f14,
                        globalStyles.fw600,globalStyles.colorBlack,
                        
                      ]}
                    >
                      5
                    </Text>
                    
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",

                  marginBottom: 20,
                }}
              >
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={toggleModal}
                >
                  <View
                    style={[
                      globalStyles.backgroundLightBlue,
                      styles.memberButton,
                      { width: "100%" },
                    ]}
                  >
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
                      Submit my prediction
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
  )
}

const styles = StyleSheet.create({
  
    item: {
      marginVertical: 8,
      marginHorizontal: 16,
      padding:5
    },
    title: {
      fontSize: 24,
      textAlign:"center",
      fontFamily:"Montserrat-SemiBold",
      color:"black",
    },
    pressedTitle:{
      fontSize: 24,
      fontFamily:"Montserrat-SemiBold",
      color:"black",
      textAlign:"center",
    },
    selectBox: {
      backgroundColor: "#fff",
      height: "50%",
      color:"#000"
    },
    pressed: {
      backgroundColor: '#6231ad0f',
      borderRadius:10,
      color:"yellow"
    },
    memberButton: {
        paddingVertical: 11,
        paddingHorizontal: 44,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 20,
      },
  });

export default SubmitModal