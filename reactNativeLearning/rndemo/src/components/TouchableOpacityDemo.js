import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default () => {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5} // 点击时的不透明度 默认0.5
        onPress={() => {
          //点击事件
          console.log('onPress ...');
        }}
        onLongPress={() => {
          //长按事件
          console.log('onLongPress ...');
        }}
        delayLongPress={1000} //指定长按多久生效
        onPressIn={() => {
          //按下事件
          console.log('onPressIn ...');
        }}
        onPressOut={() => {
          //松开事件
          console.log('onPressOut ...');
        }}>
        {/* 点击事件顺序 onPressIn - onPressOut - onPress
         长按事件onPressIn-onLongPress - onPressOut*/}
        <Text style={styles.txt}>按钮</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F0F0',
  },
  button: {
    width: 300,
    height: 65,
    backgroundColor: '#2030FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
