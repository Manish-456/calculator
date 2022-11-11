import './App.css';
import Calc from './components/Calc';
import Keys from './components/Keys';
import { CalcProvider } from './content/contextCalc';

function App() {

  return (
    <>
 <CalcProvider>
<div className='container'>
    <Calc />
    <Keys />
    </div>
    </CalcProvider>
    </>
  );
}

export default App;
