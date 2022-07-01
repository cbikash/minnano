import Layout from './Components/Main/Layout'
import {Routes, Route} from 'react-router-dom'
import './assest/css/main.css'
function App() {
  return (
    <>
    <Routes>
      <Route path="/*" element={<Layout />} />
    </Routes>
    </>
  );
}

export default App;
