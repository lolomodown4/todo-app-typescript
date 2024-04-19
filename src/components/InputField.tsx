import './styles.css'
import Todo from "../TodosArrayInterface/Todo"


interface Props{
    todo_input:string,
    setTodo_input: React.Dispatch<React.SetStateAction<string>>,

    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

const InputField: React.FC<Props>= ({todo_input, setTodo_input, todos, setTodos}) => {


    const handleAdd = (e : React.SyntheticEvent)=> {
        e.preventDefault()

        if (todo_input !== ""){
            setTodos([...todos, { isUpdate:false ,id: Date.now(), task: todo_input, isDone:false}])
            setTodo_input("")
        }
       
    }

    return (
        <form className='form' onSubmit={(e)=>handleAdd(e)}>
            <input  className="input-field" value={todo_input} placeholder="write todo" onChange={(e) => setTodo_input(e.target.value)}></input>
            <button className="button">Go</button>
        </form>
       
    );
}
 
export default InputField ;

