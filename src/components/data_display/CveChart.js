/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  Legend,
} from 'recharts';

export default function CveChart() {
  const selectedYearData = useSelector((state) => state.cve.selectedYearData);
  const minorVisible = useSelector((state) => state.cve.minorVisible);
  const majorVisible = useSelector((state) => state.cve.majorVisible);
  const criticalVisible = useSelector((state) => state.cve.criticalVisible);
  const monthData = [{ jan: {} }];

  selectedYearData.forEach((i) => {
    monthData.splice(moment(i.publishedDate).month(), 0, i);
  });

  function getDataforMonth(month, severity) {
    return selectedYearData.filter(
      (i) =>
        i.impact?.baseMetricV2?.severity === severity &&
        moment(i.publishedDate).month() === month,
    );
  }

  const data = [
    {
      month: 'Jan',
      minor: getDataforMonth(0, 'LOW').length,
      major: getDataforMonth(0, 'MEDIUM').length,
      critical: getDataforMonth(0, 'HIGH').length,
    },
    {
      month: 'Feb',
      minor: getDataforMonth(1, 'LOW').length,
      major: getDataforMonth(1, 'MEDIUM').length,
      critical: getDataforMonth(1, 'HIGH').length,
    },
    {
      month: 'Mar',
      minor: getDataforMonth(2, 'LOW').length,
      major: getDataforMonth(2, 'MEDIUM').length,
      critical: getDataforMonth(2, 'HIGH').length,
    },
    {
      month: 'Apr',
      minor: getDataforMonth(3, 'LOW').length,
      major: getDataforMonth(3, 'MEDIUM').length,
      critical: getDataforMonth(3, 'HIGH').length,
    },
    {
      month: 'May',
      minor: getDataforMonth(4, 'LOW').length,
      major: getDataforMonth(4, 'MEDIUM').length,
      critical: getDataforMonth(4, 'HIGH').length,
    },
    {
      month: 'Jun',
      minor: getDataforMonth(5, 'LOW').length,
      major: getDataforMonth(5, 'MEDIUM').length,
      critical: getDataforMonth(5, 'HIGH').length,
    },
    {
      month: 'Jul',
      minor: getDataforMonth(6, 'LOW').length,
      major: getDataforMonth(6, 'MEDIUM').length,
      critical: getDataforMonth(6, 'HIGH').length,
    },
    {
      month: 'Aug',
      minor: getDataforMonth(7, 'LOW').length,
      major: getDataforMonth(7, 'MEDIUM').length,
      critical: getDataforMonth(7, 'HIGH').length,
    },
    {
      month: 'Sep',
      minor: getDataforMonth(8, 'LOW').length,
      major: getDataforMonth(8, 'MEDIUM').length,
      critical: getDataforMonth(8, 'HIGH').length,
    },
    {
      month: 'Oct',
      minor: getDataforMonth(9, 'LOW').length,
      major: getDataforMonth(9, 'MEDIUM').length,
      critical: getDataforMonth(9, 'HIGH').length,
    },
    {
      month: 'Nov',
      minor: getDataforMonth(10, 'LOW').length,
      major: getDataforMonth(10, 'MEDIUM').length,
      critical: getDataforMonth(10, 'HIGH').length,
    },
    {
      month: 'Dec',
      minor: getDataforMonth(11, 'LOW').length,
      major: getDataforMonth(11, 'MEDIUM').length,
      critical: getDataforMonth(11, 'HIGH').length,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="month" interval={0} />
        <Tooltip />
        <Legend
          align="right"
          verticalAlign="middle"
          layout="vertical"
          height={36}
          iconType="circle"
        />
        <CartesianGrid stroke="#f5f5f5" />
        {minorVisible && (
          <Line type="monotone" dataKey="minor" stroke="#387908" yAxisId={0} />
        )}
        {majorVisible && (
          <Line type="monotone" dataKey="major" stroke="#ff7300" yAxisId={1} />
        )}
        {criticalVisible && (
          <Line
            type="monotone"
            dataKey="critical"
            stroke="#8A2BE2"
            yAxisId={2}
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
}
