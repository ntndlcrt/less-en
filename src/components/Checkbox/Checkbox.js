import { useState, useEffect } from 'react'
import parse from 'html-react-parser'

import styles from './Checkbox.module.scss'

export default function Checkbox({checkCompleted, domain, field, id, name, details, tips}) {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        let checked = false
        let checkedSteps

        if(checkedSteps = JSON.parse(localStorage.getItem('checkedSteps'))) {
            if(checkedSteps.find(step => step === `${domain}_${field}_${id}`)) {
                checked = true
            }
        }

        setChecked(checked)
    }, [domain, field, id])

    function handleClick() {
        let checkedSteps = JSON.parse(localStorage.getItem('checkedSteps')) ?? []

        if(checked) {
            let stepIndex = checkedSteps.indexOf(`${domain}_${field}_${id}`)
            checkedSteps.splice(stepIndex, 1)
            localStorage.setItem('checkedSteps', JSON.stringify(checkedSteps))
        } else {
            checkedSteps.push(`${domain}_${field}_${id}`)
            localStorage.setItem('checkedSteps', JSON.stringify(checkedSteps))
        }

        setChecked(!checked)
        checkCompleted()
    }

    return (
        <div className={styles.checkbox}>
            <button className={`${styles.checkboxButton} ${checked ? styles.checkboxButtonChecked : ''}`} onClick={() => {handleClick()}}></button>
            <h2 className={styles.checkboxTitle}>{name}</h2>
            {details &&
                <p className={styles.checkboxContent}>{details}</p>
            }
            {tips &&
                tips.map((tip) => {
                    return (
                        <div className={styles.checkboxTip}>
                            <div className={`label ${styles.checkboxTipLabel}`}>TIP</div>
                            <p className="text-20">{parse(tip)}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}