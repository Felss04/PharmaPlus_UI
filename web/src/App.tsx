import { Route, Routes } from 'react-router'
import { MainLayout } from './layout/main-layout'
import { Home } from '@/pages/home/home'
import { Login } from './pages/login/login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<span>404</span>} />
      <Route path="/login" element={<Login />} />

      {/* <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route>

  <Route path="concerts">
    <Route index element={<ConcertsHome />} />
    <Route path=":city" element={<City />} />
    <Route path="trending" element={<Trending />} />
  </Route> */}
    </Routes>
  )
}

export default App
