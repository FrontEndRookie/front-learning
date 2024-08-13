import React, {useRef} from 'react';
import {StyleSheet, View, Button, Animated} from 'react-native';

export default () => {
  const scale = useRef(new Animated.Value(1)).current;
  const marginLeft = useRef(new Animated.Value(0)).current;
  const marginTop = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.root}>
      <Button
        title="按钮"
        onPress={() => {
          const moveX = Animated.timing(marginLeft, {
            toValue: 200,
            duration: 500,
            useNativeDriver: false,
          });
          const moveY = Animated.timing(marginTop, {
            toValue: 300,
            duration: 500,
            useNativeDriver: false,
          });
          const scaleAnim = Animated.timing(scale, {
            toValue: 1.5,
            duration: 500,
            useNativeDriver: false,
          });
          // 组合动画
          // Animated.parallel([moveX, moveY, scaleAnim]).start(); //并发 同时发生
          // Animated.sequence([moveX, moveY, scaleAnim]).start(); //序列 一个一个执行
          // Animated.stagger(1500, [moveX, moveY, scaleAnim]).start(); //指定间隔时间 有序的执行
          Animated.sequence([
            //中间穿插 停顿时间 对比stagger 时间可以灵活设置
            moveX,
            Animated.delay(1000),
            moveY,
            Animated.delay(500),
            scaleAnim,
          ]).start();
        }}
      />

      <Animated.View
        style={[
          styles.view,
          {
            transform: [
              {scale: scale},
              {translateX: marginLeft},
              {translateY: marginTop},
            ],
          },
        ]}
      />
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
