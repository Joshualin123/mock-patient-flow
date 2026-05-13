"use client";

import * as React from 'react'
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from './contact.module.css';

export default function PatientPage() {

    const router = useRouter()

    return(
        
        <main className="pageMain">
            <div className="pageNavBar">
                <div className="pageNavInfoButton" onClick={() => router.push('./patient')}>Home</div>
                <div className="pageNavInfoButton">Contact Us</div>
            </div>

            <div className={styles.contactInfoContain}>
                <div className={styles.contactCol}>
                    <div className={styles.contactInfo}>
                        <div>
                            <div className={styles.contactInfoTitle}>Phone Number: </div>
                            <div className={styles.contactInfoItem}>123-456-7890</div>
                            <div className={styles.contactInfoTitle}>Email:</div>
                            <div className={styles.contactInfoItem}>patientdemo@gmail.com</div>
                            <div className={styles.contactInfoTitle}>Address:</div>
                            <div className={styles.contactInfoItem}>123 Sesame Street, O9W 2H6</div>
                        </div>  
                        
                        <img src='./medical_clinic.jpg' className={styles.contactHomeImg}></img>
                    </div>
                </div>
            </div>
        </main>

    )

}