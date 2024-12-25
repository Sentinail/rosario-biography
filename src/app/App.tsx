import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout'
import Home from './Home/page'
import Gallery from './Gallery/page'
import Timeline from './Timeline/page'
import Quotes from './Quotes/page'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="quotes" element={<Quotes />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App