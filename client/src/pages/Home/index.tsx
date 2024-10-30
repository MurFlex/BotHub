import { FC } from 'react'
import DropdownMenu from '../../components/base/DropdownMenu/DropdownMenu'
import { IItem } from '../../components/base/DropdownMenu/MenuItem/MenuItem.props'

const Home: FC = () => {
    const items: IItem[] = [
        { label: 'Home', value: '/home' },
        { label: 'Login', value: '/login' },
        { label: 'Cabinet', value: '/cabinet' },
        { label: 'Rome', value: '/' }
    ]
    return (
        <>
            <h1>Home</h1>
            <DropdownMenu label={'Выбор страницы'} items={items} />
        </>
    )
}

export default Home
