import { FC } from 'react'
import BotTemplate from '@/components/cabinet/BotTemplate/BotTemplate.tsx'
import styles from './Templates.module.scss'

const Templates: FC = () => <div className={styles.templates}>
    <BotTemplate isNew={true} />
    <BotTemplate image={'https://avatars.mds.yandex.net/i?id=7cb577fccf8b7354b5248cb8101dd09433fa521f-4253662-images-thumbs&n=13'} text={'test2'} />
    <BotTemplate image={'https://avatars.mds.yandex.net/i?id=7cb577fccf8b7354b5248cb8101dd09433fa521f-4253662-images-thumbs&n=13'} text={'test2'} />
    <BotTemplate image={'https://avatars.mds.yandex.net/i?id=7cb577fccf8b7354b5248cb8101dd09433fa521f-4253662-images-thumbs&n=13'} text={'test2'} />
</div>

export default Templates