"use client";

import * as React from 'react'
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Router } from 'next/router';
import styles from './admin.module.css'
import {useState} from 'react'
import DatePicker from "react-datepicker";
import type { DatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function adminPage() {

    const appointments = [
        {
            "patient": "Patient1",
            "startTime": "9am",
            "endTime": "10am",
            "Phone Number": "123-456-7890",
            "Booking Status": "Confirmed"
        },
        {
            "patient": "Patient2",
            "startTime": "9am",
            "endTime": "10am",
            "Phone Number": "123-456-7890",
            "Booking Status": "Confirmed"
        },
        {
            "patient": "Patient3",
            "startTime": "9am",
            "endTime": "10am",
            "Phone Number": "123-456-7890",
            "Booking Status": "Pending"
        },
        {
            "patient": "Patient4",
            "startTime": "9am",
            "endTime": "10am",
            "Phone Number": "123-456-7890",
            "Booking Status": "Confirmed"
        },
        {
            "patient": "Patient5",
            "startTime": "9am",
            "endTime": "10am",
            "Phone Number": "123-456-7890",
            "Booking Status": "Cancelled"
        }
    ]

    const [showForm, toggleForm] = useState(false)
    const [dob, setDob] = useState<Date | null>(null); 

    const form = () => { 

        return (
            <div className={styles.formContain}>
                <button className={styles.formClose} onClick={() => toggleForm(false)}>X</button>

                <div style={{fontSize: "30px"}}>Patient Form</div>
                <div className={styles.formIn}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        First Name
                        <div className={styles.formName}>Sample First Name</div>
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        Last Name
                        <div className={styles.formName}>Sample Last Name</div>
                    </div>
                </div>

                <div className={styles.formIn}>
                    <div style={{display: "flex", flexDirection: "column", width: "40%"}}>
                        Email:
                        <div className={styles.formName}>Sample Email</div>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", width: "31.5%"}}>
                        Date Of Birth
                        <div className={styles.formName}>2026-05-09</div>
                    </div>
                </div>

                <div className={styles.formIn}>
                    <div style={{display: "flex", flexDirection: "column", width: "40%"}}>
                        Preferred Doctor:
                        <div className={styles.formName}>Dr. John Doe</div>
                    </div>

                </div>

                <div style={{fontSize: '20px'}}>Address</div>

                <div className={styles.formIn}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        Street Name:
                        <div className={styles.formName}>Sample Street Name</div>

                        <div style={{display: "flex", flexDirection: "column", marginTop: "5%"}}>
                            Postal Code:
                            <div className={styles.formName}>Sample Postal Code</div>

                            
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        City:
                        <div className={styles.formName}>Sample City Name</div>
                    </div>
                </div>

            </div>
        )
    }

    return(
        
        <main className="pageMain">
            <div className="pageNavBar"></div>

            {showForm && form()}
            <div className={styles.adminInfo}>

                <div className={styles.adminColumn}>
                    {appointments.map((appointment, idx) => (
                        <div key={idx} className={styles.admin}>
                            <div className={styles.adminPatient}>{appointment["patient"]}</div>
                            <div className={styles.adminTime}>Time: {appointment["startTime"]} to {appointment["endTime"]}</div>
                            <div className={styles.adminPatientNum}>Phone Number: {appointment["Phone Number"]}</div>
                            <div className={styles.adminStatus}>Booking Status: {appointment["Booking Status"]}</div>
                            <button className={styles.adminBookButton} onClick={() => toggleForm(true)}>View Patient Form</button>
                        </div>
                    ))}
                </div>
                
            </div>

        </main>
    )

}

