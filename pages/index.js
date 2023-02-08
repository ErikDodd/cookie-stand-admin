import Head from 'next/head';
import Header from '../components/Header';
import Form from '../components/Form';
import Main from '../components/Main';
import Footer from '../components/Footer';
// import Head from '../components/Head';

export default function Home() {
  function questionsAskedHandler(event) {
    event.preventDefault();
    alert(event.target.question.value)
  }
  return (
    <>
      <Head/>
      <Header/> 
      <Main/>
      <Footer/>
    </>
  )
}
// 
