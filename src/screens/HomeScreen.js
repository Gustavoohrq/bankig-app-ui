import React from 'react'
import styled from 'styled-components'
import { FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons'
import Text from '../components/Text'

export default HomeScreen = () => {
  return (
    <Container>
      <Header>
        <ProfilePhoto source={{ uri: "https://avatars.githubusercontent.com/u/47986830?v=4" }} />
        <Welcome>
          <Text heavy medium>Welcome,</Text>
          <Text>Gustavo H.</Text>
        </Welcome>
        <FontAwesome5 name="cog" size={24} color="#565656" />
      </Header>

      <Text center title black>
        R$ 1.000
      </Text>
      <Text center heavy color="#727479">
        Current Balance
      </Text>

      <Purchases ListHeaderComponent={
        <>
          <TransactionsHeader>
            <Text>Last Purchases</Text>
            <MaterialIcons name="sort" size={24} color="#5196f4" />
          </TransactionsHeader>

          <SearchContainer>
            <AntDesign name="search1" size={18} color="#5196f4" />
            <Search placeholder="Search Transactions" />
          </SearchContainer>
        </>
      } />
      <StatusBar barStyle="light-content" />
    </Container>
  )
}


const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;

`
const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px 16px 32px 16px;
`

const ProfilePhoto = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`

const Welcome = styled.View`
  flex: 1;
  padding: 0 16px;
`
const Purchases = styled.FlatList`
  background-color: #2c2c2c;
  padding: 16px;

`
const TransactionsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

`

const SearchContainer = styled.View`
  background-color: #3d3d3d;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  border-radius: 6px;
  margin: 16px 0;
`
const Search = styled.TextInput`
  flex: 1;
  padding: 8px 16px;
  font-family: "Avenir";
  color: #dbdbdb;


`


const StatusBar = styled.StatusBar``