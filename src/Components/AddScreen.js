import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Card, CardItem, Button, Label, Header, Right, Left, Body, Form, Item, Input, Textarea } from 'native-base';
import {Ionicons} from 'react-native-vector-icons';
import { ImagePicker } from 'expo';

export default class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Config Photo
      foto_base641:null,
      tipe1: 'jpg',

      foto_base642:null,
      tipe2: 'jpg',

      foto_base643:null,
      tipe3:'jpg',

      nama_barang:'',
      kota_penjual: '',
      kategori:'',
      stock:'',
      sizeMin:'',
      sizeMax: '',
      keterangan:'',
      harga: ''
    };
  }

  _pickImage1 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 4],
      base64: true
    })

    if (!result.cancelled) {
      let test = result.uri;
      let hasil = test.substring(test.lastIndexOf('.') + 1);

      let test_base64 = 'data:image/' + hasil + ';base64,' + result.base64;
      this.setState({ foto_base641: result.base64, tipe1: hasil });
    } else if (result == null) {
      this.setState({ foto_base641: imageNotFound, tipe1: 'jpeg' })
    } else {
      this.setState({ foto_base641: imageNotFound, tipe1: 'jpeg' })
    }
  }

  _pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 4],
      base64: true
    })

    if (!result.cancelled) {
      let test = result.uri;
      let hasil = test.substring(test.lastIndexOf('.') + 1);

      let test_base64 = 'data:image/' + hasil + ';base64,' + result.base64;
      this.setState({ foto_base642: result.base64, tipe2: hasil });
    } else if (result == null) {
      this.setState({ foto_base642: imageNotFound, tipe2: 'jpeg' })
    } else {
      this.setState({ foto_base642: imageNotFound, tipe2: 'jpeg' })
    }
  }

  _pickImage3 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 4],
      base64: true
    })

    if (!result.cancelled) {
      let test = result.uri;
      let hasil = test.substring(test.lastIndexOf('.') + 1);

      let test_base64 = 'data:image/' + hasil + ';base64,' + result.base64;
      this.setState({ foto_base643: result.base64, tipe3: hasil });
    } else if (result == null) {
      this.setState({ foto_base643: imageNotFound, tipe3: 'jpeg' })
    } else {
      this.setState({ foto_base643: imageNotFound, tipe3: 'jpeg' })
    }
  }

  _addItem = ()=>{
    const {foto_base641, foto_base642, foto_base643, tipe1, tipe2, tipe3, kota_penjual, kategori, stock, sizeMin, sizeMax, keterangan, nama_barang, harga} = this.state;
    fetch('http://192.168.0.6:8080/api_sepatu/addItem.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nama_barang:nama_barang,
        foto1: foto_base641,
        foto2: foto_base642,
        foto3: foto_base643,
        tipe1:tipe1,
        tipe2:tipe2,
        tipe3:tipe3,
        kota_penjual:kota_penjual,
        kategori:kategori,
        stock:stock,
        sizeMin:sizeMin,
        sizeMax:sizeMax,
        keterangan:keterangan,
        harga:harga
      })
    }).then((response) => response.json())
      .then((responseJson => {
        if (responseJson == 'Success') {
          alert('Barang Telah di tambahkan');
          this.props.navigation.navigate('Home');
        }
      }))
  }

  render() {
    const {width, height} = Dimensions.get('window');
    return (
      <View style={{ flex: 1, paddingTop:30 }}>
        <Header >
          <Left>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
              <Ionicons name="ios-arrow-back" size={32} color="white" />
            </TouchableOpacity>
          </Left>
          <Body>
            <Text style={{ color: 'white' }}>Tambah Barang</Text>
          </Body>
          <Right>
            
          </Right>
        </Header>
        <View style={{ flex: 1, paddingLeft:5, paddingRight:5 }}>
          <ScrollView style={{ flex: 1 }}>
            <Card style={{ flexDirection: 'row', height: 200, justifyContent:'space-between' }}>
              <View style={{ flex: 1, borderWidth: 0, borderColor: 'black', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <View style={{height:70, width:70, borderWidth:1, borderColor:'black'}}>
                  {
                    this.state.foto_base641 && <Image
                      source={{ uri: 'data:image/' + this.state.tipe1 + ';base64,' + this.state.foto_base641 }}
                      style={{ width: '100%', height: '100%' }}
                      resizeMode="contain"
                    />
                  }
                </View>
                <View style={{paddingTop: 10}}>
                  <Button onPress={()=>this._pickImage1()} style={{ width: 90, alignItems:'center', alignContent:'center', justifyContent:'center' }}>
                    <Text style={{textAlign:'center', color:'white'}}>Upload</Text>
                  </Button>
                </View>
                <View style={{paddingTop: 10}}>
                  <Button style={{ width: 90, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={{textAlign:'center', color:'white'}}>Reset</Text>
                  </Button>
                </View>
              </View>
              <View style={{ flex: 1, borderWidth: 0, borderColor: 'black', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <View style={{ height: 70, width: 70, borderWidth: 1, borderColor: 'black' }}>
                  {
                    this.state.foto_base642 && <Image
                      source={{ uri: 'data:image/' + this.state.tipe2 + ';base64,' + this.state.foto_base642 }}
                      style={{ width: '100%', height: '100%' }}
                      resizeMode="contain"
                    />
                  }
                </View>
                <View style={{ paddingTop: 10 }}>
                  <Button onPress={() => this._pickImage2()} style={{ width: 90, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Upload</Text>
                  </Button>
                </View>
                <View style={{ paddingTop: 10 }}>
                  <Button style={{ width: 90, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Reset</Text>
                  </Button>
                </View>
              </View>
              <View style={{ flex: 1, borderWidth: 0, borderColor: 'black', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <View style={{ height: 70, width: 70, borderWidth: 1, borderColor: 'black' }}>
                  {
                    this.state.foto_base643 && <Image
                      source={{ uri: 'data:image/' + this.state.tipe3 + ';base64,' + this.state.foto_base643 }}
                      style={{ width: '100%', height: '100%' }}
                      resizeMode="contain"
                    />
                  }
                </View>
                <View style={{ paddingTop: 10 }}>
                  <Button onPress={() => this._pickImage3()} style={{ width: 90, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Upload</Text>
                  </Button>
                </View>
                <View style={{ paddingTop: 10 }}>
                  <Button style={{ width: 90, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Reset</Text>
                  </Button>
                </View>
              </View>
            </Card>
            <Card>
              <Form>
                <Item floatingLabel>
                  <Label>Nama Produk</Label>
                  <Input onChangeText={nama_barang => this.setState({ nama_barang })} />
                </Item>
                <Item floatingLabel>
                  <Label>Harga Barang</Label>
                  <Input onChangeText={harga => this.setState({ harga })} />
                </Item>
                <Item floatingLabel>
                  <Label>Kota Penjual</Label>
                  <Input onChangeText={kota_penjual => this.setState({ kota_penjual })} />
                </Item>
                <Item floatingLabel>
                  <Label onChangeText={kategori => this.setState({ kategori })}>Kategori</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>Stock</Label>
                  <Input onChangeText={stock => this.setState({ stock })} />
                </Item>
                <Item regular style={{flexDirection:'row', paddingTop:5, paddingLeft:10, paddingRight:10}}>
                  <Text>Available Size : </Text>
                  <View style={{ width: 60 }}>
                    <Input placeholder='Size' onChangeText={sizeMin => this.setState({ sizeMin })}/>
                  </View>
                  <Text> --- </Text>
                  <View style={{ width: 60 }}>
                    <Input placeholder='Size' onChangeText={sizeMax => this.setState({ sizeMax })}/>
                  </View>
                </Item>
                <Textarea rowSpan={3} bordered placeholder="Textarea" onChangeText={keterangan => this.setState({ keterangan })} />
              </Form>
              <View style={{paddingTop:20, paddingBottom:50, paddingLeft:10, paddingRight:10}}>
                <Button block onPress={()=>this._addItem()}>
                  <Text style={{color:'white'}}>Simpan</Text>
                </Button>
              </View>
            </Card>
          </ScrollView>
        </View>
      </View>
    );
  }
}
