import React from 'react'
import DataTable from 'react-data-table-component';
import moment from 'moment';
import Swal from 'sweetalert2';
import axios from 'axios';

function DataSetUp(props) {
  const [rowId, setRowId] = React.useState()

  const cancelReservation = (id) => {
    Swal.fire('Cancelling Reservation....', '', 'info')

    axios
      .put(`https://api-dhejomel.azgard.co.ke/api/Booking/CancelBooking?id=${id}`)
      .then((response) => {
        props.fetchBookings()
        Swal.fire('Reservation Cancelled!', '', 'success')
      })
      .catch((e) => {
        console.log(e);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Check your Internet connection</a>'
        })
      });
  };

  const handleEdits = () => {
    Swal.fire({
      title: 'Do you want to Cancel Reservations?',
      showDenyButton: true,
      confirmButtonText: 'Edit Booking',
      denyButtonText: `Cancel Booking`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Changes are not saved', '', 'info')

      } else if (result.isDenied) {
        cancelReservation(rowId)
      }
    })
  }

  const columns = [
    {
      name: 'FullName',
      selector: row => row.fullName,
      sortable: true,
    },
    {
      name: 'PhoneNo',
      selector: row => (row.phoneNumber === "") ? "-" : row.phoneNumber,
    },
    {
      name: 'RoomType',
      selector: row => row.roomType,
    }, {
      name: 'No. of Rooms',
      selector: row => row.numberOfRooms,
      sortable: true,
    }, {
      name: 'Check In ',
      selector: row => moment(row.checkInDate).format('ll'),
      sortable: true,
    }, {
      name: 'Check Out ',
      selector: row => moment(row.checkOutDate).format('ll'),
      sortable: true,
    },

    {
      name: 'Status',
      selector: row => row.isPaid ? "Paid" : "Not Paid",
      sortable: true,
    },
    {
      name: 'Guests',
      selector: row => row.numberOfAdults + row.numberOfChildren,
      sortable: true,
    },
  ];



  return (
    <DataTable
      columns={columns}
      data={props.data}
      // selectableRows
      pagination
      highlightOnHover
      pointerOnHover
      onRowClicked={(row, event) => {
        setRowId(row.id)
        handleEdits()
      }}
    />
  )
}

export default DataSetUp