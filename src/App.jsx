import Map from './components/all_items'
import data from './components/data'
import Hof2 from './components/hof2'
import Hof3 from './components/hof3'
import Hof4 from './components/hof4'
import './App.css'
function App() {
 
    return (
      <><center>
      <h1 className='title'>Display All items</h1>
        <Map data={data}/>
        <Hof2 data={data}></Hof2>
        <Hof3 data={data}></Hof3>
        <Hof4 data={data}></Hof4>
        </center>
      </>
    )
  }
export default App