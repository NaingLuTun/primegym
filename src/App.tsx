import BlogDetail from "./pages/blog-page/BlogDetail"
import BlogPage from "./pages/blog-page/BlogPage"
import HomePage from "./pages/home-page/HomePage"


import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom"
function App() {



  return (
    <>
      <Router basename="/primegym">
        <Routes>

          {/* home page */}
          <Route path="/home" element={<HomePage />} />

          {/* blog page */}
          <Route path="/blogs" element={<BlogPage />} />
          {/* "/:blogTitle to dynamially access the url path" */}
          <Route path="/blogs/:blogTitle" element={<BlogDetail />}/>
          
          {/* default page */}
          <Route path="/" element={<Navigate to="/home" />}/>

          {/* error page */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
