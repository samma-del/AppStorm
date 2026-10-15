import React from 'react';
import Header from '../components/Header';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { ScreenProps } from '../types';

export default function ForgotPasswordScreen({ navigate }: ScreenProps) {
  return (
    <>
      <Header
        title="Восстановление пароля"
        subtitle="Введите свой номер телефона, чтобы восстановить пароль"
        onBack={() => navigate('login')}
      />
      <InputField icon="📞" defaultValue="+7 (700) 555 77 55" keyboardType="phone-pad" />
      <PrimaryButton title="Продолжить" onPress={() => navigate('verify')} />
    </>
  );
}