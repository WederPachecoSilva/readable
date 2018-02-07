import * as React from 'react';
import { connect } from 'react-redux';
import './App.css';

export interface P {
    // name: string;
}

class App extends React.Component<P, {}> {
    render() {
        return (
            <div style={style.app}>
                <p>oi</p>
            </div>
        );
    }
}

const style = {
    app: {
        display: 'flex',
    },
};

const mapState = (state: { name: string }) => ({ name: state.name });

connect(mapState)(App);
