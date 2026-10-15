import React from 'react';
import { Text, View } from 'react-native';
import Header from '../components/Header';
import { fieldStyles } from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../theme';
import { ScreenProps } from '../types';

export default function CityScreen({ navigate }: ScreenProps) {
  return (
    <>
      <Header
        title="Выберите город"
        subtitle="Заведения которые будут показываться вам, будут зависеть от вашего города."
        onBack={() => navigate('register')}
      />

      <View style={[fieldStyles.container, { justifyContent: 'space-between' }]}>
        <Text style={{ color: colors.placeholder }}>Выбрать город</Text>
        <Text style={{ color: colors.primary }}>∨</Text>
      </View>

      <PrimaryButton
        title="Продолжить"
        style={{ marginTop: 40 }}
        onPress={() => navigate('login')}
      />
    </>
  );
}