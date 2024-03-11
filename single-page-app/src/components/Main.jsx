// import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Nav from "./Nav";
import {Routes,Route} from "react-router-dom";
import Success from "./Success";
import Projects from "./Projects";
import NotFound from "./NotFound";
import FeatureProjects from "./FeatureProjects";
import NewProjects from "./NewProjects";
import { Suspense, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Users from "./Users";
import EachUser from "./EachUser";
import Register from "./Register";
import React from "react";
import Login from "./Login";
import { AuthProvider } from "./auth";
import Logout from "./Logout";
import PrivateRoute from "./PrivateRoute";


const LazyAbout = React.lazy(() => import('./About'));


const Main=()=>{
 return(<>

            <AuthProvider className="changeTheme">

        <Nav></Nav>
        <Routes>
        <Route path="/about" element={ <Suspense fallback="loading..." ><LazyAbout></LazyAbout></Suspense> }/>
        <Route path="/"  element={<Home></Home>}>  </Route>
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/success" element={<Success></Success>}/>
        <Route path="/projects" element={<Projects></Projects>}>
            <Route index element={<NewProjects/>}/>
            <Route path="featured" element={<FeatureProjects/>}/>
            <Route path="new" element={<NewProjects/>} />
        </Route>
        <Route path="/users" element={<PrivateRoute><Users></Users></PrivateRoute>} />
        <Route path="/users/:userId" element={<EachUser></EachUser>}/>
        <Route path="/register" element={<Register></Register>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>

        <Route path="*" element={<NotFound/>}/>

    </Routes>
        </AuthProvider>

        

       </>)
}
export default Main;