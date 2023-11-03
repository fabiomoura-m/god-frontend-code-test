import axios from 'axios';
import { useEffect, useState } from 'react';
import { Car } from '../types/car.interface';

export function useCars() {
    const [cars, setCarts] = useState<Car[]>([]);

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_API_URL + '/api/cars').then(res => {
            setCarts(res.data);
        });
    }, []);

    return { cars };
}
