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

    const [selectedPhysician, setSelectedPhysician] = React.useState('Select Physician');
    const [isOpen, setIsOpen] = React.useState(false);
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

    return(
        
        <main className="pageMain">
            <div className="pageNavBar"></div>

            <div className={styles.appointmentInfo}>

                
                <div className={styles.appointmentColumn}>

                    <div className={styles.appointmentColInner}>
                        {Dropdown()}

                        {appointments.filter(appointment => appointment["doctor"] === selectedPhysician).map((appointment, idx) => (
                            <div key={idx} className={`${styles.appointment} ${appointment["Available"] ? styles.available:styles.unavailable}`}>
                                <div className={styles.appointmentDoctor}>Dr. {appointment["doctor"]}</div>
                                <div className={styles.appointmentTime}>Time: {appointment["startTime"]} to {appointment["endTime"]}</div>
                                <div className={styles.appointmentAvailable}>Available: {appointment["Available"] ? "Yes":"No"}</div>
                                <button className={styles.appointmentBookButton} onClick={routePatientForm}>Book Appointment</button>
                            </div>
                        ))}
                    </div>
                    
                </div>
                
            </div>

        </main>

    )

}