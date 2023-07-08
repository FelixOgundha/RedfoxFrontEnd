import React from 'react'
import DataTable from 'react-data-table-component';
import moment from 'moment';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Rating } from '@mui/material';

function CommentSetup(props) {

  const columns = [
    {
      name: 'FullName',
      selector: row => row.fullName,
      sortable: true,
    },
    {
      name: 'Comments',
      selector: row => row.comments,
    },
    {
      name: 'Ratings',
      selector: row => <Rating name="read-only" value={row.rating} readOnly />,
    }, {
      name: 'Posted On ',
      selector: row => moment(row.updatedOn).fromNow(),
      sortable: true,
    }
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

export default CommentSetup