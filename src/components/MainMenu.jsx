import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

class MainMenu extends Component {
  constructor(props){
    super(props)
    this.state = { activeItem: 'home' }
    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  }


  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='Tags' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name='Help' active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div> 
    );
  }

}

export default MainMenu;
