const users=[]

//add user
const addUser=({id,username,room})=>{
    //clean data
    username=username.trim().toLowerCase()
    room=room.trim().toLowerCase()
    //validate the data
    if(!username||!room){
        return {
            error:'Username and Room are required'
        }
    }

    //check for existing user
    const existingUser=users.find((user)=>{
        return user.room===room && user.username===username
    })
    //Validate user
    if(existingUser){
        return {
            error:'Username in use'
        }
    }
    //store user
    const user={id,username,room}
    users.push(user)
    return {user}
    
}
//remove user
const removeUser=(id)=>{
    const index=users.findIndex((user)=>{
        return user.id===id
    })
    if(index!==-1){
        return users.splice(index,1)[0]
    }
}
//get user
const getUser=(id)=>{
    return users.find((user)=>user.id===id)
}

//get user in a room
const getUsersInRoom=(room)=>{
    room=room.trim().toLowerCase()
    return users.filter((user)=>user.room==room)
}


module.exports={
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}