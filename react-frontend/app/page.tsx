"use client";

import * as React from 'react'
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Router } from 'next/router';

export default function loginPage() {

    const router = useRouter();

    const userRef = React.useRef<HTMLInputElement>(null);
    const passRef = React.useRef<HTMLInputElement>(null);

    const [user, setUser] = React.useState("");
    const [pass, setPass] = React.useState("");

    const unSelectedCol = "rgba(190, 190, 190, 0.77)"
    const selectedCol = "#00a5ff"
    const [patientColor, setPatientColor] = React.useState(unSelectedCol);
    const [adminColor, setAdminColor] = React.useState(unSelectedCol);

    const [errMsg, setErrMsg] = React.useState("");

    const postAcc = (user : string, pass : string, accType : string) => {
        fetch("http://localhost:8000/polls/authenticate-user/", {
            method: "POST",
            body: JSON.stringify([user, pass, accType])
        })
        .then(res => res.json())
        .then(data => {
            
            if (data.status == "ok") {

              if (accType == "patient") {
                router.push(`/patient?username=${encodeURIComponent(user)}`)
              }
              else if (accType == "admin") {
                router.push(`/admin?username=${encodeURIComponent(user)}`)
              }
              setErrMsg("")

            } else if (patientColor == adminColor) {
              setErrMsg("Please select whether you are a patient or an admin.")
            } else {
              setErrMsg(data.status)
              console.log("new err message: " + data.status)
            };

        })
    }

    React.useEffect(() => {

        if (userRef.current) {
            setUser(userRef.current.value)
        }
        if (passRef.current) {
            setPass(passRef.current.value)
        }
        
    }, [userRef.current, passRef.current])

    const handleLogin = () => {

      if (patientColor == selectedCol) {
        postAcc(user, pass, "patient") //send acc to backend, return status code
      }
      
      else if (adminColor == selectedCol) {
        postAcc(user, pass, "admin") //send acc to backend, return status code
      }
    };

    const handleColour = (key: string) => {

      if (key == "patient-button") {
        setPatientColor(selectedCol);
        setAdminColor(unSelectedCol);
      }

      else if (key == "admin-button") {
        setAdminColor(selectedCol);
        setPatientColor(unSelectedCol);
      }
        
    };

    return(
        
        <main className="loginMain">
            <div className="login-title">
              Patient Flow Mock
              {<div className="login-err-msg">{errMsg}</div>}
            </div>
            
            <input value={user} onChange={event => {setUser(event.target.value)}} ref={userRef} className="login-input" placeholder="Username..." maxLength={20}></input>
            <input value={pass} onChange={event => {setPass(event.target.value)}} ref={passRef}  className="login-input" placeholder="Password..." maxLength={20}></input>
            
            <div className="login-account-type-contain">
              <button key="patient-button" className="login-patient" onClick={() => handleColour("patient-button")} style={{ backgroundColor: patientColor }}>Patient</button>
              <button key="admin-button" className="login-admin" onClick={() => handleColour("admin-button")} style={{ backgroundColor: adminColor }}>Admin</button>
            </div>

            <button className="login-button" onClick={handleLogin}>Login</button>

            <div className="login-link-container">
                <div>Don't have an account? </div><Link className="signup-link" href="/sign-up/"> Sign Up</Link>
            </div>
        </main>
    )

}