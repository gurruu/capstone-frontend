import React from 'react'
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import {format, parseISO, subDays} from "date-fns";
import PerformanceContainer from './PerformanceContainer';
import "./PerformanceContainer.css";

const data = [];
for (let num = 14; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random(),
  });
}
 function GoldGraph() {
  return (
    <>
    <PerformanceContainer/>
    <ResponsiveContainer className='gold-graph_contain' width="90%" height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#47ec6a" stopOpacity={0.5} />
            <stop offset="75%" stopColor="#47ec6a" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area dataKey="value" stroke="#47ec6a" fill="url(#color)" />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
           
            if (date.getDate() % 10 === 0) {
              return format(date, "MMM, d");
            }
            return ""
            // return format(date, "MMM, d");
          }}
        />

        <YAxis
          datakey="value"
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={(number) => `₹${number.toFixed(2)*10000}`}
        />

        <Tooltip content={<CustomTooltip />} />

        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
    </>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="tooltip">
        <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
        <p>₹{payload[0].value.toFixed(2)*10000} </p>
      </div>
    );
  }
  return null;
}

export default GoldGraph