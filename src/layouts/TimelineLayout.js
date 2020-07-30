/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import TaskCard from '../components/TaskCard';
import titleText from '../styles/titleText';

const TimelineLayout = ({ oData }) => {

  return (
      <FlatList
        ListHeaderComponent={() => <Text style={titleText}>Today</Text>}
        data={oData.data}
        initialNumToRender={5}
        renderItem={data => data.item.type === 'Task' ? <TaskCard
            title={data.item.values.title}
            sHour={data.item.values.sHour}
            eHour={data.item.values.eHour}
            cColor={data.item.values.cColor}
            templateContent={data.item.values.templateContent}
          /> :
            <Text style={styles.subTitle}>{data.item.values}</Text>
        }
        keyExtractor={item => item.key}
        refreshing={false}
        onRefresh={() => null}
        style={{ backgroundColor: 'white' }}
      />
  );
};

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'System',
    color: 'dimgrey',
    marginBottom: 20,
    marginHorizontal: 20,
  },
});

export default TimelineLayout;
