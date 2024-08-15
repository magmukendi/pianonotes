import React, { Component} from "react";
import './Piano.css';
import MIDISounds from "midi-sounds-react";
const keyz = [];

let style1 = {height:'60px', backgroundColor:'white', color:'black'}
let style2 = {height: '35px', width:'180px', backgroundColor:'black', color:'white'}
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
    this.checkNoteType = this.checkNoteType.bind(this)
    this.replaceSpecial = this.replaceSpecial.bind(this)
    this.clickEffect = this.clickEffect.bind(this)
  }
  play(event) {
    this.clickEffect(event.target)
    this.midiSounds.playChordNow(3, [this.checkNoteType(event.target.id.toString())], 0.5);
  }

  clickEffect(target)
  {
    if(target.id.includes("-"))
      {
        target.className += " blackButtonClick"
        
      }
      else{
        target.className += " whiteButtonClick"}
        setTimeout(
          ()=>(target.className = "note"), 300
        )
  }

  replaceSpecial(str)
  {
    return str.replace(/#/g, '-');
  }
  checkNoteType(id)
  {
    let index
    for (let i of id)
    {

      if(i >= '0' && i <= '9')
        {
          index = id.indexOf(i)
          break
        }
      }
    let x = Number(id.slice(index)) 
    return x
  }

  render() {

    const keyElements = notes.map((item) => {
        return(
          <button
          className= 'note'
          style={item.note.includes("#") ? style2 : style1}

          key={item.id + item.note}
          id={this.replaceSpecial(item.note.toLowerCase()+item.id)}
          onClick={this.play}
          >
            {item.note}
        </button>
        )
      }
    );
        const off={
            visibility: "hidden",
            width: "0px",
            height: "0px"
        }
    return (
        
        <div className="bg">
          <MIDISounds
            style={off}
            ref={(ref) => (this.midiSounds = ref)}
            appElementName="root"
            instruments={[3]}
          />
          
          <div id="note-container">{keyElements}</div>
        </div>
    );
  }
}

export default Piano;
