import React from 'react';
import ReactDOM from 'react-dom';


import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

import App from './App';
import Notes from './components/notes/notes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });

// const container = shallow(<Notes/>);
//   it('knows that 2 and 2 make 4', () => {
//       expect(container.find('h1')).to.have.text('NodeNotes')
//     });

describe('Notes check', () => {
  it('Page has this is a new note', () => {
    const notes = shallow(<Notes />);
    expect(notes.find('.notes').text()).toEqual('this is a new note');
  });

//   it('Page has this is a new note', () => {
//     const notes = shallow(<Notes />);
//     expect(notes.find('.notes-r').text()).toEqual('this is a new note');
//   });
//
//   it('works with async/await and resolves', async () => {
//   expect.assertions(1);
//   expect(notes.find('.notes-r').text()).toEqual('this is a new note');
// });
});
