import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { colors } from '../theme';

type Props = TextInputProps & {
  icon: string;
  rightIcon?: string;
};

export default function InputField({ icon, rightIcon, ...inputProps }: Props) {
  return (
    <View style={fieldStyles.container}>
      <Text style={fieldStyles.icon}>{icon}</Text>
      <TextInput
        style={fieldStyles.input}
        placeholderTextColor={colors.placeholder}
        {...inputProps}
      />
      {rightIcon ? <Text style={fieldStyles.rightIcon}>{rightIcon}</Text> : null}
    </View>
  );
}

export const fieldStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.input,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
    marginBottom: 16,
  },
  icon: { marginRight: 12, fontSize: 16 },
  input: { flex: 1, fontSize: 15, color: colors.text },
  rightIcon: { fontSize: 16, color: colors.placeholder },
});