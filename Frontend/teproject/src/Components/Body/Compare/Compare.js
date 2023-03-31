import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'
import { getCompareApi } from '../../../Api/CompareApi'
import CompareChart from '../Chart/CompareChart'


const mapStateToProps = (state) => ({})

const Compare = (props) => {

  const [open, setOpen] = useState(true)
  const [spinner, setSpinner] = useState(false)
  const [chartData, setChartData] = useState({
    labels: [],
    data1: [],
    data2: []
  })
  const [message, setMessage] = useState('')

  const toggle = () => setOpen(!open)

  return (
    <div>
      <Alert color='danger' toggle={toggle} isOpen={open}>Available country for free mode - <strong>Mexico, Sweden, New Zeeland, Thailand</strong></Alert>

      <div className="container">
        <Formik
          initialValues={{
            country1: 'mexico',
            country2: 'mexico',
            indicator: 'gdp',
          }}

          onSubmit={(values) => {
            getCompareApi(values.country1, values.country2, values.indicator).then(data => {

              if (data.error) { setMessage(data.Message) }
              else {
                setMessage(data.Message)
                setChartData({
                  ...chartData,
                  labels: data.value.labels,
                  data1: data.value.data1,
                  data2: data.value.data2,
                  country1: values.country1,
                  country2: values.country2
                })
              }
            })
            // .catch(err => { console.log(err) })
          }}

        >

          {({ handleChange, handleSubmit, values }) => <div>

            <form onSubmit={handleSubmit} action="">

              <div className='border p-4 rounded bg-light'>
                <div className="row">
                  <div className="col-md-4">
                    <select className='form-control' name="country1" onChange={handleChange} value={values.country1} id="">
                      <option value="mexico">Mexico</option>
                      <option value="thailand">Thailand</option>
                      <option value="sweden">Sweden</option>
                      <option value="newzealand">New Zealand</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <select className='form-control' name="country2" onChange={handleChange} value={values.country2} id="">
                      <option value="mexico">Mexico</option>
                      <option value="thailand">Thailand</option>
                      <option value="sweden">Sweden</option>
                      <option value="newzealand">New Zealand</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <select className='form-control' name="indicator" onChange={handleChange} value={values.indicator} id="">
                      <option value="gdp">GDP</option>
                      <option value="population">Population</option>
                    </select>
                  </div>
                </div>

                <div className='text-center mt-4'>
                  <button className='btn btn-success' onSubmit={handleSubmit} type="submit">Compare</button>
                  <div className='text-danger'>{message}</div>
                </div>
              </div>

            </form>
          </div>}

        </Formik>
      </div>

      <div>
        <CompareChart data={chartData} />
      </div>

    </div>
  )
}



export default connect(mapStateToProps)(Compare)