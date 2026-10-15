import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme';

type Props = {
  title: string;
  subtitle?: React.ReactNode;
  onBack?: () => void;
};

export default function Header({ title, subtitle, onBack }: Props) {
  return (
    <View>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: { marginBottom: 24, width: 32, height: 32, justifyContent: 'center' },
  backButtonText: { fontSize: 24, color: colors.text },
  title: { fontSize: 24, fontWeight: 'bold', color: colors.text, marginBottom: 8 },
  subtitle: { fontSize: 14, color: colors.muted, marginBottom: 32, lineHeight: 20 },
});