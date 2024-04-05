import { Activity } from "../types"

type ActivityListProps = {
  activities : Activity[]   
}

const ActivityList = ({activities} : ActivityListProps) => {
    return (
        <>
            <h2 className=" text-4xl text-center text-slate-600 font-bold">Comida Y Actividades</h2>
            
            {activities.map( activity => (
                <div key={activity.id}>
                    <div className=" space-y-2 relative">
                        
                        <p>{activity.category}</p>

                        <p className=" text-2xl font-bold pt-5">{activity.name}</p>

                        <p className=" font-black text-4xl text-lime-500">
                            {activity.calories} {""}
                            <span>Calorias</span>
                        </p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ActivityList