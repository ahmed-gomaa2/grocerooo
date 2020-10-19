import {combineReducers} from "redux";
import getItemInfo from "./getItemInfo";
import gettingAllVegetables from "./gettingAllVegetables";
import gettingListItems from "./gettingListItems";
import gettingVegetable from "./gettingVegetable";
import getUserLists from "./getUserLists";
import getUserReducer from "./getUserReducer";

export default combineReducers({
    user: getUserReducer,
    itemInfo: getItemInfo,
    lists: getUserLists,
    listItems:gettingListItems,
    vegetable: gettingVegetable,
    vegetables: gettingAllVegetables
})