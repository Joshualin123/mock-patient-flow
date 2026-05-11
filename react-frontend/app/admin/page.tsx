"use client";

import * as React from 'react'
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Router } from 'next/router';
import styles from './admin.module.css'
import {useState} from 'react'
import "react-datepicker/dist/react-datepicker.css";

export default function adminPage() {

    type Appointment = {
        patient: string;
        startTime: string;
        endTime: string;
        "Preferred Physician": string;
        "Booking Status": string;
    };

    const appointments = [
        {
            "patient": "Patient1",
            "startTime": "9am",
            "endTime": "10am",
            "Preferred Physician": "Physician1",
            "Booking Status": "Confirmed"
        },
        {
            "patient": "Patient2",
            "startTime": "9am",
            "endTime": "10am",
            "Preferred Physician": "Physician2",
            "Booking Status": "Confirmed"
        },
        {
            "patient": "Patient3",
            "startTime": "9am",
            "endTime": "10am",
            "Preferred Physician": "Physician3",
            "Booking Status": "Pending"
        },
        {
            "patient": "Patient4",
            "startTime": "9am",
            "endTime": "10am",
            "Preferred Physician": "Physician2",
            "Booking Status": "Confirmed"
        },
        {
            "patient": "Patient5",
            "startTime": "9am",
            "endTime": "10am",
            "Preferred Physician": "Physician1",
            "Booking Status": "Cancelled"
        }
    ]

    const [currAppointment, setCurrAppointment] = React.useState<Appointment | null>(null)

    const [selectedPhysician, setSelectedPhysician] = useState('Select Physician');
    const [isOpen, setIsOpen] = useState(false);
    const physicians = ['Physician1', 'Physician2', 'Physician3'];

    const Dropdown = () => {

        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };

        const handleSelect = (physician: string) => {
            setSelectedPhysician(physician);
            setIsOpen(false);
        };

        return (
            <div className='dropContain'>
                <div className={"inline-block text-left"}>
                    {/* Dropdown button */}
                    <button
                        type="button"
                        className='dropButton'
                        onClick={toggleDropdown}    
                    >
                        {selectedPhysician}

                        <img src='./dropdown.jpg' className='dropArrow'></img>
                    </button>

                    {/* Dropdown menu */}
                    {isOpen && (
                        <div className='dropMenu'>
                            <div className='dropOptionContain'>
                                {physicians.map((physician, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="block px-4 py-2
                                                text-sm text-black
                                                hover:bg-gray-100 z-50"
                                        onClick={() => handleSelect(physician)}
                                    >
                                        {physician}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    const [showForm, toggleForm] = useState(false)

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

            {showForm && currAppointment && currAppointment?.["Booking Status"] === "Confirmed" && form()}

            <div className={styles.adminInfo}>

                <div className={styles.adminColumn}>

                    <div className={styles.adminColInner}>
                        {Dropdown()}

                        {appointments.filter(appointment => appointment["Preferred Physician"] == selectedPhysician).map((appointment, idx) => (
                            
                            <div key={idx} className={styles.admin} style={{backgroundColor: appointment["Booking Status"] === "Confirmed" ? "#92ffaa" : appointment["Booking Status"] === "Cancelled" ? "#ff9494" : "white"}}>
                                <div className={styles.adminPatient}>{appointment["patient"]}</div>
                                <div className={styles.adminTime}>Time: {appointment["startTime"]} to {appointment["endTime"]}</div>
                                <div className={styles.adminPrefPhysician}>Preferred Physician: {appointment["Preferred Physician"]}</div>
                                <div className={styles.adminStatus}>Booking Status: {appointment["Booking Status"]}</div>
                                <button className={styles.adminViewForm} onClick={() =>{toggleForm(true); setCurrAppointment(appointment)}}>View Patient Form</button>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>

        </main>
    )

}

