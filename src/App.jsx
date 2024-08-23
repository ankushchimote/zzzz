import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import EmployList from './components/EmployList/EmployList'
import View from './components/View/View'
import EditModal from './components/EditModal';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Router>
      <Routes>
        {/* <Route exact path="/" component={EmployList} /> */}
        <Route path="/" element={<EmployList/>} />
        <Route path="/edit/:id" element={<EditModal />} />
      </Routes>
    </Router>
   </>
  // <>
  // <View/>
  // </>
  )
}

export default App
