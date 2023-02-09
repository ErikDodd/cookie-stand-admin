import Head from 'next/head';
import { cookieData } from '../data';
import { useState } from 'react';
import Header from '../components/Header';
// import Form from '../components/Form';
import Main from '../components/Main';
import Footer from '../components/Footer';
// import Head from '../components/Head'

export default function CookieStandAdmin() {
    const [cookieStoreCreateds, setcookieStoreCreateds] = useState([])
    const tableHeaders = ["Locations", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "Totals"]

    function cookieFormHandler(event) {
        event.preventDefault();
        alert(event.target.location.value)
        // console.log(event.target.location.value);

        const cookieStoreCreated = {
            location: event.target.location.value,
            minCust: event.target.minCust.value,
            maxCust: event.target.maxCust.value,
            avgCookie: event.target.avgCookie.value,
        }

        setcookieStoreCreateds([...cookieStoreCreateds, cookieStoreCreated]);
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