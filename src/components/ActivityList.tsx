import { useMemo,Dispatch} from "react"
import {PencilSquareIcon,TrashIcon} from "@heroicons/react/24/outline"
import { Activity } from "../types"
import { categories } from "../data/categories"
import { ActivityActions} from "../reducers/activityReducer"

type ActivityListProps = {
    activities : Activity[]
    dispatch : Dispatch<ActivityActions>   
}

const ActivityList = ({activities,dispatch} : ActivityListProps) => {

    const nameCategory = useMemo( () => (category : Activity["category"]) => categories.map( cat => cat.id === category ? cat.name : "")  ,[])

    const isEmptyActivities = useMemo( () => activities.length ===0 ,[activities] )

    return (
        <>
            <h2 className=" text-4xl text-center text-slate-600 font-bold">Comida Y Actvidades</h2>
            {isEmptyActivities ? 
                <p className="text-center my-5">
                    No hay actividades aun...
                </p> : 
                activities.map( activity => (
                    <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
                        <div className=" space-y-2 relative">
                            
                            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? "bg-lime-500" : "bg-orange-500"}`}>{nameCategory(activity.category)}</p>
    
                            <p className=" text-2xl font-bold pt-5">{activity.name}</p>
    
                            <p className=" font-black text-4xl text-lime-500">
                                {activity.calories} {""}
                                <span>Calorias</span>
                            </p>
                        </div>
    
                        <div className="flex gap-5 items-center">
                            <button
                                onClick={() => dispatch( {type:"set-actvityId",payload:{id:activity.id}} )}
                            >
                                <PencilSquareIcon
                                    className="h-8 w-8 text-gray-800"
                                />
                            </button>
    
                            <button
                                onClick={() => dispatch( {type:"delete-activity",payload:{id:activity.id}})}
                            >
                                <TrashIcon
                                    className="h-8 w-8 text-red-800"
                                />
                            </button>
                        </div>
                    </div>
                ))
            }   
        </>
    )
}

export default ActivityList