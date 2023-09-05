
import './App.css';

let name='React app';
function App() {
  return (
    <div className="App">
      <div className='App-header'>
      {name}
      <Demo/>
      </div>
     
    </div>
  );
}

function Demo() {
  return (
    <div className="App">
      <div className='App-header'>
      hello Rajat demo adQA
      </div>
     
    </div>
  );
}

export default App;
