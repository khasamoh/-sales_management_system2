import React from 'react';
import { CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol, CDBContainer } from 'cdbreact';

const Dtable = () => {
  function testClickEvent(param) {
    alert('Row Click Event');
  }

  const data = () => {
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
        },
        {
          label: 'Position',
          field: 'position',
          width: 270,
        },
        {
          label: 'Office',
          field: 'office',
          width: 200,
        },
        {
          label: 'Age',
          field: 'age',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Start date',
          field: 'date',
          sort: 'disabled',
          width: 150,
        },
        {
          label: 'Salary',
          field: 'salary',
          sort: 'disabled',
          width: 100,
        },
      ],
      rows: [
        {
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
          salary: '$320',
          clickEvent: () => testClickEvent(1),
        },
        {
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo',
          age: '63',
          date: '2011/07/25',
          salary: '$170',
        },
        {
          name: 'Ashton Cox',
          position: 'Junior Technical Author',
          office: 'San Francisco',
          age: '66',
          date: '2009/01/12',
          salary: '$86',
        },
        {
          name: 'Cedric Kelly',
          position: 'Senior Javascript Developer',
          office: 'Edinburgh',
          age: '22',
          date: '2012/03/29',
          salary: '$433',
        },
        {
          name: 'Airi Satou',
          position: 'Accountant',
          office: 'Tokyo',
          age: '33',
          date: '2008/11/28',
          salary: '$162',
        },
        {
          name: 'Brielle Williamson',
          position: 'Integration Specialist',
          office: 'New York',
          age: '61',
          date: '2012/12/02',
          salary: '$372',
        },
        {
          name: 'Herrod Chandler',
          position: 'Sales Assistant',
          office: 'San Francisco',
          age: '59',
          date: '2012/08/06',
          salary: '$137',
        },
        {
          name: 'Rhona Davidson',
          position: 'Integration Specialist',
          office: 'Tokyo',
          age: '55',
          date: '2010/10/14',
          salary: '$327',
        },
        {
          name: 'Colleen Hurst',
          position: 'Javascript Developer',
          office: 'San Francisco',
          age: '39',
          date: '2009/09/15',
          salary: '$205',
        },
        {
          name: 'Sonya Frost',
          position: 'Software Engineer',
          office: 'Edinburgh',
          age: '23',
          date: '2008/12/13',
          salary: '$103',
        },
      ],
    };
  };
  return (
    <CDBContainer>
      <CDBCard>
        <CDBCardBody>
          <CDBDataTable
            striped
            bordered
            hover
            scrollY
            maxHeight="50vh"
            data={data()}
            materialSearch
          />
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};

export default Dtable;