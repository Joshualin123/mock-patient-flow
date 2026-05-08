"use client";

import * as React from 'react'
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Router } from 'next/router';
import styles from './appointment.module.css';
import useEmblaCarousel from 'embla-carousel-react'
import { useSearchParams } from "next/navigation";


export default function PatientPage() {

    const router = useRouter()

    
    const searchParams = useSearchParams();
    const doctor = searchParams.get("doctor");

    const appointments = [
        {
            "doctor": "Physician1",
            "startTime": "9am",
            "endTime": "10am",
            "Available": true
        },
        {
            "doctor": "Physician3",
            "startTime": "9am",
            "endTime": "10am",
            "Available": true
        },
        {
            "doctor": "Physician2",
            "startTime": "9am",
            "endTime": "10am",
            "Available": false
        },
        {
            "doctor": "Physician2",
            "startTime": "9am",
            "endTime": "10am",
            "Available": false
        },
        {
            "doctor": "Physician1",
            "startTime": "9am",
            "endTime": "10am",
            "Available": true
        }
    ]

    const routePatientForm = () => {
        router.push("./patient-form")
    }

    return(
        
        <main className="pageMain">
            <div className="pageNavBar"></div>

            <div className={styles.appointmentInfo}>

                <div className={styles.appointmentColumn}>
                    {appointments.map((appointment, idx) => (
                        <div key={idx} className={`${styles.appointment} ${appointment["Available"] ? styles.available:styles.unavailable}`}>
                            <div className={styles.appointmentDoctor}>Dr. {appointment["doctor"]}</div>
                            <div className={styles.appointmentTime}>Time: {appointment["startTime"]} to {appointment["endTime"]}</div>
                            <div className={styles.appointmentAvailable}>Available: {appointment["Available"] ? "Yes":"No"}</div>
                            <button className={styles.appointmentBookButton} onClick={routePatientForm}>Book Appointment</button>
                        </div>
                    ))}
                </div>
                
            </div>

        </main>

    )

}