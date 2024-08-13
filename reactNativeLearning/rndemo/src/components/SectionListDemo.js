import React, {useRef, useEffect, useSatte, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SectionList,
  RefreshControl,
  StatusBar,
} from 'react-native';

import {SectionData} from '../constants/Data';

export default () => {
  const sectionListRef = useRef(null);

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // sectionListRef.current.scrollToLocation({ //滚动到指定分组的指定位置
      //     sectionIndex: 1,
      //     itemIndex: 4,
      //     viewPosition: 0,
      //     animated: true,
      // });
    }, 2000);
  }, []);

  const renderItem = ({item, index, section}) => {
    return <Text style={styles.txt}>{item}</Text>;
  };

  const ListHeader = (
    <View style={styles.header}>
      <Text style={styles.extraTxt}>列表头部</Text>
    </View>
  );

  const ListFooter = (
    <View style={[styles.header, styles.footer]}>
      <Text style={styles.extraTxt}>列表尾部</Text>
    </View>
  );

  const renderSectionHeader = ({section}) => {
    return <Text style={styles.sectionHeaderTxt}>{section.type}</Text>;
  };
  // statusBar本身不是一个元素，只是用于设置状态栏的属性
  return (
    <View style={styles.root}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        animated={true}
        translucent={true} //z状态栏与页面重叠 （
        hidden={false} //隐藏状态栏
      />
      <SectionList
        ref={sectionListRef}
        style={styles.sectionList}
        sections={SectionData}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item}-${index}`}
        contentContainerStyle={styles.containerStyle}
        showsVerticalScrollIndicator={false}
        onScroll={event => {
          // console.log(event.nativeEvent.contentOffset.y);
        }}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        renderSectionHeader={renderSectionHeader} //分组标题行元素
        stickySectionHeadersEnabled={true} //分组标题行 吸顶
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        refreshControl={
          //下拉刷新
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              console.log('onRefresh ...');
              setRefreshing(true);
              // do request new data
              setTimeout(() => {
                setRefreshing(false);
              }, 1000);
            }}
          />
        }
        onEndReached={() => {
          //滚动触底
          console.log('onEndReached ...');
          // do request next page data
        }}
        onEndReachedThreshold={0.2} //触底条件的阈值 0-1
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  sectionList: {
    width: '100%',
    height: '100%',
  },
  txt: {
    width: '100%',
    height: 56,
    fontSize: 20,
    color: '#333333',
    textAlignVertical: 'center',
    paddingLeft: 16,
  },
  containerStyle: {
    // paddingHorizontal: 16,
    // paddingTop: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    width: '100%',
    height: 68,
    paddingTop: 30,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: '#ff000030',
  },
  extraTxt: {
    fontSize: 20,
    color: '#666666',
    textAlignVertical: 'center',
  },
  sectionHeaderTxt: {
    width: '100%',
    height: 36,
    backgroundColor: '#DDDDDD',
    textAlignVertical: 'center',
    paddingLeft: 16,
    fontSize: 20,
    color: '#333333',
    fontWeight: 'bold',
  },
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: '#D0D0D0',
  },
});
