import * as React from 'react';
import { Provider } from 'react-redux';

export interface P {}

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

export default App;
