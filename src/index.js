import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyCdNAXXNdENPnkLimHg30OSmzHufzYhzto";


//Create a new component. This component should produce some HTML

//Take this component's generated HTML and put it on the page (in the DOM)

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      videos: [],
      selectedVideo: null
      };

      this.videoSearch('balinese kittens');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({
          // same as this.setState ({videos: videos });
          videos: videos,
          selectedVideo: videos[0]
        });
      });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
