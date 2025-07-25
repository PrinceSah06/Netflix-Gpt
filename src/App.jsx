import { useState } from 'react'
import Body from './componets/Body'
import Header from './componets/header'
import appStore from './utils/appStore'
import {Provider} from 'react-redux'


function App() {
  

  
return<>
<Provider store = {appStore}>
<Body/>
</Provider>
</>
}
export default App
