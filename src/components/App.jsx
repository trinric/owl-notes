import React, { Component } from 'react';
import MainMenu from './MainMenu.jsx';
import SideBar from '../containers/SideBar.jsx'
import TextBox from '../containers/TextBox.jsx';
import { Container, Divider, Grid } from 'semantic-ui-react';
var ipcRenderer = require('electron').ipcRenderer;

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			notes : []
		};
	}
	componentDidMount() {
		ipcRenderer.send('note-list-request', (event, arg) => {
			console.log("List request sent.");
		});
		ipcRenderer.on('note-list', (event, arg) => {
			console.log("List Received");
			this.setState({notes: arg});
		});
	}
	render() {
		return (
		  <div>
		    <MainMenu />
		    <Divider section />
		    <Grid padded='horizontally'>
		    	<Grid.Column width={4}>
		    		
		    	</Grid.Column>
		    	<Grid.Column width={12}>
		    		<TextBox />
		    	</Grid.Column>
		    </Grid>
		  </div>
    );
  }
}

export default App;
