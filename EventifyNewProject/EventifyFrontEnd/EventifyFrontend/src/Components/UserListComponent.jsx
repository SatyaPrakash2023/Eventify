import React,{useEffect, useState} from 'react'
import { ListOfUser } from '../Services/UserServics';

const UserListComponent = () => {
    const [User, setUser] = useState([])

    useEffect(() => {
        ListOfUser().then((response) => {
            setUser(response.data);
        }).catch(error => {
            console.error(error);
        });
        
     }
    )

  return (
    <div className='container'>
          <h2 className='text-center'>List of Users</h2>
          <table className='table table-striped table-bordered'>
              <thead>
                  <tr>
                    <th>User ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Mobile No</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Status</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      User.map(Users =>
                        <tr key={Users.userId}>
                            <td>{Users.userId}</td>
                            <td>{Users.firstName}</td>
                            <td>{Users.lastName}</td>
                            <td>{Users.mobileNo}</td>
                            <td>{Users.email}</td>
                            <td>{Users.userName}</td>
                            <td>{Users.dateOfBirth}</td>
                            <td>{Users.gender}</td> {/* Case-sensitive */}
                            <td>{Users.status}</td>
                        </tr>
                    )  
                  }
              </tbody>
          </table>
    </div>
  )
}

export default UserListComponent
