import React, { useEffect, useRef, useState } from 'react';
import {KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';

const OtpScreen = ({navigation}) => {

    const etp1=useRef();
    const etp2=useRef()
    const etp3=useRef()
    const etp4=useRef()

 const [first,setFirst]=useState('')
 const [second,setSecond]=useState('')
 const [third,setThird]=useState('')
 const [fourth,setFourth]=useState('')
  
 
 useEffect(() => {
 
  if (first && second && third && fourth) {
      navigation.navigate('Home');
  }
}, [first, second, third, fourth]);
    
  return (
    <KeyboardAvoidingView
    enabled={true}
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/Image/grow.png')}
          style={styles.logo}
        />
        <View style={styles.profileIcon}>
          <Image
            source={require('../../assets/Image/man.png')}
            style={styles.profileImage}
          />
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: '10%'}}>
        <Text style={{fontSize: 22, fontWeight: '500', color: '#000'}}>
          Hi, Sahil Singh
        </Text>
        <Text style={{fontSize: 15, marginTop: 5, color: '#8e8e8e'}}>
          Enter your Groww PIN
        </Text>
      </View>

      <View style={styles.pinView}>
         <TextInput ref={etp1} value={first} style={[styles.InputView,{borderColor:first.length>=1?'#000':'#8e8e8e'}]} keyboardType="numeric" maxLength={1}autoFocus 
         onChangeText={txt=>{setFirst(txt);
          if(txt.length>=1){
          etp2.current.focus();
         }}}
         secureTextEntry
         />
         <TextInput ref={etp2} value={second} style={[styles.InputView,{marginLeft:15,borderColor:second.length>=1?'#000':'#8e8e8e'}]} keyboardType="numeric" maxLength={1}
         
         onChangeText={txt=>{setSecond(txt);
          if(txt.length>=1){
          etp3.current.focus();
         }else if (txt.length < 1) {
          etp1.current.focus();
        }
        }}
        secureTextEntry
         />
         <TextInput ref={etp3} value={third} style={[styles.InputView,{marginLeft:15,borderColor:third.length>=1?'#000':'#8e8e8e'}]} keyboardType="numeric" maxLength={1}
         
         onChangeText={txt=>{setThird(txt);
          if(txt.length>=1){
          etp4.current.focus();
         }else if (txt.length < 1) {
          etp2.current.focus();
        }
        }}
        secureTextEntry
         />
         <TextInput ref={etp4}  value={fourth} style={[styles.InputView,{marginLeft:15,borderColor:fourth.length>=1?'#000':'#8e8e8e'}]} keyboardType="numeric" maxLength={1}
          onChangeText={txt=>{setFourth(txt);
            if(txt.length>=1){
            etp4.current.focus();
           }
           else if (txt.length < 1) {
            etp3.current.focus();
          }}}
          secureTextEntry
         />

        
        
      </View>

    
    </View>
    <Text style={{textAlign:'center',marginBottom:15,color:'#06B293',fontSize:14,fontWeight:'500'}}>Use fingerprint</Text>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginLeft: 20,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#8e8e8e',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  numpad: {
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
  pinView: {
    marginTop: 30,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  numpadBtn: {
    width: '33%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InputView:{
    width:50,
    height:50,
    borderWidth:2,
    borderRadius:10,
    textAlign:'center',
    fontSize:18,color:'black',fontWeight:'600'
  }
});

export default OtpScreen;
