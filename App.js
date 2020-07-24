import React ,{useState}from 'react';
import Cat from './Cat';
import Cafe from './Cafe';
import { StyleSheet, View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  return (
    <ScrollView>
      <Text>ScrollView</Text>
      <Cat/>
      <Cafe/>
      <View>
        <Text>View and Image</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={styles.image_view}/>
      </View>
      <View style={styles.textinput_view}>
        <TextInput 
          style={styles.textinput}
          placeholder="Type here to translate!"
          onChangeText={text=>setText(text)}
          defaultValue={text}
        />
        <Text style={styles.textstyle}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text_view:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  image_view:{
    width: 200,
    height: 200 
  },
  textinput_view:{
    padding:10,
  },
  textinput:{
    height:40,
  },
  textstyle:{
    padding:10,
    fontSize:42
  }
});

export default App;