/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'; 

var MOCKED_MOVIES_DATA = [ 
    {title: 'Title',
     year: '2015',
      posters: {
        thumbnail: 'http://i.imgur.com/UePbdph.jpg' 
    }};
];

class ToDo extends Component {
  render() {
      var movie = MOCKED_MOVIES_DATA[0];
    return (
        <View style={styles.container}>
            <Text>{movie.title}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ToDo', () => ToDo);
