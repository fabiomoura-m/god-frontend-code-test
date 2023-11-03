import React from 'react';
import { useCars } from '../hooks/useCars';
import { CarCard } from './CarCard';
import styles from '../../public/css/home.module.css';
import { Text } from 'vcc-ui';
import { Spacer } from './Spacer';
import PaginationDesktop from './PaginationDesktop';

export const HomeComponent: React.FC = () => {
    const { cars } = useCars();

    const onClickLeft = () => {
        let cardList = document.getElementById('card-list');
        let card = cardList?.firstElementChild;
        let cardSize = (card?.clientWidth ?? 0) + 24;
        let scrollPosition = cardList?.scrollLeft ?? 0;

        cardList?.scrollTo({ left: scrollPosition - cardSize });
    };

    const onCLickNavigate = (position: 'left' | 'right') => {
        let cardList = document.getElementById('card-list');
        let card = cardList?.firstElementChild;
        let cardSize = (card?.clientWidth ?? 0) + 24;
        let scrollPosition = cardList?.scrollLeft ?? 0;

        if (position === 'left') {
            cardList?.scrollTo({ left: scrollPosition - cardSize });
        } else {
            cardList?.scrollTo({ left: scrollPosition + cardSize });
        }
    };

    return (
        <div className={styles.homeWrapper}>
            <Text variant="cook">Todos os modelos Recharge</Text>
            <Spacer />
            <div className={styles.cardsWrapper} id="card-list">
                {cars.map(car => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
            <PaginationDesktop
                onClickLeft={() => onCLickNavigate('left')}
                onClickRight={() => onCLickNavigate('right')}
            />
        </div>
    );
};
