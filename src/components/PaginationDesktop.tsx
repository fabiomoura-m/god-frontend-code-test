import {IconButton } from 'vcc-ui';

import styles from '../../public/css/components/paginationDesktop.module.css'

interface PaginationDesktopProps {
    onClickLeft: () => void;
    onClickRight: () => void;
}

export default function PaginationDesktop({
    onClickLeft,
    onClickRight
}: PaginationDesktopProps) {
    return (
        <div className={styles.btnWrapper}>
            <IconButton
                onClick={onClickLeft}
                aria-label="left"
                iconName="navigation-chevronback"
                variant="outline"
            />
            <IconButton
                onClick={onClickRight}
                aria-label="right"
                iconName="navigation-chevronforward"
                variant="outline"
            />
        </div>
    );
}
