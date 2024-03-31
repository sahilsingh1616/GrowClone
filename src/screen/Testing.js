import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, View, Platform } from 'react-native';

const Testing = () => {
  return (
    <KeyboardAvoidingView
      enabled={true}
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20} // Adjust as needed
    >
      <View style={styles.inner}>
        <TextInput
          style={styles.input}
          placeholder="Enter your text"
          keyboardType="number-pad"
          autoFocus 
        />
        {/* Other components */}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default Testing;
