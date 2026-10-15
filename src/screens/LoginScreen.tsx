import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../theme';
import { ScreenProps } from '../types';

export default function LoginScreen({ navigate }: ScreenProps) {
  return (
    <>
      <Header title="Привет, с возвращением!" subtitle="Войдите в свой аккаунт." />

      <InputField icon="📞" placeholder="Номер телефона" keyboardType="phone-pad" />
      <InputField icon="🔒" rightIcon="👁" placeholder="Пароль" secureTextEntry />

      <TouchableOpacity style={styles.forgot} onPress={() => navigate('forgot')}>
        <Text style={styles.link}>Забыли пароль?</Text>
      </TouchableOpacity>

      <PrimaryButton title="Войти" />

      <View style={styles.footerRow}>
        <Text style={styles.footerText}>У вас нет аккаунта? </Text>
        <TouchableOpacity onPress={() => navigate('register')}>
          <Text style={styles.link}>Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  forgot: { alignSelf: 'flex-end', marginBottom: 24 },
  link: { color: colors.primary, fontSize: 13, fontWeight: '600' },
  footerRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  footerText: { color: colors.muted, fontSize: 13 },
});