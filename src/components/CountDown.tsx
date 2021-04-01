<<<<<<< HEAD
import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
=======
>>>>>>> parent of 8d6dff3 (feat: adding the challengeBox component)
import styles from '../styles/components/CountDown.module.css'

export function CountDown(){
<<<<<<< HEAD

    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(0.1*60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time/60) 
    const seconds = time% 60

    const [minuteLeft,minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft,secondRight] = String(seconds).padStart(2, '0').split('')

    function startCountDown(){
        setIsActive(true)
    }

    function resetCountDown(){
        clearTimeout(countDownTimeOut)
        setIsActive(false)
        setTime(25*60)
    }

    useEffect(() => {
        if(isActive && time>0){
            countDownTimeOut = setTimeout(()=> {
                setTime(time - 1)
            },1000)
        }else if(isActive && time === 0){
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }
    },[isActive, time])

=======
>>>>>>> parent of 8d6dff3 (feat: adding the challengeBox component)
    return(
        <div className={styles.countDownContainer}>
            <div>
                <span>2</span>
                <span>5</span>
            </div>
            <span>:</span>
            <div>
                <span>0</span>
                <span>0</span>
            </div>
<<<<<<< HEAD

            {hasFinished ? (
                <button 
                    disabled
                    className={styles.countDownButton} 
                > 
                 Ciclo encerrado
                </button>
            ): (
                <>

                {isActive ? (
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
=======
>>>>>>> parent of 8d6dff3 (feat: adding the challengeBox component)
        </div>
    )
}