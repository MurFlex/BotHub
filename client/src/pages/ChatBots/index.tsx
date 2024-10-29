import { FC } from 'react'
import Promotion from '@/components/cabinet/Promotion/Promotion.tsx'
import styles from './ChatBots.module.scss'
import Templates from '@/pages/Templates'

const ChatBots: FC = () => {
    const bots = []
    // TODO: Брать ботов с бэка и поправить потом разметку

    return <div className={styles.content}>
        <Promotion title={'Создайте бота за 5 минут'} text={'Создайте свой сценарий: автоматизируйте общение и продажи, делитесь информацией и держите клиентов на расстоянии вытянутой руки.'} />
        <h2 className={styles.title}>
            Создайте новый сценарий или используйте шаблон
        </h2>
        {bots.length === 0 && <Templates />}
    </div>
}

export default ChatBots