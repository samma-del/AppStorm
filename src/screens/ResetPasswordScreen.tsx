import React from 'react';
import Header from '../components/Header';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { ScreenProps } from '../types';

export default function ResetPasswordScreen({ navigate }: ScreenProps) {
  return (
    <>
      <Header
        title="Сбросить пароль"
        subtitle="Не менее 8 символов, с прописными и строчными буквами"
        onBack={() => navigate('verify')}
      />
      <InputField icon="🔒" rightIcon="👁" placeholder="Пароль" secureTextEntry />
      <InputField icon="🔒" rightIcon="👁" placeholder="Повторить пароль" secureTextEntry />
      <PrimaryButton title="Продолжить" onPress={() => navigate('login')} />
    </>
  );
}