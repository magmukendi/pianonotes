
import './App.css';
import Piano from './Piano';

function Footer(){
  return(
      <footer className ="footer">

         
          <div>
              <a href="https://www.instagram.com/mag.legrand/" target="_blank">
                  <span>                        
                      <i className="fa fa-instagram"></i>
                  </span>
              </a>
              <a href="https://www.linkedin.com/in/magmukendi/" target="_blank">
                  <span>                        
                      <i className="fa fa-linkedin"></i>
                  </span>
              </a>
              <a href="https://github.com/LeGrandMAG" target="_blank">
                  <span>                        
                      <i className="fa fa-github"></i>
                  </span>
              </a>
              <a href="https://twitter.com/MAGMukendi" target="_blank">
                  <span>                        
                      <i className="fa fa-twitter"></i>
                  </span>
              </a>
              <a href="https://www.facebook.com/mag.mukendi" target="_blank">
                  <span>                        
                      <i className="fa fa-facebook"></i>
                  </span>
              </a>
          </div>
              <p >© Mag Mukendi 2022</p>
      </footer>
  )
  
}


function App() {
  return (
    
    <div className="App">
      <h2>Piano Notes Player</h2>
      <Piano/>
      <Footer/>
    </div>
  );
}

export default App;
