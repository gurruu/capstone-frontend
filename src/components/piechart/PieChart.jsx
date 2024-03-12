import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

const coins = [
  { symbol: "GOLD", amount: 200, color: "#BBCFAC", inUSD: 1.48 },
  { symbol: "MF", amount: 5, color: "#003943", inUSD: 37.6 },
  { symbol: "SIP", amount: 0.005, color: "#2B5D5C", inUSD: 3 },
  { symbol: "BONDS", amount: 1, color: "#558375", inUSD: 370 },
];

export default function PieChart() {
  const [active, setActive] = useState(null);
  const width = 200;
  const half = width / 2;

  return (
    <div >
    <main>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={coins}
            pieValue={(data) => data.amount * data.inUSD}
            outerRadius={half}
            innerRadius={({ data }) => {
              const size = active && active.symbol == data.symbol ? 12 : 8;
              return half - size;
            }}
            padAngle={0.01}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g
                    key={arc.data.symbol}
                    onMouseEnter={() => setActive(arc.data)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <path d={pie.path(arc)} fill={arc.data.color}></path>
                  </g>
                );
              });
            }}
          </Pie>

          {active ? (
            <>
              <Text textAnchor="middle" fill="#413d3d" fontSize={40} dy={-20}>
                {`$${Math.floor(active.amount * active.inUSD)}`}
              </Text>

              <Text
                textAnchor="middle"
                fill={active.color}
                fontSize={20}
                dy={20}
              >
                {`${active.amount} ${active.symbol}`}
              </Text>
            </>
          ) : (
            <>
              <Text textAnchor="middle" fill="#413d3d" fontSize={40} dy={-20}>
                {`$${Math.floor(
                  coins.reduce((acc, coin) => acc + coin.amount * coin.inUSD, 0)
                )}`}
              </Text>

              <Text textAnchor="middle" fill="#413d3d" fontSize={20} dy={20}>
                {`${coins.length} Assets`}
              </Text>
            </>
          )}
        </Group>
      </svg>
    </main>
    </div>
  );
}