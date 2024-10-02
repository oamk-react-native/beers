import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Button } from 'react-native';
import useBeerData from './hooks/useBeerData';
import LoadingText from './components/LoadingText';
import { useState } from 'react';

export default function App() {
  const [disabled, setDisabled] = useState(false)
  const { brand, name, style,loading, error, getBeerData } = useBeerData()

  const handlePress = () => {
    setDisabled(true)
    getBeerData()
    setTimeout(() => {
      setDisabled(false)
    },2000)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Random beer</Text>
      {
        error ? (
          <Text>{error}</Text>
        ) : (
          <>
            <LoadingText loading={loading} text={brand} />
            <LoadingText loading={loading} text={name} />
            <LoadingText loading={loading} text={style} />
          </>
        )
      }
      <Button title="Next" onPress={handlePress} disabled={loading ? true : disabled}/>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24
  },
  text: {
    marginBottom: 16
  }
});
