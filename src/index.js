import React from 'react';
import ReactDOM from 'react-dom';
import "./style/main.scss";

class Welcome extends React.Component {
    render () {
        return (
            <div>
                <h1>Finally I was able to deploy!</h1>
                <h2>And Im also getting the han gof it wahahahah muahaha hehehehhe</h2>
            </div>
        );
    }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
