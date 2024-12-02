import { FC } from 'react'
import { BotTemplateProps } from './types.ts'
import styles from './BotTemplate.module.scss'
import cn from 'classnames'

const BotTemplate: FC<BotTemplateProps> = ({ image, text, isNew}) => {
    if(isNew) {
        return <div className={styles.template}>
            <div className={styles.create}>
                <div className={styles.plus}>
                    <svg width="50" height="50">
                        <use href="#plus-icon"/>
                    </svg>
                </div>
                <p>Новый сценарий</p>
            </div>
        </div>
    }

    return <div className={styles.template}>
        <img className={styles.image} src={image} alt={text}/>
        <div className={styles.info}>
            <p className={styles.text}>
                {text}
            </p>
            <div className={styles.actions}>
                <button className={cn(styles.apply, styles.action)}> Использовать</button>
                <button className={cn(styles.preview, styles.action)}>
                    <svg width="10" height="7">
                        <use href="#preview-icon"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
}

export default BotTemplate