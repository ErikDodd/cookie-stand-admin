import Form from '../components/Form';
// import ReportTable from '../ReportTable';

export default function Main(props) {
    return (
        <main className='bg-gray-200'>
            <h2 className='flex w-3/4 p-2 mx-auto my-4 bg-blue-400 justify-center rounded-lg mb-0'> Create Cookie Stand</h2>
            <Form questionsAskedHandler={props.questionsAskedHandler} />
            {/* <ReportTable/> */}
            <p className='flex w-3/4 p-2 mx-auto my-4 rounded-lg justify-center'> Report Table Coming Soon...</p>
            <p className='flex justify-center'> {'{"location": "Barcelona, "minCustomers": 2, "maxCustomers":4, "avgCookies": 2.5}'} </p>
        </main>
    );
}