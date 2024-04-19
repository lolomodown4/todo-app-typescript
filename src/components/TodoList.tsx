import "./styles.css"
import Todo from "../TodosArrayInterface/Todo"
import { useEffect } from "react"
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';

interface Props{
    todos:Todo[]
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {


    /* checker only */
    useEffect(()=>{
        console.log(todos)
    },[todos])


    const DeleteTodo = (id : number) => {
        setTodos(prev => prev.filter((each)=>{
            return each.id !== id
        }))
    }

    const DoneTodo = (id:number) => {
        setTodos(prevState => {
             return prevState.map(each =>
                {
                    if (each.id === id){
                        return {...each, isDone: !each.isDone}
                    } else {
                        return each
                    }
                }
            )} 
        )
    }

    const UpdateTodo = (id:number) => {
        setTodos(prevState => {
            return prevState.map(each => 
                {
                    if (each.id === id){
                        return {...each, isUpdate:true}
                    } else {
                        return each
                    }
                }
            )
        })
    }

    

    const handleChange = (update : string, id :number) => {
        setTodos(prevState => {
            return prevState.map(each => {
                if (each.id === id) {
                    return {...each, task:update, isUpdate:false}
                } else {
                    return each
                }
            })
        })
    }

   

    const UpdateComponent:React.FC<Todo> = (each) => {
        return (
                <input defaultValue={each.task} onBlur={(e)=>handleChange(e.target.value, each.id)} className="single-task-edit-field"></input>  
        )
    }
    

    const TodoContent : React.FC = () => {
        return (
            <>
                {
                    todos.map(each => 

                        <div key={each.id} className="single-task">
                            <div className="single-task-input-field-container">
                                {each.isUpdate ? UpdateComponent(each): <span className={each.isDone ? "done" : "not-done"}>{each.task}</span>}
                            </div>
                            
                            <div className="icon-list">
                                <span onClick={()=>DeleteTodo(each.id)} className="icon-container" ><DeleteOutlinedIcon sx={{color:"red", fontSize:"30px"}} className="icons"/></span>
                                <span onClick={()=>DoneTodo(each.id)}  className="icon-container"> <DoneOutlineOutlinedIcon sx={{color:"green", fontSize:"30px"}} className="icons"/> </span>
                                <span onClick={()=>UpdateTodo(each.id)}  className="icon-container"> <DriveFileRenameOutlineOutlinedIcon sx={{color:"#092327", fontSize:"30px"}} className="icons"/> </span>
                            </div>
                         


                        </div>
                    

                    )
                }

            </>
           
        )
    }

    return ( 
        <div className="todo-list-container">
            <TodoContent />
        </div> 
    );
}
 
export default TodoList;