import {Link,Outlet} from "react-router-dom"
const Projects=()=>{


    return (<><h1>Projects</h1>

        <nav>
        <Link to={"/projects/featured"}>Featured Projects</Link>
        <Link to={"/projects/new"} >New Projects</Link>
        </nav>
        <Outlet></Outlet>

    </>)
}
export default Projects;