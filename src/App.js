import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SwipeAction,List,Button} from 'antd-mobile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <List>
    <SwipeAction
      style={{ backgroundColor: 'gray' }}
      autoClose
      right={[
        {
          text: 'Cancel',
          onPress: () => console.log('cancel'),
          style: { backgroundColor: '#ddd', color: 'white' },
        },
        {
          text: 'Delete',
          onPress: () => console.log('delete'),
          style: { backgroundColor: '#F4333C', color: 'white' },
        },
      ]}
      left={[
        {
          text: 'Reply',
          onPress: () => console.log('reply'),
          style: { backgroundColor: '#108ee9', color: 'white' },
        },
        {
          text: 'Cancel',
          onPress: () => console.log('cancel'),
          style: { backgroundColor: '#ddd', color: 'white' },
        },
      ]}
      onOpen={() => console.log('global open')}
      onClose={() => console.log('global close')}
    >
      <List.Item
        extra="More"
        arrow="horizontal"
        onClick={e => console.log(e)}
      >
        Have left and right buttons
      </List.Item>
    </SwipeAction>
    <SwipeAction
      style={{ backgroundColor: 'gray' }}
      autoClose
      left={[
        {
          text: 'Reply',
          onPress: () => console.log('reply'),
          style: { backgroundColor: '#108ee9', color: 'white' },
        },
        {
          text: 'Cancel',
          onPress: () => console.log('cancel'),
          style: { backgroundColor: '#ddd', color: 'white' },
        },
      ]}
      onOpen={() => console.log('global open')}
      onClose={() => console.log('global close')}
    >
      <List.Item
        extra="More"
        arrow="horizontal"
        onClick={e => console.log(e)}
      >
        Only left buttons
      </List.Item>
    </SwipeAction>
    <SwipeAction
      style={{ backgroundColor: 'gray' }}
      autoClose
      right={[
        {
          text: 'Cancel',
          onPress: () => console.log('cancel'),
          style: { backgroundColor: '#ddd', color: 'white' },
        },
        {
          text: 'Delete',
          onPress: () => console.log('delete'),
          style: { backgroundColor: '#F4333C', color: 'white' },
        },
      ]}
      onOpen={() => console.log('global open')}
      onClose={() => console.log('global close')}
    >
      <List.Item
        extra="More"
        arrow="horizontal"
        onClick={e => console.log(e)}
      >
        Only right buttons
      </List.Item>
    </SwipeAction>
    <SwipeAction
      style={{ backgroundColor: 'gray' }}
      autoClose
      right={[
        {
          text: 'short',
          onPress: () => console.log('cancel'),
          style: { backgroundColor: '#ddd', color: 'white' },
        },
        {
          text: 'long text',
          onPress: () => console.log('delete'),
          style: { backgroundColor: '#F4333C', color: 'white' },
        },
      ]}
      onOpen={() => console.log('global open')}
      onClose={() => console.log('global close')}
    >
      <List.Item
        extra="More"
        arrow="horizontal"
        onClick={e => console.log(e)}
      >
        Different button width
      </List.Item>
    </SwipeAction>
    <SwipeAction
      style={{ backgroundColor: 'gray' }}
      autoClose
      right={[
        {
          text: 'button1',
          onPress: () => console.log('cancel'),
          style: { backgroundColor: '#ddd', color: 'white' },
        },
        {
          text: 'button2',
          onPress: () => console.log('delete'),
          style: { backgroundColor: '#F4333C', color: 'white' },
        },
      ]}
      onOpen={() => console.log('global open')}
      onClose={() => console.log('global close')}
    >
      <List.Item
        extra="More"
        arrow="horizontal"
        onClick={() => console.log('List.Item clicked!')}
      >
        List.Item with onClick
      </List.Item>
    </SwipeAction>
  </List>
      </div>
    );
  }
}

export default App;
