import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSearchPress() {
    if (email != '') {
      navigation.navigate("Home", { searchTerm: email });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TextInput value={email} onChangeText={setEmail} style={styles.Input} placeholder="Email" />
        <TextInput value={password} onChangeText={setPassword} style={styles.Input} placeholder="Password" />
        <Button title="Login" onPress={onSearchPress} style={styles.button} />
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
  },
  Input: {
    padding: 8,
    margin: 15,
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: 'white',
    borderColor: 'orange',
    width: 200,
  },
  body: {
    backgroundColor: '#A3DDE0',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'red'
  },
  row: {
    backgroundColor: 'white',
    padding: 4,
    margin: 5,
    paddingLeft: 10,
    marginTop: 10,
  },
  reservationsBody: {
    backgroundColor: '#A3DDE0',
    flex: 10,
    padding: 10,
  },
  rowText: {
    //fontSize: '1em',
  },
};
