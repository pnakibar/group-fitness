import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import TopBar from './TopBar';
import SameActivitiesList from './SameActivitiesList';
const moment = require('moment');

const MAX_TEXT_SIZE = 160;
const makeTextFit = (text) => {
  const t = text.slice(0, MAX_TEXT_SIZE)
  if (text.length > MAX_TEXT_SIZE) return t + '...'
  return t;
};
const ReadMore = (text) => (
  <TouchableHighlight onPress={() => console.log('pressed!')}>
    <Text style={styles.readMoreButton}>READ MORE</Text>
  </TouchableHighlight>
);
const ActivityScreen = ({ title }) => (
  <View style={styles.container}>
    <View style={styles.topbarContainer}>
      <TopBar title={example.courseName} />
    </View>
    <View style={styles.descriptionContainer}>
      <View style={styles.descriptionTextContainer}>
        <Text style={styles.description}>
          {makeTextFit(example.description)}
        </Text>
      </View>
      <View style={styles.readMoreContainer}>
          {example.description.length > 270 ? (<ReadMore />) : undefined}
      </View>
    </View>
    <View style={styles.monthContainer}>
      <Text style={styles.month}>
        {moment(example.date).format('MMMM Y').toUpperCase()}
      </Text>
    </View>
    <View style={styles.listContainer}>
      <SameActivitiesList />
    </View>
  </View>
)

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  topbarContainer: {
    flex: 0.15,
  },
  descriptionContainer: {
    flex: 0.25,
    flexDirection: 'column',
    margin: 10,
  },
  descriptionTextContainer: {
    flex: 0.7,
  },
  readMoreContainer : {
    flex: 0.3,
    alignSelf: "stretch",
    justifyContent:'center',
  },
  description: {
    fontSize: 20,
    textAlign: 'justify'
  },
  readMoreButton: {
    color: '#CC0814',
    fontWeight: 'bold',
    fontSize: 20,
  },
  monthContainer: {
    flex: 0.1,
    alignSelf: "stretch",
    alignItems: 'center',
    justifyContent:'center',
  },
  month: {
    color: '#5A5A5A',
    fontWeight: 'bold',
    fontSize: 26,
  },
  listContainer: {
    flex: 0.5,
    marginRight: 12,
    marginLeft: 12,
  },
};
export default ActivityScreen;
const example = {
	"date": "2016-06-21T01:38:13-07:00",
	"instructor": "Gail",
	"description": "Ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a",
	"place": "Parla",
	"courseName": "Insanity 100"
}
