import axios from "axios";

const SERVER_URL="http://localhost:5000";

function signUp(values){
const promise=`${SERVER_URL}/sign-up`;
return axios.post(promise,values);
}

function signIn(values){
const promise=`${SERVER_URL}/sign-in`;
return axios.post(promise,values);
}

export {signUp, signIn};