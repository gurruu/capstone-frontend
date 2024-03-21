import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

export default function PieChart({ userData }) {
  const [active, setActive] = useState(null);
  const width = 200;
  const half = width / 2;


  const getColorByRisk = (risk) => {
    switch (risk.toLowerCase()) {
      case "low":
        return "#BBCFAC";
      case "medium":
        return "#558375";
      case "high":
        return "#2B5D5C";
      default:
        return "#BBCFAC";
    }
  };



  const mappedData = userData.map((item) => ({
    symbol: item.investmentName.toUpperCase(),
    amount: item.amount,
    color: getColorByRisk(item.risk),
  }));



  return (
    <div>
      <main>
        <svg width={width} height={width}>
          <Group top={half} left={half}>
            <Pie
              data={mappedData}
              pieValue={(data) => data.amount}
              outerRadius={half}
              innerRadius={({ data }) => {
                const size =
                  active && active.symbol === data.symbol ? 12 : 8;
                return half - size;
              }}
              padAngle={0.01}
            >
              {(pie) =>
                pie.arcs.map((arc, index) => (
                  <g
                    key={`${arc.data.symbol}-${index}`} // Ensure keys are unique
                    onMouseEnter={() => setActive(arc.data)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <path
                      d={pie.path(arc)}
                      fill={arc.data.color}
                      cursor="pointer"
                    ></path>
                  </g>
                ))
              }
            </Pie>


            {active ? (
              <>
                <Text textAnchor="middle" fill="#413d3d" fontSize={40} dy={-20}>
                  {`₹${Math.floor(active.amount)}`}
                </Text>

                <Text
                  textAnchor="middle"
                  fill={active.color}
                  fontSize={10}
                  dy={0}
                >
                  {`${active.amount} ${active.symbol}`}
                </Text>
              </>
            ) : (
              <>
                <Text textAnchor="middle" fill="#413d3d" fontSize={40} dy={-20}>
                  {`₹${Math.floor(
                    mappedData.reduce(
                      (acc, coin) => acc + coin.amount,
                      0
                    )
                  )}`}
                </Text>

                <Text textAnchor="middle" fill="#413d3d" fontSize={20} dy={20}>
                  {`${mappedData.length} Assets`}
                </Text>
              </>
            )}
          </Group>
        </svg>
      </main>
    </div>
  );
}
