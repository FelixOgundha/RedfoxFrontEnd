import { Chip, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { Table } from 'react-bootstrap'

function Dashboard() {
  return (
    <div className='px-4 mt-3 container'>
      <Typography variant="h4" component="h2">
        Welcome, Felix Ogundha
      </Typography>
      <Typography variant="subtitle2" component="h2">
        Today, 6th July 2023
      </Typography>
      <div className="d-flex  py-4 flex-grow-1">
        <Paper elevation={3} className='w-50 p-4'>
          <Typography variant="h5" component="h2">
            Conference Rooms
          </Typography>
          <Divider />
          <Chip label="Booked -  1/1 " className='my-3 bg-success text-white' />
          <Chip label="10 Guest" className='my-3 bg-warning text-dark mx-2' />
        </Paper>
        <Paper elevation={3} className='w-50 mx-4 p-4'>
          <Typography variant="h5" component="h2">
            Hotel Rooms
          </Typography>
          <Table className="table">
            <tbody>
              <tr>
                <td>VIP</td>
                <td><span className="badge rounded-pill bg-warning text-dark">Booked - 2/5</span></td>
              </tr>
              <tr>
                <td>Superior</td>
                <td><span className="badge rounded-pill bg-info text-dark">Booked - 3/5</span></td>
              </tr>
              <tr>
                <td>Executive</td>
                <td><span className="badge rounded-pill bg-success">Booked - 4/5</span></td>
              </tr>
              <tr>
                <td>Guests</td>
                <td><span className="badge rounded-pill bg-secondary">{"  "}40 Guests{"  "}</span></td>
              </tr>

            </tbody>
          </Table>
          <Divider />

        </Paper>
      </div>
    </div>
  )
}

export default Dashboard