import React from 'react'
import { useState } from 'react'
import './form.css'

export const AddEmpForm = (props) => {

    const [eId, seteId] = useState()
    const [eName, seteName] = useState("")
    const [eAge, seteAge] = useState()
    const [eEmail, seteEmail] = useState("")
    const [ePassword, setePassword] = useState("")

    const submitEvent = (e) => {
        e.preventDefault();
        // var id = Math.floor(1000 + Math.random() * 9000);
        // seteId(e.target.id)
        // console.log("id : " , id)
        props.addEmployee(eName, eEmail, ePassword, eAge)
    }


    return (

        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


            </head>
            <body>
                <br></br>
                <h2><center>Register Employee</center></h2>

                <form onSubmit={submitEvent}>

                    <div className="container">

                        <hr/>

                        <label><b> Employee Name :</b></label>
                        <input type="text" placeholder="Enter Employee Name" value={eName} onChange={(e) => { seteName(e.target.value) }} required />

                        <label><b> Employee Age : </b></label>
                        <input type="number" placeholder="Enter Employee age" value={eAge} onChange={(e) => { seteAge(e.target.value) }} required />

                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" value={eEmail} onChange={(e) => { seteEmail(e.target.value) }} required />

                        <label for="psw"><b>Password</b></label> &nbsp;&nbsp;
                        <input type="password" placeholder="Enter Password"  value={ePassword} onChange={(e) => { setePassword(e.target.value) }} required />

                        <button type="reset" className="resetrbtn">Reset</button>
                        <button type="submit" className="registerbtn">Sign Up</button>

                    </div>

                </form>
                <br></br>

                <hr className="hrstyle"></hr>

                <br></br>
            </body>
        </html>


    )

}