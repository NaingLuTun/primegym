import AboutPage from "./pages/about-page/AboutPage"
import BlogDetail from "./pages/blogs-page/BlogDetail"
import BlogPage from "./pages/blogs-page/BlogPage"
import ClassesPage from "./pages/classes-page/ClassesPage"
import HomePage from "./pages/home-page/HomePage"


import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom"
import TrainersPage from "./pages/trainers-page/TrainersPage"
import ContactPage from "./pages/contact-page/ContactPage"
function App() {



  return (
    <>
      <Router basename="/primegym">
        <Routes>

          {/* home page */}
          <Route path="/home" element={<HomePage />} />

          {/* about page */}
          <Route path="/about" element={<AboutPage/>}/>

          {/* blogs page */}
          <Route path="/blogs" element={<BlogPage />} />
          {/* "/:blogTitle to dynamially access the url path" */}
          <Route path="/blogs/:blogTitle" element={<BlogDetail />}/>

          {/* classes page */}
          <Route path="/classes" element={<ClassesPage />}/>

          {/* trainers page */}
          <Route path="/trainers" element={<TrainersPage />}/>

          {/* contact page */}
          <Route path="/contact" element={<ContactPage />}/>

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
