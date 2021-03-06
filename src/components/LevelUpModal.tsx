import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal(){

    const {level,closeModal } = useContext(ChallengesContext)

    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabens</strong>

                <p>Voce alcançou um novo level</p>

                <button type="button">
                    <img src="/icons/close.svg" alt="Fechar modal" onClick={closeModal}/>
                </button>
            </div>
        </div>
    )
}