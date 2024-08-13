import React, {useRef} from 'react';
import {StyleSheet, View, Button, Animated} from 'react-native';

export default () => {
  const marginLeft = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.root}>
      <Button
        title="按钮"
        onPress={() => {
          //弹性动画函数
          Animated.spring(marginLeft, {
            toValue: 200,
            useNativeDriver: false,
            //总共三组配置，根据需求选择一组
            // 第一组配置
            bounciness: 25, //弹性， 到目标值后进行的回弹，数字越大弹性越强
            speed: 20, //速度，动画的快慢，数字越大越快

            // 第二组配置
            // tension: 40,  //张力，数字越大速度越快
            // friction: 7, //摩擦力 越小弹性越强

            // 第三组配置
            // stiffness: 100, //刚度 越大越弹
            // damping: 10, //阻尼 越小越弹
            // mass: 1, //质量 越大惯性越大，越难停下
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
