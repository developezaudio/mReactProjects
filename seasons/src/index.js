import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import "semantic-ui-css/semantic.min.css";
import Loader from './Loader'

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         err => console.log(err)
//     );
//     return(
//         <div>Hello there!</div>
//     );
// };

class App extends React.Component{
    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }
    
    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>;
        }

        return <Loader message="Please accept location request"/>;

    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);