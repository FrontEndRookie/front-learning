import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Image} from 'react-native';

import avatar from '../assets/images/avatar.png';
import {imageUri} from '../constants/Uri';

import icon_setting from '../assets/images/icon_setting.png';

export default () => {
  const imgRef = useRef(null);

  useEffect(() => {
    // 获取图片尺寸
    // Image.getSize(
    //   'xxx.xx.jpg',
    //   (width, height) => {
    //     console.log(`width=${width}, height=${height}`);
    //   },
    //   error => {
    //     console.log(error);
    //   },
    // );
    // 图片预加载 后续访问会从磁盘读取提升性能
    Image.prefetch(imageUri)
      .then(data => {
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <View style={styles.root}>
      <Image
        style={styles.img1}
        source={avatar}
        blurRadius={5}
        defaultSource={avatar}
        fadeDuration={1000}
        onLoad={event => {
          console.log('onload', event.nativeEvent);
        }}
        onError={() => {
          console.log('onerror');
        }}
        onLoadStart={() => {
          console.log('loadStart');
        }}
        onLoadEnd={() => {
          console.log('loadEnd');
        }}
      />
      {/*blurRadius模糊图片*/}
      {/*defaultSource 占位图片 用本地资源*/}
      {/*fadeDuration 渐变显示时间 加载网络图片是需要时间的，加载完成后可设置过渡显示*/}
      <Image
        ref={imgRef}
        style={styles.img}
        source={{uri: imageUri}}
        defaultSource={avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
  },
  img1: {
    width: 240,
    height: 240,
    resizeMode: 'cover',
    //contain 显示全部图片，不变形
    //center 显示图片居中，不变形
    //cover 撑满容器，图片显示部分
    //stretch 撑满容器 拉伸图片，图片变形
    //repeat xy在容器空白部分进行重复
    backgroundColor: 'pink',
  },
  img: {
    width: 240,
    height: 240,
    // tintColor: 'blue', //图标着色  png图片支持
  },
});
