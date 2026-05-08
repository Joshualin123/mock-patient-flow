"use client";

import * as React from 'react'
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Router } from 'next/router';
import styles from './patient.module.css';

export default function PatientPage() {

    

    return(
        
        <main className={styles.patientMain}>
            <div className={styles.patientNavBar}>
                <button className={styles.patientAppointments}>Book An Appointment</button>
            </div>
            <div className={styles.patientInfoContain}>
                <div className={styles.patientPhysicians}>
                
                </div>
            </div>
        </main>

    )

}