/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
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
  const styles = useStyles();

  const data = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Aug',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Sep',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Oct',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Nov',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Dec',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend
          align="right"
          verticalAlign="middle"
          layout="vertical"
          height={36}
          iconType="circle"
          margin={{ top: 0, left: 20, right: 0, bottom: 0 }}
        />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
      </LineChart>
    </ResponsiveContainer>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    // height: '100%',
    // width: '100%',
  },
}));
