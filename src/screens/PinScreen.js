import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Fontisto } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from "react-native";


import Text from '../components/Text'
import NumberPad from '../components/NumberPad'

export default PinScreen = ({ navigation }) => {
  const [pinCount, setPinCount] = useState(0)
  const [pin, setPin] = useState('')

  const totalPins = 6
  const passwordFake = 123123
  useEffect(() => {
    validatePassword = async () => {
      if (pinCount === totalPins) {
        if (parseInt(pin.join('')) === passwordFake) {
          await AsyncStorage.setItem('@MyBank:password', pin.join(''));
          navigation.navigate("Tabs")
        }
        else {
          Alert.alert("Incorrect password")
          setPinCount(0)
          setPin('')
        }
      }
    }
    validatePassword()

  }, [pinCount])

  const renderPins = () => {
    const pins = []

    for (let x = 1; x <= totalPins; x++) {
      pins.push(
        x <= pinCount ? (
          <PinContainer key={x}>
            <Pin />
          </PinContainer>
        ) : (
          <PinContainer key={x} />
        )
      )
    }

    return pins;
  };

  const pressKey = (_, index) => {
    setPin([...pin, parseInt(_)])
    setPinCount(prev => {
      return index != 10 ? prev + 1 : prev - 1;
    })
  }
  return (
    <Container>
      <Text center heavy title color="#964ff0" margin="32px 0 0 0">myBank</Text>
      <Text center heavy medium margin="32px 0 0 0">Enter your PIN code.</Text>

      <AccessPin>{renderPins()}</AccessPin>

      <Text center bold margin="8px 0 0 0" color="#9c9c9f">
        Forgot PIN?
      </Text>

      <UseTouch onPress={() => navigation.navigate("Touch")}>
        <Fontisto name="locked" color="#964ff0" size={16} />
        <Text bold margin="0 0 0 8px" color="#964ff0">
          Use Touch ID
        </Text>
      </UseTouch>

      <NumberPad onPress={pressKey} />
      <StatusBar barStyle="light-content" />

    </Container>
  )
}

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1e1e1e;
`

const AccessPin = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 32px 64px 16px 64px;

`;

const UseTouch = styled.TouchableOpacity`
  margin: 32px 0 64px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PinContainer = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #5196f4;
  align-items: center;
  justify-content: center;
`;

const Pin = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #5196f4;
`;

const StatusBar = styled.StatusBar``;
