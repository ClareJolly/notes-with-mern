import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'
import './notes.css';

class Notes extends Component {

  constructor(){
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount(){
    // fetch('/api/customers')
      fetch('http://localhost:5002/api/getnotes')
      // .then(console.log(res))
      // console.log(res.json())
      .then(res => res.json())
      .then(notes => this.setState({notes: notes}, () => console.log('notes fetched..',notes,this.state)))
  }

  render() {
    return (
      <div >
      <h1>NodeNotes</h1>
      {/**/}
      <ul className="notes">
      <li className="note">this is a new note</li>
      </ul>
      <ul className="notes-r">
      {this.state.notes.map(notes =>
      <li className="note-r" key={notes._id}>{notes.title} - {notes.note}</li>)}
      </ul>
      </div>
    );
  }
}

export default Notes;
