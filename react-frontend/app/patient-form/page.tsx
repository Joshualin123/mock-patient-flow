"use client";

import { useRouter } from "next/navigation";
import styles from './patient-form.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function PatientPage() {

    const router = useRouter()
    
    const [dob, setDob] = useState<Date | null>(null);  
    const [zIdx, setZIndex] = useState(-1)

    const handleSubmit = () => {
        setZIndex(99)
    }

    const closePopUp = () => {
        setZIndex(-1)
    }

    return(
        
        <main className="pageMain">
            <div className="pageNavBar">
                <div className="pageNavInfoButton" onClick={() => router.push('./patient')}>Home</div>
                <div className="pageNavInfoButton">Contact Us</div>
            </div>
            
            <div className={styles.formConfirmPopUp} style={{zIndex: zIdx}}>
                <button onClick={closePopUp} className={styles.formPopUpExit} style={{zIndex: zIdx}}>X</button>
                Thank you for submitting! We'll see you at the clinic.
            </div>

            <div className={styles.formColumn}>
                <div className={styles.formContain}>
                    <div style={{fontSize: "30px"}}>Patient Form</div>
                    <div className={styles.formIn}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            First Name
                            <input placeholder="Enter your first name..." className={styles.formName}></input>
                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            Last Name
                            <input placeholder="Enter your first name..." className={styles.formName}></input>
                        </div>
                    </div>

                    <div className={styles.formIn}>
                        <div style={{display: "flex", flexDirection: "column", width: "40%"}}>
                            Email:
                            <input placeholder="Enter your email..." className={styles.formEmail}></input>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", width: "31.5%"}}>
                            Date Of Birth
                            <div className={styles.formDatePicker}>
                                <DatePicker
                            selected={dob}
                            onChange={(date: Date | null) => setDob(date)}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Select birth date"
                            showYearDropdown
                            scrollableYearDropdown
                            />
                            </div>
                        </div>
                    </div>

                    <div className={styles.formIn}>
                        <div style={{display: "flex", flexDirection: "column", width: "40%"}}>
                            Preferred Doctor:
                            <input placeholder="Enter your preferred doctor..." className={styles.formEmail}></input>
                        </div>

                    </div>

                    <div style={{fontSize: '20px'}}>Address</div>

                    <div className={styles.formIn}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            Street Name:
                            <input placeholder="Enter your street..." className={styles.formName}></input>

                            <div style={{display: "flex", flexDirection: "column", marginTop: "5%"}}>
                                Postal Code:
                                <input placeholder="Enter your postal code..." className={styles.formName}></input>

                                
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            City:
                            <input placeholder="Enter your city..." className={styles.formName}></input>
                        </div>
                    </div>


                    <div className={styles.formIn} style={{height: '30%', width: '40%', alignSelf: "flex-start"}}>
                        <div style={{display: "flex", flexDirection: "column", width: '100%', height: '100%'}}>
                            Reason For Visit:
                            <textarea placeholder="Enter your issues..." className={styles.formName}  style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '2% 2%'}}></textarea>
                        </div>

                    </div>

                    <button className={styles.formSubmit} onClick={handleSubmit}>Submit Form</button>
                </div>
            </div>
        </main>

    )

}