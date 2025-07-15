import Demo from '../src/intro'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Rct from './demo'
import T from '../src/usenavigate'
import E from './propss1'
import HK from './hoooks'
import TK from './usestateinput'
import SRR from './inputdemo'
import RRR from './usereffect'
import ZZZ from './context1'
import QQQ from './callback1'
import DDF from './usememmo'
import FDR from './parammm'

const App = () => {
  return (
    <div>
      
        {/* <Demo/> */}
        {/* <Rct/> */}

<BrowserRouter>
<Routes>
  <Route path='/' element={<Demo/>}/>
  <Route path='/d' element={<Rct/>}/>
  <Route path='/y' element={<T/>}/>
  <Route path='/o' element={<E/>}/>
  <Route path='/hks' element={<HK/>}/>
    <Route path='/ri' element={<TK/>}/>
<Route path='/opp' element={<SRR/>}/>
    <Route path='/ttt' element={<RRR/>}/>
<Route path='/lop' element={<ZZZ/>}/>
<Route path='/looop' element={<QQQ/>}/>
<Route path='/lpo' element={<DDF/>}/>
<Route path='/tam/:user' element={<FDR/>}/>


</Routes>
</BrowserRouter>

    </div>
  )
}

export default App
