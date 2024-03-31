import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {DATA} from '../utils/Mocks';

const Home = () => {
  const [selectedTab,setSelectedTab]=useState(0)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image
            source={require('../../assets/Image/grow.png')}
            style={styles.stocksImage}
          />
          <Text style={styles.stocksText}>Stocks</Text>
        </View>
        <View style={styles.rightHeader}>
          <Image
            source={require('../../assets/Image/search.png')}
            style={styles.icon}
          />
          <Image
            source={require('../../assets/Image/code.png')}
            style={styles.codeIcon}
          />
          <Image
            source={require('../../assets/Image/man.png')}
            style={styles.manIcon}
          />
        </View>
      </View>

      <View style={styles.topView}>
        <View style={styles.TwoBoxesView}>
          <View>
            <Text style={styles.NIFTYTXT}>NIFTY 50</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.NUMBRTXT}>22,326.90</Text>
              <Text style={styles.GREENTXT}>+203.25 [0.92%]</Text>
            </View>
          </View>
        </View>
        <View style={styles.TwoBoxesView}>
          <View>
            <Text style={styles.NIFTYTXT}>BANK NIFTY</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.NUMBRTXT}>47,14.60</Text>
              <Text style={styles.GREENTXT}>+338.65 [0.72%]</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 20, padding: 5}}>
        <FlatList
          data={DATA}
          scrollEnabled={true}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            console.log(item);
            return (
              <TouchableOpacity
              key={index}
                style={[styles.EXPLOREBTN,{borderColor:selectedTab==index?'#000':'#8e8e8e'}]} onPress={()=>setSelectedTab(index)}>
                <Text>{item.txt}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {selectedTab==0 && 
      <ScrollView>
        <View style={{marginTop:20,marginLeft:20}}>
          <Text style={{fontSize:17,color:'#000',fontWeight:'500'}}>Most bought on Groww</Text>
         

         <View style={{}}>
          <View style={{flexDirection:'row',marginTop:20}}>
              <View style={{width:'45%',height:150,borderWidth:1,borderRadius:10}}>
                    <Image source={require('../../assets/Image/download.png')} style={{width:50,height:50,resizeMode:'contain'}}/>
                    <Text style={{}}>IRFC</Text>
              </View>
              <View style={{width:'45%',height:150,borderWidth:1,borderRadius:10,marginLeft:15}}>
              <Image source={require('../../assets/Image/nhpc.png')} style={{width:50,height:50,resizeMode:'contain'}}/>

              </View>
          </View>

          <View style={{flexDirection:'row',marginTop:20}}>
              <View style={{width:'45%',height:150,borderWidth:1,borderRadius:10}}>
              <Image source={require('../../assets/Image/yesbank.png')} style={{width:60,height:60}}/>


              </View>
              <View style={{width:'45%',height:150,borderWidth:1,borderRadius:10,marginLeft:15}}>
              <Image source={require('../../assets/Image/jio.png')} style={{width:70,height:70}}/>

              </View>
          </View>


         </View>
           
        </View>
      </ScrollView>
      
      }
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  leftHeader: {
    flexDirection: 'row',
  },
  stocksImage: {
    width: 30,
    height: 30,
    marginLeft: 15,
  },
  stocksText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    fontFamily: 'Inter-Bold',
    marginLeft: 10,
  },
  rightHeader: {
    flexDirection: 'row',
    marginRight: '1%',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: '12%',
  },
  codeIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  manIcon: {
    width: 22,
    height: 22,
    marginLeft: 20,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  TwoBoxesView: {
    width: '45%',
    height: 50,
    borderWidth: 1,
    borderColor: '#D4E5E2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NIFTYTXT: {
    fontSize: 15,
    color: 'black',
    fontWeight: '600',
  },
  NUMBRTXT: {
    fontSize: 12,
    color: '#000',
    fontWeight: '400',
  },
  GREENTXT: {
    fontSize: 12,
    color: '#00886F',
    marginLeft: 5,
    fontWeight: '600',
  },
  EXPLOREBTN:{
    
      borderWidth:1.5,
      borderRadius: 20,
      alignSelf: 'center',
      marginHorizontal: 8,
      paddingVertical: 7,
      paddingHorizontal: 15,
      
    
  }
});
