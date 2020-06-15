import axios from 'axios';

export function search(searchTerm) {
    return axios.get('https://t1-rms-s120.azurewebsites.net/ApiReservation/reservationByEmail?email=' + searchTerm);
}