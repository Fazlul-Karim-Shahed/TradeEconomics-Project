import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'

const mapStateToProps = (state) => {
    return {
        historyArray: state.historyArray,
        authenticated: state.authenticated
    }
}

const History = (props) => {

    let hisShow
    if (props.historyArray.length === 0) hisShow = <h5 className='text-center p-5'>{props.authenticated ? 'No history found' : 'Please login'}</h5>
    if (props.historyArray && props.historyArray.length != 0) {
        hisShow = props.historyArray.map((item, index) => {
            return <tr className='text-center'>
                <th>{index + 1}</th>
                <td className='text-capitalize'>{item.country_1}</td>
                <td className='text-capitalize'>{item.country_2}</td>
                <td className='text-uppercase'>{item.indicator}</td>
                <td>{item.time}</td>
            </tr>
        })
    }


    return (
        <div className='my-5'>
            <hr className='mx-5 mt-5 text-secondary shadow-lg' />
            <h2 className='text-center p-3 my-4'>History</h2>

            <Table className='container' hover>
                <thead className='text-center'>
                    <tr>
                        <th>#</th>
                        <th>Country_1</th>
                        <th>Country_2</th>
                        <th>Indicator</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>{hisShow}</tbody>
            </Table>


        </div>
    )
}




export default connect(mapStateToProps)(History)