import { useState } from 'react'

import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './pages/Loading'

function App() {
 

  return (
  <div>
<PageContainer >
<Header/>
<RouterConfig/>
<Loading/>
</PageContainer>
  </div>
  )
}

export default App
