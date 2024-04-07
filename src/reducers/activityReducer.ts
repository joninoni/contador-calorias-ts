import {Activity} from "../types"


export type ActivityActions = 
    {type: "save-activity", payload : {newActivity : Activity}} |
    {type: "set-actvityId", payload : {id : Activity["id"]}}    |
    {type: "delete-activity", payload : {id : Activity["id"]}}    

export type ActivityState = {
    activities : Activity[]
    activityId : Activity["id"]
}
export const initialState : ActivityState = {
    activities:[],
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
            ...state,
            activities : state.activities.filter( activity => activity.id !== action.payload.id)
        }
    }

    return state
}

export default activityReducer