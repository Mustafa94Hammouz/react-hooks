import {CHANGE_COLOR} from "../constants/constants";

function changeColor(hex) {
    return {
        type:CHANGE_COLOR,
        payload: hex
    }
}