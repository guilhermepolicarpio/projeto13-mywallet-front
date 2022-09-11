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

function credit(values,config){
    const promise=`${SERVER_URL}/credit`;
    return axios.post(promise,values,config);
}

function debit(values,config){
    const promise=`${SERVER_URL}/debit`;
    return axios.post(promise,values,config);
}

function getTransition(config){
    const promise=`${SERVER_URL}/getTransition`;
    return axios.get(promise,config);
}

export {signUp, signIn,credit,debit,getTransition};