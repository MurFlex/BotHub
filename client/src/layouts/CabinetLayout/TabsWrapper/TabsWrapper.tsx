import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Tabs from '@/components/cabinet/Tabs/Tabs.tsx'
import { TabProps } from '@/components/cabinet/Tabs/types.ts'

interface TabsWrapperProps {
    tabs: TabProps[];
}

const TabsWrapper: FC<TabsWrapperProps> = ({ tabs }) => (
    <>
        <Tabs tabs={tabs} />
        <Outlet />
    </>
)

export default TabsWrapper