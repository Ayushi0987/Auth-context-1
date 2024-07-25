import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import IndividualBlog from './pages/IndividualBlog';
import StopwatchParent from './pages/stopwatch/StopwatchParent'
import NotFound from './pages/NotFound';
import BlogsHome from './pages/BlogsHome';
import BlogLayout from './BlogLayout';
import ConceptSearch from "./pages/ConceptSearch";
import DBZ from "./DBZ";



export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/home" element={<Home />} />
        <Route path='/about' element={<About/>}  />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/contact-us' element={<Navigate to='/contact'/>} />
        
        <Route path='/blogs' element={<BlogLayout/>}>
           <Route index element={<BlogsHome/>} />
           <Route path='/blogs/:id' element={<IndividualBlog/>} />
           {/* <Route path='/blogs' element={<Blogs/>} /> */}
           <Route path='/blogs/category/:categoryId' element={<IndividualBlog/>} />
        </Route>

        <Route path='/dbz' element={<DBZ/>}></Route>

        <Route path='/stopwatch' element={<StopwatchParent/>} />
        <Route path='concept-search' element={<ConceptSearch/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}


