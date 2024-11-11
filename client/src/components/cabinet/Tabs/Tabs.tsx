import { FC, useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Tabs.module.scss';
import { TabProps, TabsProps } from '@/components/cabinet/Tabs/types';
import cn from 'classnames';

const Tabs: FC<TabsProps> = ({ tabs }) => {
    const [underlineStyle, setUnderlineStyle] = useState({ left: '0px', width: '0px' });
    const tabsRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        const updateUnderlinePosition = () => {
            if (!tabsRef.current) return;
            const activeTab = tabsRef.current.querySelector(`.${styles.activeTab}`);
            if (activeTab) {
                const { offsetLeft, offsetWidth } = activeTab as HTMLElement;
                setUnderlineStyle({ left: `${offsetLeft}px`, width: `${offsetWidth}px` });
            }
        };

        updateUnderlinePosition();
    }, [location]);

    return (
        <div className={styles.tabs} ref={tabsRef}>
            {tabs.map((tab: TabProps) => (
                <NavLink
                    key={tab.text}
                    to={tab.link}
                    className={({ isActive }) =>
                        cn(styles.tab, { [styles.activeTab]: isActive })
                    }
                >
                    {tab.text}
                </NavLink>
            ))}
            <div
                className={styles.underline}
                style={{ left: underlineStyle.left, width: underlineStyle.width }}
            />
        </div>
    );
};

export default Tabs;
