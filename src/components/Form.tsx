import { categories } from "../data/categories"

const Form = () => {
    return (
        <form className="space-y-5 bg-white shadow p-10 rounded-lg">

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria:</label>
                <select 
                    id="category"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                >
                   {categories.map ( category =>(
                        <option 
                            key={category.id}
                            value={category.name}
                        >
                                {category.name}
                        </option>
                   ))}
                </select>
            </div>


            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="activity" className="font-bold">Actividad:</label>
                <input 
                    id="activity"
                    type="text"
                    className="border border-slate-300 rounded-lg p-2"
                    placeholder="Ejem. Comida, Jugo de Naranga, Ensalada, Ejercicio, Pesas, Bicicleta"
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias:</label>
                <input 
                    id="calories"
                    type="number"
                    className="border border-slate-300 rounded-lg p-2"
                    placeholder="Calorias ejemplo. 300 o 500"
                />
            </div>
            
            <input
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
                value="Guardar Comida O Guardar Ejercicio"
            />
        </form>
    )
}

export default Form