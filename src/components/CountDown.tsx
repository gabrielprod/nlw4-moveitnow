import { useState, useEffect } from 'react'
import styles from '../styles/components/CountDown.module.css'

let countDownTimeOut: NodeJS.Timeout

export function CountDown(){
    const [time, setTime] = useState(0.1*60)
    const [IsActive, setIsAcvtive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time/60) 
    const seconds = time% 60

    const [minuteLeft,minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft,secondRight] = String(seconds).padStart(2, '0').split('')

    function startCountDown(){
        setIsAcvtive(true)
    }

    function resetCountDown(){
        clearTimeout(countDownTimeOut)
        setIsAcvtive(false)
        setTime(25*60)
    }

    useEffect(() => {
        if(IsActive && time>0){
            countDownTimeOut = setTimeout(()=> {
                setTime(time - 1)
            },1000)
        }else if(IsActive && time === 0){
            setHasFinished(true)
            setIsAcvtive(false)
        }
    },[IsActive, time])

    return(
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                    disabled
                    className={styles.countDownButton} 
                > 
                 Ciclo encerrado
                </button>
            ): (
                <>

                {IsActive ? (
                <button 
                    type="button"
                    className={`${styles.countDownButton} ${styles.countDownButtonActive}`} 
                    onClick={resetCountDown}
                > 
                    Abandonar ciclo 
                </button>
                ) : (
                <button 
                type="button" 
                className={styles.countDownButton} 
                onClick={startCountDown}
                >
                    Iniciar um ciclo
                </button>
                )}

                </>
            )}
        </div>
    )
}