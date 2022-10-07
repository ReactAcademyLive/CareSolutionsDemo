import { Table } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const formatNum = Intl.NumberFormat("en-US").format;

function Covid() {
  const countries = useLoaderData();

  return (
    <>
      <h1>Covid cases per country</h1>

      <Table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Country</th>
            <th>Total Cases</th>
            <th>Total Recovered</th>
            <th>Total Active</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((c) => (
            <tr key={c.country}>
              <td>
                <img
                  src={c.countryInfo.flag}
                  height="20"
                  alt={`flag of ${c.country}`}
                />
              </td>
              <td>{c.country}</td>
              <td className="text-end">{formatNum(c.cases)}</td>
              <td className="text-end">{formatNum(c.recovered)}</td>
              <td className="text-end">{formatNum(c.active)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Covid;
