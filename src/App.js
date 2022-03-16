import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateProject from './components/CreateProject'

import Create from './pages/create/Create'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/signup' element={<Create />} />
          <Route path='/add-project' element={<CreateProject />} />
        </Routes>
      </BrowserRouter>
      <Create />
    </div>
  )
}

export default App
