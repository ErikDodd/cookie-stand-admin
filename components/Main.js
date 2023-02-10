import Form from '../components/Form';
import ReportTable from '../components/ReportTable';

export default function Main(props) {
    return (
        <main>
            <h2 className='flex w-3/4 p-2 mx-auto my-4 bg-blue-400 justify-center rounded-lg mb-0'> Create Cookie Stand</h2>
            <Form cookieFormHandler={props.cookieFormHandler} />
            <ReportTable tableHeaders={props.tableHeaders} cookieStoreCreateds={props.cookieStoreCreateds}/>
        </main>
    );
}