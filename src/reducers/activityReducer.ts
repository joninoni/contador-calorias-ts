import {Activity} from "../types"


export type ActivityActions = 
    {type: "save-activity", payload : {newActivity : Activity}} |
    {type: "set-actvityId", payload : {id : Activity["id"]}}

export type ActivityState = {
    activities : Activity[]
    activityId : Activity["id"]
}
export const initialState : ActivityState = {
    activities:[],
    activityId:""
}

export const activityReducer = (
   state : ActivityState = initialState,
   action : ActivityActions
) => {
    if(action.type === "save-activity") {
        return {
            ...state,
            activities : [...state.activities,action.payload.newActivity]
        }        
    }

    if(action.type === "set-actvityId") {
        return{
            ...state,
            activityId : action.payload.id
        }
    }

    return state
}

export default activityReducer