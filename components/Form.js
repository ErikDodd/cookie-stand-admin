export default function Form(props) {
    return (
        <form className='flex w-3/4 p-2 mx-auto my-4 bg-blue-400 rounded-lg mt-0' onSubmit={props.questionsAskedHandler}>
            <div className='block rounded-lg ' >
                <div className="block p-3">
                    <label className='text-xs'>Location</label>
                    <input name='Location' id='input_element'
                        className='flex-auto pl-1 w-700' />
                </div>
                <div className="p-3" id='form_questions'>
                    <div className='input_boxes'>
                        <label className='text-xs'>Minimum Customers per Hour</label>
                        <input name='Minimum Customers per Hour' className='flex-auto pl-1' />
                    </div>
                    <div className='input_boxes'>
                        <label className='text-xs'>Maximum Customers per Hour</label>
                        <input name='Maximum Customers per Hour' className='flex-auto pl-1' />
                    </div>
                    <div className='input_boxes'>
                        <label className='text-xs'>Average Cookies per Sale</label>
                        <input name='Maximum Customers per Hour' className='flex-auto pl-1' />
                    </div>
                    <div>
                        <button className='px-14 py-4 rounded-lg  bg-green-500 text-black '>Create</button>
                    </div>
                </div>
            </div>
        </form>
    );
}