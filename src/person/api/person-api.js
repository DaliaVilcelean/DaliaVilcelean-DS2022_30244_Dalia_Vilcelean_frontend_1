import {HOST} from '../../commons/hosts';
import RestApiClient from "../../commons/api/rest-client";


const endpoint = {
    person: 'User/FindAllUsers',
    delete:'User/DeleteUser/'
};
const endpoint1 = {
    person: 'User/AddUser',
    update:'User/UpdateUser'
};

function getPersons(callback) {
    
    let request = new Request(HOST.backend_api + endpoint.person, {
        method: 'GET',
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
    

}

function getPersonById(params, callback){
    let request = new Request(HOST.backend_api + endpoint.person + params.id, {
       method: 'GET'
    });

    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function postPerson(user, callback){
    
    let request = new Request(HOST.backend_api + endpoint1.person , {
        method: 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });

    console.log("URL: " + request.url);

    RestApiClient.performRequest(request, callback);
   
}

function deleteUserById(params, callback){
    let request = new Request(HOST.backend_api + endpoint.delete + params.id, {
       method: 'DELETE'
    });

    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function updateUser(user, callback){
    
    let request = new Request(HOST.backend_api + endpoint1.update, {
        method: 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });

    console.log("URL: " + request.url);

    RestApiClient.performRequest(request, callback);
  
}


export {
    getPersons,
    getPersonById,
    postPerson,
    deleteUserById,
    updateUser
};
