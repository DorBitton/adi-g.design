import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import CinemaAppDetail from './components/cinema-app'
import ErrorBoundary from './components/common/ErrorBoundary'
import './App.css'

const App = () => {
  return (
    <HashRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cinema-app" element={<CinemaAppDetail />} />
        </Routes>
      </ErrorBoundary>
    </HashRouter>
  )
}

export default App