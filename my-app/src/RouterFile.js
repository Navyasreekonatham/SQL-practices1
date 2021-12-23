import React from "react";
import ReactDom from "react-dom";
import { Route,Link, BrowserRouter as Router, Routes} from "react-router-dom";
import AddTask from "./casestudy/AddTask";
import GetTaskData from "./casestudy/GetTaskData";
import UpdatePriority from "./casestudy/UpdatePriority";
import UpdateBookmark from "./casestudy/UpdateBookmark";
import UpdateNotes from "./casestudy/UpdateNotes";
import SearchTask from "./casestudy/SearchTask";
import DeleteTask from "./casestudy/DeleteTask";
import AssignTask from "./casestudy/AssignTask";

import App from "./App";



const routing = (
    <Router>
        <center>
            <h1>WELCOME</h1>
        <div style={{"backgroundColor":"yellow","color":"black","textAlign":"center"}}>
            <ul>
           
            
            <li>
            <Link to="/ALL-TASK">LIST OF THE TASKS</Link>
             </li>
               
                <li>
                    <Link to="/ADD-TASK">ADD THE TASK</Link>
                </li>
                <li>
                    <Link to="/UPDATE-PRIORITY">UPDATE THE PRIORITY</Link>
                </li>
                <li>
                    <Link to="/UPDATE-BOOKMARK">UPDATE THE BOOKMARK</Link>
                </li>

                <li>
                    <Link to="/UPDATE-NOTES">UPDATE THE NOTES</Link>
                </li>

                <li>
                    <Link to="/SEARCH">SEARCH BY TASKID</Link>
                </li>

                <li>
                    <Link to="/DELETE">DELETE</Link>
                </li>

                <li>
                    <Link to="/ASSIGNTASK">ASSIGNTASK</Link>
                </li>

                

                
            </ul>
            </div>
            </center>
             
            <Routes>
               
                
                <Route path="/ALL-TASK" element={<GetTaskData/>}/>
                <Route path="/ADD-TASK" element={<AddTask/>}/>
                <Route path="/UPDATE-PRIORITY" element={<UpdatePriority/>}/>
                <Route path="/UPDATE-BOOKMARK" element={<UpdateBookmark/>}/>
                <Route path="/UPDATE-NOTES" element={<UpdateNotes/>}/>
                <Route path="/SEARCH" element={<SearchTask/>}/>
                <Route path="/DELETE" element={<DeleteTask/>}/>
                <Route path="/ASSIGNTASK" element={<AssignTask/>}/>
                


                

</Routes>
       
    </Router>
)
export default routing;