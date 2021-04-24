import React, {useState} from 'react'
import styled from 'styled-components'
import {MaterialIcons} from '@expo/vector-icons'


import Text from '../components/Text'
import NumberPad from '../components/NumberPad'

export default function SendRequestScreen() {
  const [amount, setAmount] = useState("0")
  
  const convertToReal = (currentAmount) => {
    const newAmount = currentAmount / 100 

    return newAmount.toLocaleString("pt-BR", {style: "currency", currency:"BRL" })
  }

  const pressKey = (item, index) => {
    setAmount(prev => {
      return index != 10 ? prev + item : prev.slice(0, prev.length - 1)
    })
  }
   return (
    <Container>
      <Text center large heavy margin="16px 0 0 0">Send</Text>

      <Amount>
        <Text title heavy>{convertToReal(amount)}</Text>
        <Text bold color="#727479">Choose amount to send.</Text>
      </Amount>

      <User>
        <ProfilePhoto source={{ uri: "https://avatars.githubusercontent.com/u/47986830?v=4" }} />
        <UserDetails>
          <Text medium heavy>Gustavo H</Text>
          <Text bold color="#727479">Patreon</Text>
        </UserDetails>

        <MaterialIcons name="edit" size={16} color="#ffffff" />
      </User>

      <Send>
        <Text medium heavy>Send {convertToReal(amount)} to Gustavo H.</Text>
      </Send>

      <NumberPad  barStyle="ligh-content" onPress={pressKey} />
    </Container>
  )
}

const Container = styled.SafeAreaView`
    flex: 1;
    background-color:#1e1e1e   
`
const Amount = styled.View`
  margin-top: 64px;
  align-items: center;
`
const User = styled.View`
  margin: 32px 16px;
  flex-direction: row;
  align-items: center;
`

const ProfilePhoto = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 12px;

`

const UserDetails = styled.View`
  flex: 1;
  margin: 0 16px;

`

const Send = styled.TouchableOpacity`
  margin: 16px;
  background-color: #5196f4;
  padding: 16px 32px;
  align-items: center;
  border-radius: 12px;
`

const StatusBar = styled.StatusBar``
