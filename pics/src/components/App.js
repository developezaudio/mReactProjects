import React from 'react';
import unsplash from '../api/Unsplash'
import ImageList from './ImageList';
import SearchBar from'./SearchBar';

class App extends React.Component{
    state = { images: [] , link: ''};
    onSearchSubmit = async term => {
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: { query: term}
        });

        this.setState({ images: response.data.results});
        this.setState({ link: response.data.results[0].urls.small})
        console.log(this.state.images);
    }
    render(){
        return (<div className="ui container" style={{marginTop : '10px'}}>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                    <ImageList images={this.state.images}/>
                    {/* <div>
                        <img src={this.state.link} alt="car" />
                    </div> */}
                </div>
        );
    }
};

export default App;