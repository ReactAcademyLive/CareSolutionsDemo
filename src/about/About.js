import { Table } from "react-bootstrap";

const data = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Ashe" },
  { id: 3, name: "Randy" },
  { id: 4, name: "Christopher" },
];

function About() {
  return (
    <>
      <h1>About Page</h1>
      <p>These are the authors: </p>
      <ul>
        {data.map((author) => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
      <Table striped hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((author) => (
            <tr key={author.id}>
              <td>{author.id}</td>
              <td>{author.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default About;
