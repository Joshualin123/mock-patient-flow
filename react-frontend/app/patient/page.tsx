"use client";

import * as React from 'react'
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from './patient.module.css';
import useEmblaCarousel from 'embla-carousel-react'

export function EmblaCarousel() {
    
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    const goToPrev = () => emblaApi?.scrollPrev()
    const goToNext = () => emblaApi?.scrollNext()

    const images = [
        { src: "/physician1.jpg", alt: "Physician 1" },
        { src: "/physician2.jpg", alt: "Physician 2" },
        { src: "/physician3.jpg", alt: "Physician 3" },
    ];


    const router = useRouter()

    const routeAppointment = (name: string) => {
        router.push(`./appointment?doctor=${encodeURIComponent(name)}`)
    }

  return (
    <div className="embla">

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((img, index) => (
            <div className="embla__slide" key={index}>
                <div className="embla__slide-img">
                    <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div>Sample description of this doctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</div>
                <button className="embla__booking-button" onClick={() => {routeAppointment(img.alt)}}>Book Appointment With This Doctor</button>
                </div>
            ))}
        </div>
      </div>

        <div className="embla__button-contain">
            <button className="embla__prev" onClick={goToPrev} style={{
                marginLeft: '5%',
                }}>
                {'<'}
            </button>
            <button className="embla__next" onClick={goToNext} style={{
                marginRight: '5%'
                }}>
                {'>'}
            </button>
        </div>
      
    </div>
  )
}

export default function PatientPage() {

    const router = useRouter()

    return(
        
        <main className="pageMain">
            <div className="pageNavBar">
                <div className="pageNavInfoButton" onClick={() => router.push('./patient')}>Home</div>
                <div className="pageNavInfoButton" onClick={() => router.push('./contact')}>Contact Us</div>
            </div>
            <div className={styles.patientInfoContain}>
                <div className={styles.patientPhysicians}>
                    <div style={{fontSize: '20px', marginTop: '1%'}}>About Our Physicians</div>
                    {EmblaCarousel()}
                </div>
            </div>
        </main>

    )

}