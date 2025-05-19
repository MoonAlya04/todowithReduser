import { useReducer } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoFooter from "./components/TodoFooter";

const initialTodos = [
    {
        id: Math.random(),
        title: "Gnal SFS",
        isCompleted: true,
    },
    {
        id: Math.random(),
        title: "Gnal Tun",
        isCompleted: false,
    },
];

function todoReducer(todos, action) {
    if (action.type === "ADD") {
        return [
            ...todos,
            {
                id: Math.random(),
                title: action.text,
                isCompleted: false,
            },
        ];
    } else if (action.type === "DELETE") {
        return todos.filter((elm) => elm.id !== action.id);
    } else if (action.type === "CHANGE") {
        return todos.map((elm) => {
            if (elm.id === action.id) {
                return { ...elm, isCompleted: !elm.isCompleted };
            }
            return elm;
        });
    } else if (action.type === "CLEAR") {
        return todos.filter((elm) => !elm.isCompleted);
    } else {
        return todos;
    }
}

function App() {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);

    return (
        <div className=" h-screen flex  flex-col justify-center items-center ">
            <TodoForm
                onAdd={(newTodo) => dispatch({ type: "ADD", text: newTodo })}
            />
            <ul className="w-[300px]">
                {todos.map((elm) => (
                    <TodoItem
                        text={elm.title}
                        id={elm.id}
                        isCompleted={elm.isCompleted}
                        onDelete={(id) => dispatch({ type: "DELETE", id: id })}
                        completeTodo={(id) =>
                            dispatch({ type: "CHANGE", id: id })
                        }
                        key={elm.id}
                    />
                ))}
            </ul>
            <TodoFooter
                clearCompleteds={() => dispatch({ type: "CLEAR" })}
                completedsLength={todos.filter((elm) => elm.isCompleted).length}
                lentgh={todos.length}
            />
        </div>
    );
}

export default App;
