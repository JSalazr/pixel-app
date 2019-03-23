import React from 'react';
import TopBar from './components/topBar';
import Layout from './components/layout';

class App extends React.Component {
  render() {

    return (
		<div>
			<TopBar />
			<div style={{'padding': '15px'}}>
				<Layout />
			</div>
		</div>	
    );
  }
}

export default App;
