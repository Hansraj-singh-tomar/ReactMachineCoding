import React, { useState } from 'react'

const Todo = () => {
    const [state, setState] = useState({
        todo: "",
        date: "",
        listOfTodo: []
    })

    const validate = () => {
        if (!state.notes) {
            alert("Please Enter Todo")
            return false
        }
        if (!state.date) {
            alert("Please Enter Date");
            return false
        }
        return true;
    }

    function updateState(newState) {
        setState((preState) => {
            return { ...preState, ...newState }
        })

        // setState({ ...state, ...newState })
    }

    function handleOnchange(e) {
        const { name, value } = e.target;
        updateState({ [name]: value })
    }

    function handleClick() {
        if (!validate()) {
            return;
        }
        const obj = { todo: state.todo, date: state.date }
        const currList = [...state.listOfTodo];
        currList.push(obj);
        updateState({ listOfTodo: currList, todo: "", date: "" })
    };

    return (
        <>
            {/* Todo input part */}
            <div className='w-5/12 my-4 mx-auto bg-red-300 text-center p-10'>
                <h1 className='py-4 font-bold text-2xl'>Todo App</h1>
                <input type="text" name="todo" value={state.todo} onChange={handleOnchange} className='w-full border-2 border-black mb-4 pl-2' id="" placeholder='Enter Notes' />
                <input name='date' value={state.date} onChange={handleOnchange} className='w-full border-2 border-black mb-4 pl-2' type="date" />
                <button onClick={handleClick} className='border-2 border-black bg-white font-bold px-4'>Submit</button>
            </div>

            {/* Todo list part */}
            <div className='w-4/12 h-full mx-auto'>
                <ul>
                    {
                        state.listOfTodo.map((item, i) => {
                            return <li className='bg-green-400 rounded-lg p-4 mb-2 shadow-lg' key={i}>{i + 1}. {item.todo}{item.date}</li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Todo