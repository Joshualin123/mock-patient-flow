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
    const rePassRef = React.useRef<HTMLInputElement>(null);

    const [user, setUser] = React.useState("")
    const [pass, setPass] = React.useState("")
    const [repass, setRePass] = React.useState("")

    const [errMsg, setErrMsg] = React.useState("")

    const unSelectedCol = "rgba(190, 190, 190, 0.77)"
    const selectedCol = "#00a5ff"
    const [patientColor, setPatientColor] = React.useState(unSelectedCol);
    const [adminColor, setAdminColor] = React.useState(unSelectedCol);

    const postAcc = (user : string, pass : string, accType: string) => {
        fetch("http://localhost:8000/polls/create-user/", {
            method: "POST",
            body: JSON.stringify([user, pass, accType])
        })
        .then(res => res.json())
        .then(data => {
            
            if (data.status == "ok") {
                router.push("/")
                setErrMsg("")
            } else {
                setErrMsg(data.status)
                console.log("new err message: " + data.status)
            }
        })
    }

    const handleSignUp = () => {

        if (pass.trim() == repass.trim()) { //if passwords match
            if (pass.trim().length >= 10) { //only post if min length
                if (patientColor == "rgb(82, 82, 82)") {
                    postAcc(user, pass, "patient") //send acc to backend, return status code
                }
                
                else if (adminColor == "rgb(82, 82, 82)") {
                    postAcc(user, pass, "admin") //send acc to backend, return status code
                }
            } else {
                setErrMsg("Password too short.");
                return;
            }

        } else {
            setErrMsg("Passwords do not match.");
            console.log("Passwords do not match.");
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

            <input value={user} onChange={(val) => {setUser(val.target.value)}} ref={userRef} className="login-input" placeholder="Username..." maxLength={20}></input>
            <input value={pass} onChange={(val) => {setPass(val.target.value)}} ref={passRef} className="login-input" placeholder="Password..." maxLength={20}></input>
            <input value={repass} onChange={(val) => {setRePass(val.target.value)}} ref={rePassRef} className="login-input" placeholder="Re-enter password..." maxLength={20}></input>
            
            <div className="login-account-type-contain">
              <button key="patient-button" className="login-patient" onClick={() => handleColour("patient-button")} style={{ backgroundColor: patientColor }}>Patient</button>
              <button key="admin-button" className="login-admin" onClick={() => handleColour("admin-button")} style={{ backgroundColor: adminColor }}>Admin</button>
            </div>
            
            <button className="login-button" onClick={handleSignUp}>Create Account</button>

            <div className="login-link-container">
                <div>Already have an account? </div><Link className="signup-link" href="/"> Login</Link>
            </div>
        </main>
    )

}