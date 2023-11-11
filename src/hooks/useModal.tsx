import { View, Text } from 'react-native'
import React, { useState } from 'react'

const useModal = () => {
    const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return {
    toggleModal,
    isModalVisible
  }
    
  
}

export default useModal