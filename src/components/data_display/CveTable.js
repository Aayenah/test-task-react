/* eslint-disable prefer-destructuring */
/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';

export default function CveTable() {
  const styles = useStyles();
  const items = useSelector((state) => state.cve.selectedYearData);

  // Table column definition
  const columns = [
    { field: 'id', headerName: 'ID', flex: 2 },
    { field: 'published_date', headerName: 'PUBLISHED DATE', flex: 2 },
    { field: 'severity', headerName: 'SEVERITY', flex: 1 },
    { field: 'description', headerName: 'DESCRIPTION', flex: 4 },
  ];

  // check if we have data before mapping
  if (!items) {
    return <h4>No data</h4>;
  }

  // Map items list into rows that match the columns
  const rows = items.map((i) => {
    const id = i.cve.CVE_data_meta.ID;
    const published_date = moment(i.publishedDate).format('DD MMMM YYYY'); // 16 February 2012
    //* some CVEs have a severity score, and some don't
    //* so this check makes sure we don't get an error
    //* when we access inner properties
    const severity = i.impact?.baseMetricV2
      ? i.impact.baseMetricV2.severity
      : null;
    const description = i.cve.description.description_data[0].value;
    return { id, published_date, severity, description };
  });

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
