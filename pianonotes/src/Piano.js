

import React, { Component, useState, useEffect } from "react";

import MIDISounds from "midi-sounds-react";
const keyz = [];
const notes = [
  { id: 48, note: "DO" },
  { id: 49, note: "DO#" },
  { id: 50, note: "RE" },
  { id: 51, note: "RE#" },
  { id: 52, note: "MI" },
  { id: 53, note: "FA" },
  { id: 54, note: "FA#" },
  { id: 55, note: "SOL" },
  { id: 56, note: "SOL#" },
  { id: 57, note: "LA" },
  { id: 58, note: "LA#" },
  { id: 59, note: "SI" },
  { id: 60, note: "DO" }
];

for (let i = 36; i <= 48; i++) {
  keyz.push(i);
}
class Piano extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }
  play(event) {
    this.midiSounds.playChordNow(3, [Number(event.target.id)], 0.5);
  }

  render() {
    const styl = {
      opacity: 0.25,
      height: '40px'
    };

    const styl1 = {
      opacity: 1
    };
    const keyElements = notes.map((item) => (
      <button
        className="note"
        style={item.note.includes("#") ? styl : styl1}
        key={notes.id}
        id={item.id}
        onClick={this.play}
      >
        {item.note}
      </button>
    ));

    return (
        
        <div className="bg">
          <MIDISounds
            className="pff"
            ref={(ref) => (this.midiSounds = ref)}
            appElementName="root"
            instruments={[3]}
          />
          <h3>Note Player</h3>
          <div id="note-container">{keyElements}</div>
        </div>
    );
  }
}

export default Piano;
