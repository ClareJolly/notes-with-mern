import React from 'react';
import ReactDOM from 'react-dom';
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

// const container = shallow(<Notes {...props} />);
//   it('knows that 2 and 2 make 4', () => {
//       expect(container.find('h1')).to.have.text('A New Day')
//     });
