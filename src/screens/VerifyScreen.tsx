import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../theme';
import { ScreenProps } from '../types';

export default function VerifyScreen({ navigate }: ScreenProps) {
  return (
    <>
      <Header
        title="Подтвердить номер"
        subtitle={
          <>
            Мы только что отправили код на{'\n'}
            <Text style={{ fontWeight: 'bold' }}>+7 (700) 555 77 55</Text>
          </>
        }
        onBack={() => navigate('forgot')}
      />

      <View style={styles.codeRow}>
        {['7', '8', '5', '4'].map((digit, i) => (
          <TextInput
            key={i}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="number-pad"
            defaultValue={digit}
          />
        ))}
      </View>

      <PrimaryButton title="Продолжить" onPress={() => navigate('reset')} />

      <TouchableOpacity style={styles.resend}>
        <Text style={{ color: colors.placeholder }}>Отправить код еще раз</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  codeRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 32 },
  codeInput: {
    width: 60,
    height: 60,
    backgroundColor: colors.input,
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  resend: { marginTop: 20, alignItems: 'center' },
});