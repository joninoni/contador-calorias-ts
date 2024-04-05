import { useState,ChangeEvent,FormEvent, Dispatch} from "react"
import { categories } from "../data/categories"
import { Activity } from "../types"
import { ActivityActions } from "../reducers/activityReducer"

type FormProps = {
    dispatch : Dispatch<ActivityActions>
}

const Form = ({dispatch} : FormProps) => {

    const initialState = {
        id : crypto.randomUUID(),
        category : 1,
        name: "",
        calories: 0,
    }

    const [activity,setActivity] = useState <Activity>(initialState)

    const handleChange =( e : ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

        const isNumberField = ["category","calories"].includes(e.target.id)//es para saber cual campo dispara el evento si es el campo de categories o calories

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = () => {
        const {calories,name} = activity
        return name.trim() !== "" && calories > 0
    }

    const handleSubmit =( e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({type:"save-activity",payload:{newActivity:activity}})
        //resetear el formulario
        setActivity({
            ...initialState,
            id: crypto.randomUUID()
        })
    }

    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg"
            onSubmit={handleSubmit}
        >

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria:</label>
                <select 
                    id="category"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    value={activity.category}
                    onChange={handleChange}
                >
                   {categories.map ( category =>(
                        <option 
                            key={category.id}
                            value={category.id}
                        >
                                {category.name}
                        </option>
                   ))}
                </select>
            </div>


            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Actividad:</label>
                <input 
                    id="name"
                    type="text"
                    className="border border-slate-300 rounded-lg p-2"
                    placeholder="Ejem. Comida, Jugo de Naranga, Ensalada, Ejercicio, Pesas, Bicicleta"
                    value={activity.name}
                    onChange={handleChange}               
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias:</label>
                <input 
                    id="calories"
                    type="number"
                    className="border border-slate-300 rounded-lg p-2"
                    placeholder="Calorias ejemplo. 300 o 500"
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>
            
            <input
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
                value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
                disabled={!isValidActivity()}
            />
        </form>
    )
}

export default Form