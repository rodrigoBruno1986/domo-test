import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TestOne from './components/TestOne/TestOne';
import TestTwo from './components/TestTwo/TestTwo';
import TestThree from './components/TestThree/TestThree';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/testone' element={<TestOne />} />
        <Route path='/testtwo' element={<TestTwo />} />
        <Route path='/testThree' element={<TestThree />} />
      </Routes>
    </Router>
  );
}

export default App;
