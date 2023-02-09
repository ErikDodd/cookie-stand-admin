export default function ReportTable(props) {
    return (
        props.cookieStoreCreateds.length > 0 ?
            <table className="w-1/2 mx-auto my-4">
                <thead>
                    <tr>
                    
                        <th className='border border-black'>Location</th>
                        <th className='border border-black'>6am</th>
                        <th className='border border-black'>7am</th>
                        <th className='border border-black'>8am</th>
                        <th className='border border-black'>9am</th>
                        <th className='border border-black'>10am</th>
                        <th className='border border-black'>11am</th>
                        <th className='border border-black'>12pm</th>
                        <th className='border border-black'>1pm</th>
                        <th className='border border-black'>2pm</th>
                        <th className='border border-black'>3pm</th>
                        <th className='border border-black'>4pm</th>
                        <th className='border border-black'>5pm</th>
                        <th className='border border-black'>6pm</th>
                        <th className='border border-black'>7pm</th>
                        <th className='border border-black'>Totals</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.cookieStoreCreateds.map((cookieStand) => {
                            return (
                                <tr key={cookieStand.location}>
                                    <td className="pl-2 border border-gray-700">{cookieStand.location}</td>
                                    <td className="pl-2 border border-gray-700">{cookieStand.minCust}</td>
                                    <td className="pl-2 border border-gray-700">{cookieStand.maxCust}</td>
                                    <td className="pl-2 border border-gray-700">{cookieStand.avgCookie}</td>
                                </tr>
                            );
                        })
                    }
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
    )   :   (
            <h1>No Cookie Stands Available</h1>
    );
}