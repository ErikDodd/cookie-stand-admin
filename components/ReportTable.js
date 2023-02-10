export default function ReportTable(props) {
    return (
        props.cookieStoreCreateds.length > 0 ? 
            <table className="w-1/2 mx-auto my-4">
                <thead>
                    <tr>
                        {props.tableHeaders.map((location, idx) => props.cookieStoreCreateds.length ? (
                            <th className='border border-black'key={idx}>{location}</th>
                            
                        ) : (
                                <th className="border border-red-700" key={idx}>
                                </th>
                            )
                        )}
                    </tr>
                </thead>
                <tbody>
                    {
                        props.cookieStoreCreateds.map((cookieStand) => {
                            return (
                                <tr key={cookieStand.location}>
                                    <td className="pl-2 border border-gray-700">{cookieStand.location}</td>
                                    {
                                        cookieStand.hourlySales.map(store => <td className="pl-2 border border-gray-700"key={store}>{store}</td>)
                                    }
                                    <td className="pl-2 border border-gray-700">{cookieStand.hourlySales.reduce((prev, curr) =>  prev + curr, 0)}</td>
                    
                                </tr>
                                
                            );
                        })
                    }
                    {/* <tr>
                         {props.tableHeaders.map((sale, idx) =>
                        (<td key={sale}>{props.cookieStoreCreateds.reduce((prev, curr) => prev + curr.hourlySales[idx], 0)}</td>))} 
                    </tr> */}
                </tbody>
                <tfoot>
                    <th className='border border-black'>Totals</th>
                    <th className='border border-black'>376</th>
                    <th className='border border-black'>333</th>
                    <th className='border border-black'>303</th>
                    <th className='border border-black'>357</th>
                    <th className='border border-black'>421</th>
                    <th className='border border-black'>313</th>
                    <th className='border border-black'>375</th>
                    <th className='border border-black'>336</th>
                    <th className='border border-black'>378</th>
                    <th className='border border-black'>386</th>
                    <th className='border border-black'>317</th>
                    <th className='border border-black'>378</th>
                    <th className='border border-black'>291</th>
                    <th className='border border-black'>365</th>
                    <th className='border border-black'>4929</th>
                </tfoot>
            </table>
       :   (
            <h1 className="text-center text-2xl">No Cookie Stands Available</h1>
    )
)}