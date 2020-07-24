import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={styles.view}
        />
      </View>
      <TextInput
        style={styles.text_view}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text_view:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  view:{
    width: 200,
    height: 200 
  }
});

export default App;
