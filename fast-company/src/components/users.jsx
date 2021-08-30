import React from 'react';
import User from './user.jsx'
//import api from "../API"
import Table from 'react-bootstrap/Table';
// import Badge from 'react-bootstrap/Badge'
// import Button from 'react-bootstrap/Button'
// import { FaBookmark, FaRegBookmark } from "react-icons/fa";
const Users = ({onDelete,onToggleBookmark,users}) => {
  //const[users,setUsers]=useState(api.users.fetchAll())  
  
  // const handleDelete =(userId)=>{
  //   const newUsers = users.filter(user=> user._id !== userId)
  //   setUsers(newUsers) 
  // }
  // const handleFavorite = (userId)=>{
  //   const newStateUsers = [...users]
  //   const index = newStateUsers.findIndex(user => user._id === userId)
  //   newStateUsers[index].favorites = !newStateUsers[index].favorites
  //   setUsers(newStateUsers)
  // }
  // const renderPhrase =(number)=>{
  //   return  number>0?(number===2||number===3||number===4)?`${number} человекa тусанет стобой сегодня`:`${number} человек тусанет стобой сегодня`:'никого нет'
  // }


  // const listQualities =( qualities)=>{
  //  const usersQualities  = Object.keys(qualities).map((q)=>{
  //      console.log('qualities[q]',qualities[q])//key={qualities[q]._id}
  //     return (<Badge bg={qualities[q].color} className="rounded-pill" color="blue" style={{marginLeft:'5px'}}>{qualities[q].name}</Badge>)//pill pill className="rounded-circle" 
  //  })
  //  console.log('usersQualities',usersQualities)
  //  return usersQualities
  // }

  const listUsers =users && users.map((user,index)=>{
    return (
          <User 
            user={user} 
            index={index}
            onDelete={onDelete}
            onToggleBookmark={onToggleBookmark}
            />
        // <tr key={user._id}>
        // <td>{index}</td>
        // <td>{user.name}</td>
        // <td>{listQualities(user.qualities)}</td>
        // <td>{user.profession.name}</td>
        // <td>{user.completedMeetings}</td>
        // <td>{user.rate}</td>
        // <td><Button variant="light" onClick={()=>onToggleBookmark(user._id)}>{user.favorites?<FaBookmark/>:<FaRegBookmark/>}</Button></td>
        // <td>{<Button variant="warning" onClick={()=>onDelete(user._id)}>Delete</Button>}</td>
        // </tr>
    )
 })
    return (
        <React.Fragment>
            <Table striped bordered hover style={{display:(users.length===0)?"none":"show"}}>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Qualities</th>
                    <th>Profession</th>
                    <th>Meetings</th>
                    <th>Rate</th>
                    <th>Favorites</th>
                    <td>{/*delete button*/}</td>
                    </tr>
                </thead>
                <tbody>
                {listUsers}
                </tbody>
            </Table>
        </React.Fragment>
    );
};

export default Users;