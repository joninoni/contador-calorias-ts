import { useMemo } from "react"
import CaloriesDisplay from "./CaloriesDisplay"
import { Activity } from "../types"

type CalorieTrackerProps = {
    state: Activity[]
}


const CalorieTracker = ({state} : CalorieTrackerProps) => {

    const caloriesConsumed = useMemo( ()=> state.reduce( (acc,el) => el.category === 1 ? acc + el.calories : acc,0 ) ,[state])

    const caloriesBurned = useMemo( ()=> state.reduce( (acc,el) => el.category === 2 ? acc + el.calories : acc,
    0 ) ,[state])

    const netCalories = useMemo( ()=> caloriesConsumed - caloriesBurned ,[caloriesConsumed,caloriesBurned])

    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">Resumen de Calorias</h2>

            <div className="flex flex-col item-center gap-5 mt-10 md:flex-row md:justify-between">
                <CaloriesDisplay
                    calories={caloriesConsumed}
                    text={"Consumidas"}
                />
                <CaloriesDisplay
                    calories={caloriesBurned}
                    text={"Ejercicio"}
                />
                <CaloriesDisplay
                    calories={netCalories}
                    text={"Diferencia"}
                />
            </div>
        </>
    )
}

export default CalorieTracker