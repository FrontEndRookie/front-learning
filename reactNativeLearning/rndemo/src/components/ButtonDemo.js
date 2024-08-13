import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
// 使用简单但样式固定无法修改 button上加style不生效
export default () => {
  const onPress = () => {};

  return (
    <View style={styles.root}>
      <Button title="按 钮" color={'green'} onPress={onPress} disabled={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
});
