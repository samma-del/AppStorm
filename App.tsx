import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import LoginScreen from './src/screens/LoginScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import VerifyScreen from './src/screens/VerifyScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import CityScreen from './src/screens/CityScreen';
import { colors } from './src/theme';
import { ScreenName } from './src/types';

const TABS: { key: ScreenName; label: string }[] = [
  { key: 'login', label: 'Вход' },
  { key: 'forgot', label: 'Сброс' },
  { key: 'verify', label: 'Код' },
  { key: 'reset', label: 'Новый пароль' },
  { key: 'register', label: 'Регистрация' },
  { key: 'city', label: 'Город' },
];

export default function App() {
  const [screen, setScreen] = useState<ScreenName>('login');

  const renderScreen = () => {
    switch (screen) {
      case 'login':
        return <LoginScreen navigate={setScreen} />;
      case 'forgot':
        return <ForgotPasswordScreen navigate={setScreen} />;
      case 'verify':
        return <VerifyScreen navigate={setScreen} />;
      case 'reset':
        return <ResetPasswordScreen navigate={setScreen} />;
      case 'register':
        return <RegisterScreen navigate={setScreen} />;
      case 'city':
        return <CityScreen navigate={setScreen} />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topNavigation}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {TABS.map((tab) => (
            <TouchableOpacity
              key={tab.key}
              style={[styles.navBtn, screen === tab.key && styles.navBtnActive]}
              onPress={() => setScreen(tab.key)}
            >
              <Text style={[styles.navBtnText, screen === tab.key && styles.navBtnTextActive]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.container}>{renderScreen()}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  topNavigation: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  navBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    backgroundColor: '#E5E5E5',
  },
  navBtnActive: { backgroundColor: colors.primary },
  navBtnText: { fontSize: 12, color: '#333' },
  navBtnTextActive: { color: '#FFF', fontWeight: 'bold' },
  container: { paddingHorizontal: 24, paddingTop: 20, paddingBottom: 40 },
});