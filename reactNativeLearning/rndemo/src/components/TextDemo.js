import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

//numberOfLines 控制文本行数 = overflow:hidden //
//ellipsizeMode 控制文本溢出显示方式  tail/clip/middle/head
//selectable 是否可选中 默认false
//selectionColor 选中文本颜色
//onPress 点击事件
//onLongPress 长按事件
//allowFontScaling 跟随系统字号 （系统设置中显示的字体大小）
export default () => {
  return (
    <View style={styles.root}>
      <Text
        style={styles.txt}
        numberOfLines={1}
        ellipsizeMode="head"
        selectable={true}
        selectionColor="pink"
        onPress={() => {
          console.log('onPress');
        }}
        onLongPress={() => {
          console.log('onLongPress');
        }}>
        hide on bush <Text style={styles.innerText}>flight</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F0F0',
  },
  txt: {
    fontSize: 40,
    color: '#3025ff',
    textShadowColor: '#A0A0A0',
    textShadowOffset: {width: 2, height: 4},
    textShadowRadius: 6,
    height: 200,
    width: 400,
    backgroundColor: 'orange',
    textAlign: 'right', //水平居中
    textAlignVertical: 'center', //垂直居中
    textDecorationLine: 'none', //文字装饰 line-through/underline/none 可以两个都写
    textDecorationStyle: 'dashed', // 安卓中不生效
  },
  innerText: {
    color: 'pink',
    // padding: 40, 内层text无法设置padding/margin
  },
});
