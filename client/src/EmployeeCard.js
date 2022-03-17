import React, {useState} from 'react'

function EmployeeCard({employee}){



    return(
        <div>
            {/* <h1>Employee Card</h1> */}
            <p>Name: {employee.name}</p>
            <p> Age: {employee.age}</p>
            <p> Status: {employee.status}</p>
            <p> Gender: {employee.gender}</p>



            <button onClick={e => handleDelete(employee)} > Delete </button>


        </div>


    )

}

export default EmployeeCard