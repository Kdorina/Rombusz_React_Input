import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function App() {
  const[side, setHeight] = useState('');
  const[aplha, setAlpha] = useState('');
  const[result1, setResult1] = useState('');
  const[result2, setResult2] = useState('');

  function Calc(){
    let result1 = Math.pow(side,2)*Math.sin(aplha);
    setResult1(result1);

    let result2 = 4*side;
    setResult2(result2);
    // console.log(result)
  }
  return (
    <View style={styles.container}>
      <View style={styles.mainBackGround}>
        <Text style={styles.mainTitle}> Számítsa ki a rombusz kerületét és területét.</Text>
      </View>

      <Image style={{ width: '55%', height: "20%", marginBottom: 150 }}
             source={require('./assets/rombusz.jpg')} />

      <View style={styles.content}>
        <Text style={styles.title}>A oldal</Text>
        <TextInput style={styles.input} onChangeText={(data) => setHeight(data)}></TextInput>
        <Text style={styles.title}>Alfa szög</Text>
        <TextInput style={styles.input} onChangeText={(data) => setAlpha(data)} ></TextInput>
        <TouchableHighlight style={styles.calcBtn} onPress={Calc}>
          <Text style={styles.button}>Számít</Text>
        </TouchableHighlight>
        
        <Text style={styles.title}>Terület</Text>
        <TextInput style={styles.input} value={result1} onChangeText={(data) => setResult1(data)} ></TextInput>
        
        <Text style={styles.title}>Kerület</Text>
        <TextInput style={styles.input} value={result2} onChangeText={(data) => setResult2(data)} ></TextInput>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D1FF',
    alignItems: 'center',
    
  },
  mainBackGround:{
    margin:20,
    marginTop:30,
    backgroundColor:"#2A0EB1",
    padding:20,
    borderRadius:10,
    shadowRadius:20,
    shadowOpacity:0.8,
    shadowColor:'#170088'
  },
  mainTitle:{
    fontWeight:600,
    fontSize:20,
    color:'white',
    textAlign:'center',
    
  },
  img:{
    width:200,

  },
  content:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:-300
  },
  title:{
    marginTop:10
  },
  input:{
    marginTop:10,
    backgroundColor:'white',
    padding:10,
    width:300,
    borderRadius:15,
    borderColor:'#2A0EB1',
    borderWidth:2
  },
  button:{   
    color:'white',
    textAlign:'center',
    fontWeight:600
  },
  calcBtn:{
    marginTop:30,
    backgroundColor: '#3D18F0',
    padding:10,
    borderRadius:10,
    width:300,
  }
});
