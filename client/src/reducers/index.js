import {combineReducers} from "redux";
import getItemInfo from "./getItemInfo";
import gettingListItems from "./gettingListItems";
import getUserLists from "./getUserLists";
import getUserReducer from "./getUserReducer";

export default combineReducers({
    user: getUserReducer,
    itemInfo: getItemInfo,
    lists: getUserLists,
    listItems:gettingListItems
})