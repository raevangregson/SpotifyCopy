import {updateUser} from '../actions/user'

export function userUpdate(user){
    //any changes we may need to do to manipulate the data.
    updateUser(user)
};

export function login(){
    fetch('http://localhost:3001/authorize')
      .then(response => response.text()
      )
      .then(results => {
        console.log(results)
        return results
      }).catch(error => console.error(error));
    // updateUser(user)
};
