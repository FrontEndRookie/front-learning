import React, {useRef, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, TextInput} from 'react-native';

export default () => {
  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      // inputRef.current.blur();
    }, 2000);
  }, []);

  return (
    <View style={styles.root}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        // autoFocus={true} 自动聚焦
        blurOnSubmit={true} // 提交失焦
        caretHidden={false} // 聚焦时 光标是否隐藏
        // defaultValue="默认内容" //初始内容
        editable={true} //是否可编辑
        keyboardType="number-pad"
        // 键盘类型 常用：number-pad-数字键盘,decimal-pad-数字键盘,numeric-数字键盘
        // default:默认 email-addres-邮箱键盘 phone-pad -拨号键盘
        returnKeyType="search" // 键盘右下角确认按钮类型 done-对勾 go-向右箭头 next-向右箭头（最右有一竖） search-放大镜 send-纸飞机图标
        // maxLength={11} //最大输入长度
        // multiline={true} //允许输入多行 默认垂直居中 需要设置textalignvertical ：top
        // numberOfLines={2} // 输入多行时显示的行数
        onFocus={() => {}}
        onBlur={() => {}}
        onChange={event => {
          console.log(event.nativeEvent); //对象事件
        }}
        onChangeText={text => {
          console.log(text); //输入文本
        }}
        // selection={{start: 0, end: 3}}
        selectionColor="red" //选中文字背景
        selectTextOnFocus={true} //聚焦选中输入框所有内容
        secureTextEntry={true} //输入内容显示成点 不能和多行输入一起使用
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F0F0',
  },
  input: {
    width: '100%',
    height: 56,
    backgroundColor: '#D0D0D0',
    fontSize: 24,
    color: '#333333',
    fontWeight: 'bold',
  },
});
