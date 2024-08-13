import React, {useRef} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

export default () => {
  const scrollViewRef = useRef(null);

  const buildListView = () => {
    const array = [];
    for (let i = 0; i < 20; i++) {
      array.push(
        <Text key={`item-${i}`} style={styles.txt}>{`List item ${
          i + 1
        }`}</Text>,
      );
    }
    return array;
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.root}
      contentContainerStyle={styles.containerStyle}
      keyboardDismissMode="on-drag" //none/on-drag/interactive（ios） 滚动时键盘是否消失
      keyboardShouldPersistTaps="never" //never/handled/always 当点击屏幕空白区域时，是否收起键盘
      //handled 点击其他点击事件时直接触发，并收起键盘 never 点击其他点击事件时，不触发点击事件，并收起键盘
      onMomentumScrollBegin={() => {
        // console.log('onMomentumScrollBegin 滚动开始 ...');
      }}
      onMomentumScrollEnd={() => {
        // console.log('onMomentumScrollEnd  滚动停止...');
      }}
      onScroll={event => {
        console.log(event.nativeEvent.contentOffset.y);
      }}
      scrollEventThrottle={16} //节流，每16毫秒触发一次
      overScrollMode="never" //超出滚动 never/always  always到顶或底还能有拖拽效果
      //pagingEnabled={true} // 一页一页的滚动
      scrollEnabled={true} // 是否可以滚动
      contentOffset={{y: 100}} //初始滚动位置
      showsVerticalScrollIndicator={false} //是否显示垂直滚动条
      //showsHorizontalScrollIndicator={false} //是否显示水平滚动条
      // 希望吸顶的元素
      stickyHeaderIndices={[1]}>
      <TextInput style={styles.input} />
      <Button
        title="按钮"
        onPress={() => {
          // scrollViewRef.current.scrollTo({y: 500, animated: true}); //滚动到 xx位置
          scrollViewRef.current.scrollToEnd({animated: true}); //滚动到底
        }}
      />
      {buildListView()}
    </ScrollView>
    // <ScrollView style={{ width: '100%', height: 200 }} horizontal={true} pagingEnabled={true}>
    //     <View style={{ width, height: 200, backgroundColor: 'red' }} />
    //     <View style={{ width, height: 200, backgroundColor: 'blue' }} />
    //     <View style={{ width, height: 200, backgroundColor: 'green' }} />
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  txt: {
    width: '100%',
    height: 56,
    textAlignVertical: 'center',
    fontSize: 24,
    color: 'black',
  },
  containerStyle: {
    paddingHorizontal: 16, //水平间距
    backgroundColor: '#E0E0E0',
    paddingTop: 20,
  },
  input: {
    width: '100%',
    height: 60,
    backgroundColor: '#ff000050',
  },
});
