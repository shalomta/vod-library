import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './comps/layout';
import VodList from './comps/vodList';
import VodListSearch from './comps/vodListSearch';
import VodListyear from './comps/vodListYear';
import VideoDetails from './comps/videoDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<VodList/>} />
          <Route path='/search/:searchQ' element={<VodListSearch />} />
          <Route path='/year/:year' element={<VodListyear />} />
          <Route path='/video/:id' element={<VideoDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
