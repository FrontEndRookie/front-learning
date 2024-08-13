import React, {useRef} from 'react';
import {StyleSheet, View, Button, Animated} from 'react-native';

export default () => {
  const marginLeft = useRef(new Animated.Value(0)).current;
  console.log(marginLeft);
  return (
    <View style={styles.root}>
      <Button
        title="按钮"
        onPress={() => {
          Animated.timing(marginLeft, {
            toValue: 300, //结束的值
            duration: 500, //持续时间
            useNativeDriver: false, //是否使用原生动画驱动
          }).start();
        }}
      />

      <Animated.View style={[styles.view, {marginLeft: marginLeft}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  view: {
    width: 100,
    height: 100,
    backgroundColor: '#3050ff',
    marginTop: 20,
  },
});
