'use strict';

import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Right, Title, Subtitle, Thumbnail, Body } from 'native-base';

import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

import QrScannerTab from './QrScannerTab';
import ShoppingCartTab from './ShoppingCartTab';
export default class App extends Component {
  onSuccess = (e) => {
    //Linking
      //.openURL(e.data)
      //.catch(err => console.error('An error occured', err));
    console.warn(e.data);


  }

  render() {
    return (
      <Container>
      <Header hasTabs>


      <Left />
          <Body>
            <Title>Lowes</Title>
            <Subtitle>Self Checkout</Subtitle>
          </Body>
          <Right />
          </Header>

      
      <Tabs>
        <Tab heading={ <TabHeading><Icon name="camera" /><Text>Buy</Text></TabHeading>}>
          <QrScannerTab />
        </Tab>
        <Tab heading={ <TabHeading><Text>ShoppingCart</Text></TabHeading>}>
          <ShoppingCartTab />
        </Tab>
        
      </Tabs>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});