import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
//import BlogPage from './pages/BlogPage';

function App() {
  return (
    // 2. 全体を BrowserRouter で囲む
    <BrowserRouter>
      <Routes>
        {/* 3. トップページは空文字ではなく "/" を指定するのが一般的 */}
        <Route path="/" element={<Home />} />

        {/* 4. パス名はURLになるので、慣習的に小文字の "/blog" などが推奨されます */}
        {/* <Route path="/blog" element={<BlogPage />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;