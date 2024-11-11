import { FC, useState } from 'react'
import { PromotionProps } from '@/components/cabinet/Promotion/types.ts'
import styles from './Promotion.module.scss'

const Promotion: FC<PromotionProps> = ({ title, text }) => {
    const [isVisible, setIsVisible] = useState(true)

    const handleClose = () => {
        setIsVisible(false) // TODO: Потом баннеры будут меняться и нужно как-то обрабатывать это либо в сторедже, либо в бд
    }

    if (!isVisible) {
        return null
    }

    return <div className={styles.promotion}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <span className={styles.exit} onClick={handleClose}>
            <svg width='12' height='12'>
                <use href='#exit-icon'/>
            </svg>
        </span>
    </div>
}
export default Promotion