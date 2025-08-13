import { handleActions } from "redux-actions";

// state
const initialState = {
    jobs: {
        developer : {
            name: "김깅동",
            skills: ["React.js", "JavaScript"]
        },
        planner : {
            name: "장길동",
            skills: ["JAVA", "Excel"]
        }
    }
}

// reducer
const jobs = handleActions({
}, initialState)

export default jobs;

