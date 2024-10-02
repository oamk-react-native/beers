import { StyleSheet, Text } from 'react-native'
import React from 'react'

export default function LoadingText({loading,text}) {
  return (
    <Text style={styles.text}>{loading === false ? text : 'Loading...'}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    marginBottom: 16
  }
});