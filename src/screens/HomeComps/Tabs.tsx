import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import globalStyles from "../../styles/styles";
import { Avatar, Badge } from "react-native-elements";

const Tabs = () => {
  const badgeData = [
    {
      title: "First Stripe Earned",
      description: "Top 10% of highest spending players in a month",
    },
    {
      title: "Master Explorer",
      description: "Visited 100 unique locations in the game",
    },
    {
      title: "Code Ninja",
      description: "Completed 50 coding challenges in a week",
    },
    {
      title: "Fitness Guru",
      description: "Achieved 100 consecutive days of exercise",
    },
    {
      title: "Bookworm",
      description: "Read 20 books in a month",
    },
    {
      title: "Social Butterfly",
      description: "Attended 10 social events in a week",
    },
    {
      title: "Star Chef",
      description: "Cooked 30 different recipes",
    },
    {
      title: "Mindful Meditator",
      description: "Completed 50 hours of meditation",
    },
  ];

  const [activeButton, setActiveButton] = useState("Badges");

  const handleGamesPlayedPress = () => {
    setActiveButton("GamesPlayed");
  };

  const handleBadgesPress = () => {
    setActiveButton("Badges");
  };
  return (
    <>
      <View
        style={[
          globalStyles.jcRSpaceAround,
          { borderTopColor: "#F3F2F7", borderTopWidth: 4 },
        ]}
      >
        <TouchableOpacity
          onPress={handleGamesPlayedPress}
          style={[
            styles.navButton,
            { flex: 1, paddingVertical: 16 },
            activeButton === "GamesPlayed" && styles.activeButton,
          ]}
        >
          <View style={{}}>
            <Text
              style={[
                globalStyles.f14,
                globalStyles.fw500,
                { textAlign: "center" },
                activeButton === "GamesPlayed" ? { color: "#6231AD" } : null,
              ]}
            >
              Games Played
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleBadgesPress}
          style={[
            styles.navButton,
            { flex: 1, paddingVertical: 16 },
            activeButton === "Badges" && styles.activeButton,
          ]}
        >
          <View>
            <Text
              style={[
                globalStyles.f14,
                globalStyles.fw500,
                { textAlign: "center" },
                activeButton === "Badges" ? { color: "#6231AD" } : null,
              ]}
            >
              Badges
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {activeButton === "Badges" && (
        <View
          style={[
            globalStyles.full,
            globalStyles.backgroundBlue,
            { padding: 15 },
          ]}
        >
          {badgeData.map((badge, index) => (
            <TouchableHighlight key={index}>
              <View style={[styles.cardBox, globalStyles.jcRFlexStart]}>
                <View style={{ flex: 1 }}>
                  <Avatar
                    rounded
                    source={require("../../../assets/images/chat.png")}
                    size="large"
                  />
                </View>
                <View
                  style={[
                    globalStyles.jcCFlexStart,
                    { flex: 2, paddingRight: 30 },
                  ]}
                >
                  <Text
                    style={[
                      globalStyles.fw600,
                      globalStyles.f14,
                      { paddingBottom: 10 },
                    ]}
                  >
                    {badge.title}
                  </Text>
                  <Text
                    style={[
                      globalStyles.fw500,
                      globalStyles.f14,
                      globalStyles.colorGrey,
                    ]}
                  >
                    {badge.description}
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          ))}
        </View>
      )}
    </>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  navButton: {
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  cardBox: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#EEEAF3",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 16,
  },
  activeButton: {
    borderBottomColor: "#6231AD",
  },
});
