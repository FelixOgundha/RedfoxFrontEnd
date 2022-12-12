import React from "react";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import "rc-pagination/assets/index.css";
// import { allData } from "./constants";
import Pagination from "rc-pagination";
import "../assets/images/style.css";
import EditUserModal from "../components/EditUserModal";
import axios from "axios";
import { toast, Toaster } from 'react-hot-toast';
import Example from "../components/ujinga";

const tableHead = {
  firstName: "First Name",
  lastName
    : "Last Name",
  nationalId
    : "Id Number",
  email
    : "Email Address",

};

const Table = () => {
  const countPerPage = 10;
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [allData, setAllData] = React.useState([]);
  const [userData, setUserData] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [collection, setCollection] = React.useState(
    []
  );
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const searchData = React.useRef(
    throttle(val => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      fetchMembers()
      const data = cloneDeep(
        allData
          .filter(item => item.name.toLowerCase().indexOf(query) > -1)
          .slice(0, countPerPage)
      );
      setCollection(data);
    }, 400)
  );



  const updatePage = p => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(allData.slice(from, to)));
  };

  const tableRows = rowData => {
    const { key, index } = rowData;
    // console.log('row data', rowData);

    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {

      return <td key={i} >{key[keyD]}</td>;
    });

    return <tr key={index} onClick={() => {
      handleShow();
      fetchUser(rowData.key.id)

    }}>{columnData}</tr>;
  };

  const tableData = () => {
    return collection.map((key, index) => tableRows({ key, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <td key={index}>{title}</td>
    ));
  };

  const fetchMembers = async () => {
    await axios
      .get(`https://localhost:7155/api/Auth/GetUsers`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
      .then(response => {
        const data = response.data
        setAllData([data])
        setCollection(cloneDeep(data.slice(0, countPerPage)))
        console.log(data)
      })
      .catch(error => {
        if (error.toJSON().message === 'Network Error') {
          toast.error('Network Error. Check Internet Connection')
        }
        else {
          console.log(error.response?.data?.message)
        }
      })
  }

  const fetchUser = (x) => {

    axios
      .get(`https://localhost:7155/api/Auth/GetUser?id=${x}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
      .then(response => {
        const data = response.data

        // console.log(data);
        setUserData(data)

        // console.log('my user-', userData);
      })
      .catch(error => {

        console.log(error.response?.data?.message)

      })
  }

  // React.useEffect(() => {

  //   console.log(allData);
  // }, [])
  React.useEffect(() => {
    fetchMembers()

    if (!value) {
      updatePage(1);
    } else {
      searchData.current(value);
    }
  }, [value]);

  return (
    <>
      <div class="search">
        <input
          placeholder="Search Campaign"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>{headRow()}</tr>
        </thead>
        <tbody className="trhover">{tableData()}</tbody>
      </table>
      <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={allData.length}
      />

      <EditUserModal
        open={open}
        handleClose={() => { setOpen(false); setUserData([]) }}
        userData={userData}
      />
      <Example
        show={show}
        onHide={handleClose}
        userData={userData}
      />

    </>
  );
};
export default Table;
