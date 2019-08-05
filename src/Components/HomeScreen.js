import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Left, Right, Body } from 'native-base';
import {TouchableOpacity, Text} from 'react-native';
import ListScreen from './ListScreen';
import PembelianScreen from './PembelianScreen';
import {Ionicons} from 'react-native-vector-icons';

export default class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container style={{paddingTop:30}}>
        <Header hasTabs >
          <Left></Left>
          <Body>
            <Text style={{color:'white'}}>Admin Toko</Text>
          </Body>
          <Right>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Add')}>
              <Ionicons name="md-add" size={32} color="white" />
            </TouchableOpacity>
          </Right>
        </Header>
        <Tabs>
          <Tab heading={<TabHeading><Text style={{color:'white'}}>Menu Barang</Text></TabHeading>}>
            <ListScreen navigation={navigation} />
          </Tab>
          <Tab heading={<TabHeading><Text style={{color:'white'}}>Pembelian</Text></TabHeading>}>
            <PembelianScreen navigation={navigation} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}