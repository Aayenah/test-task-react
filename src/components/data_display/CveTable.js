/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { DataGrid } from '@material-ui/data-grid';

export default function CveTable() {
  const styles = useStyles();

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'published_date', headerName: 'PUBLISHED DATE', flex: 1 },
    { field: 'severity', headerName: 'SEVERITY', flex: 1 },
    { field: 'description', headerName: 'DESCRIPTION', flex: 4 },
  ];

  const rows = [
    { id: 1, published_date: 'Snow', severity: 'Jon', description: 35 },
    { id: 2, published_date: 'Lannister', severity: 'Cersei', description: 42 },
    { id: 3, published_date: 'Lannister', severity: 'Jaime', description: 45 },
    { id: 4, published_date: 'Stark', severity: 'Arya', description: 16 },
    {
      id: 5,
      published_date: 'Targaryen',
      severity: 'Daenerys',
      description: 'asdasds',
    },
    { id: 6, published_date: 'Melisandre', severity: null, description: 150 },
    { id: 7, published_date: 'Clifford', severity: 'Ferrara', description: 44 },
    { id: 8, published_date: 'Frances', severity: 'Rossini', description: 36 },
    { id: 9, published_date: 'Roxie', severity: 'Harvey', description: 65 },
  ];

  return (
    <div className={styles.container}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    height: '100%',
    width: '100%',
  },
}));
