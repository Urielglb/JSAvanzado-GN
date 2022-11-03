import "../css/index.css"
import { getRandomUsers, getUsers } from "./api.js";
import { mountUsers } from "./dom.js";

//For Random users
mountUsers(getRandomUsers);
//For ordered users
//mountUsers(getUsers);