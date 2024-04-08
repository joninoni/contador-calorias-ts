import {Activity} from "../types"


export type ActivityActions = 
    {type: "save-activity", payload : {newActivity : Activity}} |
    {type: "set-actvityId", payload : {id : Activity["id"]}}    |
    {type: "delete-activity", payload : {id : Activity["id"]}}  |  
    {type: "restar-app"}    

export type ActivityState = {
    activities : Activity[]
    activityId : Activity["id"]
}

const localStorageActivities = () : Activity[] => {
    const activities = localStorage.getItem("activities")
    return activities ? JSON.parse(activities) : []
}

export const initialState : ActivityState = {
    activities:localStorageActivities(),
    activityId:"",
}

export const activityReducer = (
   state : ActivityState = initialState,
   action : ActivityActions
) => {
    if(action.type === "save-activity") {

        let updateActivities : Activity[] = []
        if(state.activityId){
            updateActivities = state.activities.map( activity => activity.id === state.activityId ? action.payload.newActivity : activity)
        }
        else{
            updateActivities=[...state.activities,action.payload.newActivity]
        }
        return {
            ...state,
            activities : updateActivities,
            activityId : ""
        }        
    }

    if(action.type === "set-actvityId") {
        return{
            ...state,
            activityId : action.payload.id
        }
    }

    if(action.type === "delete-activity"){
            return{
                activities : state.activities.filter( activity => activity.id !== action.payload.id)
            }
    }

    if(action.type === "restar-app"){
        return{
            activities : [] ,
            activityId : ""
        }
    }

    return state
}

export default activityReducer