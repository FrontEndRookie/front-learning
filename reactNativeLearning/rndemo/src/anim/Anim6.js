import React, {useRef} from 'react';
import {StyleSheet, View, Button, Animated, Easing} from 'react-native';

export default () => {
  const marginLeft = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.root}>
      <Button
        title="按钮"
        onPress={() => {
          Animated.timing(marginLeft, {
            toValue: 300,
            duration: 500,
            //内置动画
            // easing: Easing.back(3), //起始回拉幅度
            // easing: Easing.ease, //平缓动画
            // easing: Easing.bounce, //到终点时往回弹跳 终点是最远距离不会超过终点
            // easing: Easing.elastic(3), //会超过终点 参数是弹的次数
            //标准函数  加速效果
            // easing: Easing.linear, //1次方
            // easing: Easing.quad, //2次方
            // easing: Easing.cubic, //3次方
            //补充函数
            // easing: Easing.bezier(0.7, 0.2, 0.42, 0.82), //贝塞尔曲线
            // easing: Easing.circle, //环形
            // easing: Easing.sin, //正弦
            // easing: Easing.exp, //指数
            //叠加函数  所有组合效果函数 https://easings.net/#
            // easing: Easing.in(Easing.bounce), //in加速 + 弹跳
            // easing: Easing.out(Easing.exp),  //out减速 + 指数
            easing: Easing.inOut(Easing.elastic(3)), //in加速 + out减速 + 弹跳
            useNativeDriver: false,
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
