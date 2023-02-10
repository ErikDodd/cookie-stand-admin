import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function CookieStandAdmin() {
    const [cookieStoreCreateds, setcookieStoreCreateds] = useState([])
    const tableHeaders = ["Locations", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "Totals"]


    function cookieFormHandler(event) {
        event.preventDefault();
        alert(event.target.location.value)
        

        const cookieStoreCreated = {
            location: event.target.location.value,
            minCust: event.target.minCust.value,
            maxCust: event.target.maxCust.value,
            avgCookie: event.target.avgCookie.value,
            hourlySales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
        }

        setcookieStoreCreateds([...cookieStoreCreateds, cookieStoreCreated]);
    }

    function getLatestCookieStand() {
        if (cookieStoreCreateds.length === 0) {
            return "No Cookie Stands Available";
        }
        return cookieStoreCreateds[cookieStoreCreateds.length - 1].location;
    }

    
    return (
        <>
            <Head />
            <Header />
            <Main cookieFormHandler={cookieFormHandler} tableHeaders={tableHeaders} cookieStoreCreateds={cookieStoreCreateds}/>
            <Footer />
        </>
    );
}