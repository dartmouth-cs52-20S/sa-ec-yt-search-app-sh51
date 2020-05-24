/* eslint-disable react/destructuring-assignment */
import { WebView } from 'react-native-webview';
import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  // Image,
  // Text,
  // FlatList,
  // TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgb(240,240,240)',
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 5,
    backgroundColor: 'black',
  },
  rightContainer: {
    flex: 1,
    padding: 5,
    height: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 12,
  },
  separator: {
    height: 1,
    backgroundColor: 'rgb(200,200,200)',
  },
  listView: {
    backgroundColor: 'rgb(240,240,240)',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class VideoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  // ---------- componentDidMount here! -----------//
  componentDidMount = () => {
    this.setState({ isLoading: false });
    console.log(this.props.route.params.video.id.videoId);
  }

  // ------------ put fetchData here! -------------//

  renderLoadingView() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#FF5722" />
      </View>
    );
  }

  render() {
    if (this.state.isLoading) {
      return this.renderLoadingView();
    }
    return (
      <WebView source={{ uri: `https://www.youtube.com/watch?v=${this.props.route.params.video.id.videoId}` }} />
    );
  }
}

export default VideoDetail;
