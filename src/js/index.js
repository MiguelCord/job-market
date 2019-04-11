import React from 'react';
import ReactDOM from 'react-dom';
import '../css/main.scss';
import Sign from './components/sign-in-up.jsx';

class App extends React.Component {
    render () {
        return (
            <Sign />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
