import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateProject from './components/CreateProject'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CreateProject />} />
          {/* <Route path='/signup' element={<Create />} /> */}
          <Route path='/add-project' element={<CreateProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
