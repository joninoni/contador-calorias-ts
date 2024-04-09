import { useMemo } from "react"
import { Activity } from "../types"

type CalorieTrackerProps = {
    state: Activity[]
}


const CalorieTracker = ({state} : CalorieTrackerProps) => {

    const caloriesConsumed = useMemo( ()=> state.reduce( (acc,el) => el.category === 1 ? acc + el.calories : acc,0 ) ,[state])

    const caloriesBurned= useMemo( ()=> state.reduce( (acc,el) => el.category === 2 ? acc + el.calories : acc,
    0 ) ,[state])

    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">Resumen de Calorias</h2>

            <div className="flex flex-col item-center gap-5 mt-10 md:flex-row md:justify-between">
                <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
                    <span className="font-black text-6xl text-orange">{caloriesConsumed}</span>
                    Consumidas
                </p>
                <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
                    <span className="font-black text-6xl text-orange">{caloriesBurned}</span>
                    Gastadas
                </p>
                <p className=" text-orange-800 font-bold rounded-full grid grid-cols-1 gap-3 text-center">
                    <span className="font-black text-6xl text-orange">{caloriesConsumed - caloriesBurned}</span>
                    Diferencia
                </p>
            </div>
        </>
    )
}

export default CalorieTracker