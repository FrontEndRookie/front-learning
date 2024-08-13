import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Button,
  Alert,
  Text,
  Dimensions,
  useWindowDimensions,
  Platform,
  Linking,
  PixelRatio,
  BackHandler,
  PermissionsAndroid,
  Vibration,
  ToastAndroid,
  Keyboard,
  TextInput,
} from 'react-native';

import {useBackHandler} from '@react-native-community/hooks';

export default () => {
  // const { width, height, scale, fontScale } = useWindowDimensions(); //获取屏幕信息
  // console.log(`width=${width}, height=${height}`);
  // console.log(`scale=${scale}, fontScale=${fontScale}`);

  useBackHandler(() => {
    //监听物理返回 针对安卓
    //社区的hook 相当于底下useEffect中进行指定操作（addeventlistener/removeeventlistener）的封装
    return true;
  });

  useEffect(() => {
    const subcription = Dimensions.addEventListener(
      'change',
      (window, screen) => {
        console.log(window);
        console.log(screen);
      },
    );

    // BackHandler.addEventListener('hardwareBackPress', backForAndroid) //监听物理返回 针对安卓

    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardShow,
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardHide,
    );

    return () => {
      subcription.remove();
      showSubscription.remove();
      hideSubscription.remove();
      // BackHandler.removeEventListener('hardwareBackPress', backForAndroid);
    };
  }, []);

  const onKeyboardShow = () => {
    console.log('键盘出现');
  };

  const onKeyboardHide = () => {
    console.log('键盘隐藏');
  };

  // const backForAndroid = () => {
  //     return false;
  // }

  const onPress = () => {
    // alert('这是一条提示信息'); //通常使用基本类型
    // alert(123);
    // alert(false);

    // rn alert确认框
    // const buttons = [
    //     {text: '取消', onPress: () => console.log('取消')},
    //     {text: '确定', onPress: () => console.log('确定')},
    // ];
    // Alert.alert('这是标题', '这是一条提示信息', buttons);

    //console warn和error在模拟器底部有提示，不同于web只有f12调试里才能看见
    // console.log('这是普通的日志输出');
    // console.info('信息日志输出');
    // console.debug('调试日志输出');
    // console.warn('警告日志输出');
    // console.error('错误日志输出');

    // %d 数字占位 %s 字符串占位 %o 对象占位
    // console.log('我是个人开发者%s，我学习RN%d年半了', '张三', 2);
    // const obj = {name: '张三', age: 12};
    // console.log('我是一个对象:%o', obj);
    // %c 指定样式
    // console.log('%c这行日志红色文字，字号大', 'color:red; font-size:x-large');
    // console.log('%c这行日志蓝色文字，字号中', 'color:blue; font-size:x-medium');
    // console.log('%c这行日志绿色文字，字号小', 'color:green; font-size:x-small');

    //输出组件树
    // const viewLayout = (
    //     <View style={{ flexDirection: 'column' }}>
    //         <Text style={{ fontSize: 20, color: 'red' }} >
    //             文字显示
    //         </Text>
    //     </View>
    // );
    // console.log(viewLayout);

    //表格形式输出
    // const users = [
    //     {name: '张三', age: 12, hobby: '唱歌'},
    //     {name: '李四', age: 15, hobby: '跳舞'},
    //     {name: '王武', age: 18, hobby: '打篮球'},
    // ];
    // console.table(users);

    //分组形式输出
    // console.group();
    // console.log('第1行日志');
    // console.log('第2行日志');
    // console.log('第3行日志');
    //     console.group();
    //     console.log('二级分组第1行日志');
    //     console.log('二级分组第2行日志');
    //     console.log('二级分组第3行日志');
    //     console.groupEnd();
    // console.groupEnd();

    //获取屏幕信息
    // const { width, height, scale, fontScale } = Dimensions.get('window');
    // console.log(`width=${width}, height=${height}`);

    //获取平台属性
    // console.log(Platform.OS); //区分安卓和ios
    // console.log(Platform.Version); //获取版本号
    // console.log(Platform.constants); //获取设备的各种参数 （使用少）
    // console.log(Platform.isPad); // 针对ios创建的属性  安卓设备返回undefined
    // console.log(Platform.isTV);

    //平台选择
    // const style = Platform.select({
    //     android: {
    //         marginTop: 20,
    //     },
    //     ios: {
    //         marginTop: 0,
    //     },
    //     default: {
    //         marginTop: 10,
    //     },
    // });
    // console.log(style);

    // style操作
    // const s1 = {
    //     fontSize: 18,
    // };
    // const s2 = {
    //     fontSize: 20,
    //     color: 'red',
    // };
    // const composeStyle = StyleSheet.compose(s1, s2);
    // console.log(composeStyle); //返回的数组

    // const flattenStyle = StyleSheet.flatten([s1, s2]);
    // console.log(flattenStyle); //合并对象，重复样式则覆盖

    // console.log(StyleSheet.absoluteFill); //铺满全屏的绝对定位布局  语法糖 = （position：absolute left-bottom：0）

    // console.log(StyleSheet.hairlineWidth); // 获取最小尺寸
    // console.log(1 / Dimensions.get('screen').scale); //等于hairlineWidth

    // 链接操作
    // if (Linking.canOpenURL('https://www.baidu.com/')) { //判断是否可以打开
    //   Linking.openURL('https://www.baidu.com/');//打开浏览器
    // }
    // Linking.openURL('geo:37.2122, 12.222'); //打开地图
    // Linking.openURL('tel:10086'); //打电话
    // Linking.openURL('smsto:10086'); //发送短信
    // Linking.openURL('mailto:10086@qq.com'); //发送邮件
    // Linking.openURL('dagongjue://demo?name=李四'); //跳转应用
    // Linking.openSettings(); //跳转到当前应用的设置页面

    // if (Platform.OS === 'android') { // 针对安卓
    //     Linking.sendIntent('com.dagongjue.demo.test', [{key: 'name', value: '王武'}]); //安卓隐式跳转
    // }
    // console.log(Linking.getInitialURL()); //获取原始的url （应用需要是通过url打开的才能有值）

    // console.log(PixelRatio.get()); //获取像素比  如输出2- 宽度设为1 实际则是2个物理像素
    // console.log(PixelRatio.getFontScale()); //获取字体缩放比
    // console.log(
    //     PixelRatio.getPixelSizeForLayoutSize(200)  //将布局尺寸转换为像素尺寸
    // );

    // BackHandler.exitApp(); //直接退出应用

    //权限问题 针对安卓
    // const needPermission =
    //   PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE; //要检查的权限
    // PermissionsAndroid.check(needPermission).then(result => {
    //   if (!result) {
    //     //如果无权限则申请权限
    //     PermissionsAndroid.request(needPermission).then(status => {
    //       console.log(status);
    //       if (status === 'granted') {
    //         //获得
    //       } else if (status === 'denied') {
    //         //拒绝
    //       }
    //     });
    //   }
    // });

    // PermissionsAndroid.requestMultiple([ //多个申请
    //     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //     PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    // ]);

    //震动交互
    // Vibration.vibrate(); //发起震动 默认400ms
    // Vibration.vibrate(1000);//just android 设置单次震动时间
    // Vibration.cancel(); //取消震动
    // android 震动时间模式
    // Vibration.vibrate([100, 500, 200, 500]); //先等100ms 震动500ms 再等200ms 震动500ms
    // IOS 震动时间模式
    // Vibration.vibrate([100, 200, 300, 400]);//100-400都是指定的停顿的时间，无法修改震动时间，ios震动时间是400ms无法修改
    // Vibration.vibrate([100, 200, 300, 400], true); //第二个参数是重复该震动模式

    //提示弹窗，本身在原生中被弱化，定位参数不生效，不建议使用
    // ToastAndroid.show('这是一个提示', ToastAndroid.SHORT);
    // ToastAndroid.show('这是一个提示', ToastAndroid.LONG);
    // ToastAndroid.showWithGravity(
    //     '这是一个提示',
    //     ToastAndroid.LONG,
    //     ToastAndroid.TOP
    // );
    // ToastAndroid.showWithGravity(
    //     '这是一个提示',
    //     ToastAndroid.LONG,
    //     ToastAndroid.TOP,
    //     100, 200,
    // );

    Keyboard.dismiss();
  };

  return (
    <View style={styles.root}>
      <Button title="按钮" onPress={onPress} />

      {/* <View style={styles.view}>
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
            </View> */}

      <View
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {
            width: 100,
            height: 100,
            backgroundColor: '#3050ff',
            marginTop: 60,
            marginLeft: 60,
          },
          {
            transform: [
              // {translateX: 200}
              // {translateY: 150}
              {scale: 1.5},
              // {scaleX: 1.5},
              // {scaleY: 1.5}
              {rotateX: '45deg'},
              // {rotateY: '45deg'},
              {rotateZ: '45deg'},
              // {rotate: '45deg'},
            ],
          },
        ]}
      />

      <TextInput
        style={{
          width: '100%',
          height: 56,
          backgroundColor: '#E0E0E0',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    ...Platform.select({
      android: {
        paddingTop: 20,
      },
      ios: {
        paddingTop: 0,
      },
      default: {
        paddingTop: 10,
      },
    }),
  },
  view: {
    width: '100%',
    backgroundColor: 'red',
  },
  subView: {
    width: '100%',
    backgroundColor: 'green',
    height: PixelRatio.roundToNearestPixel(32.1), //获取就近值，防止出现像素被跳过的情况 ，比如32.1会被渲染成32 会根据屏幕的像素比来决定
  },
});
