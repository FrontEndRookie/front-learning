import React, {useState} from 'react';
import {StyleSheet, View, Switch} from 'react-native';

export default () => {
  const [switchValue, setSwitchValue] = useState(true);

  return (
    <View style={styles.root}>
      <Switch
        value={switchValue}
        onValueChange={value => {
          setSwitchValue(value);
        }}
        disabled={false}
        trackColor={{true: 'red', false: '#808080'}} //轨道背景颜色
        thumbColor={switchValue ? '#2030ff' : '#303030'} //圆钮颜色
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
});
