import React from 'react'
import DataTable from 'react-data-table-component';
import moment from 'moment';
import Swal from 'sweetalert2';
import axios from 'axios';

function ConferenceDataSetup(props) {

  const columns = [
    {
      name: 'FullName',
      selector: row => row.fullName,
      sortable: true,
    },
    {
      name: 'Phone Number',
      selector: row => "0718627569",
    },
    {
      name: 'Email',
      selector: row => row.email,
    }, {
      name: 'Check In ',
      selector: row => moment(row.checkInDate).format('ll'),
      sortable: true,
    }, {
      name: 'Check Out ',
      selector: row => moment(row.checkOutDate).format('ll'),
      sortable: true,
    }, {
      name: 'Payment Option ',
      selector: row => 'Invoice',
      sortable: true,
    },



  ];


  return (
    <div>
      <DataTable
        columns={columns}
        data={props.data}
        // selectableRows
        pagination
        highlightOnHover
        pointerOnHover
        onRowClicked={(row, event) => {
          // setRowId(row.id)
          // handleEdits()
        }}
      />
    </div>

  )
}

export default ConferenceDataSetup