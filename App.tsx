import React, { useState } from 'react';
import LoginScreen from './src/components/login';
import ForgotPassword from './src/components/ForgetPassword';
import VerifyScreen from './src/components/VerifyCode';
import SelectCityScreen from './src/components/SelectCity';
import ResetPasswordScreen from './src/components/ResetPassword';
import RegisterScreen from './src/components/Register';

type Screen =
  | 'login'
  | 'forgot'
  | 'verify'
  | 'reset'
  | 'register'
  | 'city';

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');

  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  if (screen === 'login') {
    return (
      <LoginScreen
        onForgot={() => {
          console.log('Нажата кнопка: Забыли пароль?');
          setScreen('forgot');
        }}
        onRegister={() => {
          console.log('Нажата кнопка: Зарегистрироваться');
          setScreen('register');
        }}
        onLogin={(phone, password) => {
          console.log('Нажата кнопка: Войти');
          console.log('Телефон:', phone);
          console.log('Пароль:', password);
        }}
      />
    );
  }

  if (screen === 'forgot') {
    return (
      <ForgotPassword
        onBack={() => {
          console.log('Нажата кнопка: Назад');
          setScreen('login');
        }}
        onContinue={(phoneNumber) => {
          console.log('Телефон:', phoneNumber);
          setPhone(phoneNumber);
          setScreen('verify');
        }}
      />
    );
  }

  if (screen === 'verify') {
    return (
      <VerifyScreen
        phone={phone}
        onBack={() => {
          console.log('Нажата кнопка: Назад');
          setScreen('forgot');
        }}
        onVerify={(enteredCode) => {
          console.log('Код:', enteredCode);
          setCode(enteredCode);
          setScreen('reset');
        }}
      />
    );
  }

  if (screen === 'reset') {
    return (
      <ResetPasswordScreen
        onBack={() => {
          console.log('Нажата кнопка: Назад');
          setScreen('verify');
        }}
        onReset={(password) => {
          console.log('Нажата кнопка: Сбросить пароль');
          console.log('Новый пароль установлен');
          setScreen('login');
        }}
      />
    );
  }

  if (screen === 'register') {
    return (
      <RegisterScreen
        onBack={() => {
          console.log('Нажата кнопка: Назад');
          setScreen('login');
        }}
        onRegister={() => {
          console.log('Нажата кнопка: Зарегистрироваться');
          setScreen('city');
        }}
      />
    );
  }

  if (screen === 'city') {
    return (
      <SelectCityScreen
        onBack={() => {
          console.log('Нажата кнопка: Назад');
          setScreen('register');
        }}
        onFinish={(city) => {
          console.log('Выбран город:', city);
          console.log('Регистрация завершена!');
          setScreen('login');
        }}
      />
    );
  }

  return null;
}