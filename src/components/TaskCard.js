/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DetailsButton from './DetailsButton';
import defaultCard from '../styles/defaultCard';
import cTypeIcon from '../styles/cTypeIcon';

const TaskCard = ({ title, sHour, eHour, cColor, templateContent }) => {
  const [active, setActive] = useState(false);

  return (
    <View style={defaultCard}>
      <View style={styles.topContainer}>
        <Text style={styles.dateText}>{sHour} - {eHour}</Text>
        <View style={cTypeIcon(cColor).container} />
      </View>
      <View>
        <Text style={styles.titleText}>{title}</Text>
        {active && templateContent ? getTemplateContent(templateContent) : null}
        <View style={{ marginTop: 3 }}>
          <TouchableOpacity
            activeOpacity={templateContent ? 0.35 : 1}
            onPress={() => templateContent ? setActive(!active) : null}
          >
            <DetailsButton active={active} data={templateContent ? true : false}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const getTemplateContent = templateContent => {
  const templateContentLength = templateContent.length;
  var templateData = [], i = 0;

  while ( i < templateContentLength) {
    switch (templateContent[i].type) {
      case 'textBox':
        templateData.push(
          <View key={templateContent[i].key} style={{ marginTop: 10, paddingTop: 10, borderTopWidth: 1, borderTopColor: 'lightgrey' }}>
            <Text style={{ fontFamily: 'System', fontSize: 15, fontWeight: '500', marginBottom: 3 }}>{templateContent[i].title}:</Text>
            <Text style={{ fontFamily: 'System', color: '#636366' }}>{templateContent[i].content}</Text>
          </View>
        );
        i++;
        break;
      default:
        return null;
    }
  }

  return templateData;
};



const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 13,
    color: 'grey',
    fontWeight: 'bold',
  },
  titleText: {
    marginTop: 2,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TaskCard;
