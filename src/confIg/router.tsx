import { BrowserRouter,Routes,Route } from "react-router-dom";
import Project from "../pages/Project";
import AddProject from "../pages/AddProject";

export default function AppRouter(){
    return <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element = {<Project />} />
        <Route path="AddProject" element = {<AddProject />} />
        <Route path="AddProject/:id" element = {<AddProject />} />
    </Routes>
    </BrowserRouter>
    
    </>
}