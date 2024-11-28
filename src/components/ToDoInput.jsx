

export default function ToDoInput(props) {

    const {handleAddTodos, todovalue, setTodoValue} = props


    return (
        <header>
            <input value={todovalue} onChange={(e) => {
                setTodoValue(e.target.value)
        }} placeholder="Enter Todo..." />
        <button onClick={() => {
            
            handleAddTodos(todovalue)
            setTodoValue('')
        } }>Add</button>
        </header>
    )
}