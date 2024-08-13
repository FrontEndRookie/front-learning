import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Button,
  LayoutAnimation,
  Image,
  Text,
} from 'react-native';
import icon_avatar from '../assets/images/default_avatar.png';
// 在index.js根文件中需要开启layout动画
export default () => {
  const [showView, setShowView] = useState(false);

  const [showRight, setShowRight] = useState(false);

  return (
    <View style={styles.root}>
      <Button
        title="按钮"
        onPress={() => {
          // 显示/隐藏动画
          // LayoutAnimation.configureNext(
          //     // LayoutAnimation.Presets.linear //线性预设
          //     // LayoutAnimation.Presets.spring //弹跳预设
          //     LayoutAnimation.Presets.easeInEaseOut, //平缓加速再减速预设
          //     () => {
          //         console.log('动画结束');
          //     },
          //     () => {
          //         console.log('动画异常');
          //     }
          // );
          // setShowView(true);

          // LayoutAnimation.configureNext(
          //     LayoutAnimation.Presets.spring
          // );
          // setShowRight(true);

          // LayoutAnimation.linear();
          LayoutAnimation.spring();
          // LayoutAnimation.easeInEaseOut();
          setShowRight(showRight == true ? false : true);
        }}
      />

      {/* {showView && <View style={styles.view} />} */}

      <View
        style={[
          styles.view,
          {flexDirection: showRight ? 'row-reverse' : 'row'},
        ]}>
        <Image style={styles.img} source={icon_avatar} />
        <Text style={styles.txt}>这是一行自我介绍的文本</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    width: '100%',
    height: 100,
    backgroundColor: '#F0F0F0',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  img: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  txt: {
    fontSize: 20,
    color: '#303030',
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});
