import React, { Component } from 'react';
import {Editor, EditorState,  convertToRaw} from 'draft-js';
import { Segment, Button } from 'semantic-ui-react';
var ipcRenderer = require('electron').ipcRenderer

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
    this.handleClickSave = this.handleClickSave.bind(this);
  }
  handleClickSave() {
    var contentState = this.state.editorState.getCurrentContent();
    var text = convertToRaw(contentState);
    ipcRenderer.send('save-note', text);
  }
  render() {
    const {editorState} = this.state;
    let className = 'editor-root';
    var contentState = editorState.getCurrentContent();

    return (
      <Segment.Group>
        <Segment> 
          <Button.Group>
            <Button icon='align left' />
            <Button icon='align center' />
            <Button icon='align right' />
            <Button icon='align justify' />
          </Button.Group>
          {' '}
          <Button.Group>
            <Button icon='unordered list'/>
            <Button icon='ordered list'/>            
            <Button icon='bold' />
            <Button icon='underline' />
            <Button icon='italic' />
          </Button.Group>
        </Segment>
        <Segment>
          <Editor editorState={this.state.editorState} onChange={this.onChange} />
        </Segment>
        <Segment clearing> 
          <Button primary floated='right' onClick={this.handleClickSave} >Save</Button>
        </Segment>
      </Segment.Group>
    );
  }
}

export default TextBox;
