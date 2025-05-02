import React from 'react'
import DataTable from 'react-data-table-component';
// import doc from './basic.mdx';
const Table = ({data}) => {


  

  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'First Name',
      selector: row => row.
      username,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: row => row.lastName,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Phone No.',
      selector: row => row.phone,
      sortable: true,
    },
    {
      name: 'Birth Date',
      selector: row => row.birthDate,
      sortable: true,
    },

  ];

  return (
      <div>
      <DataTable title="Users Data :" fixedHeader columns={columns} data={data} pagination />
    </div>
  )
}

export default Table

