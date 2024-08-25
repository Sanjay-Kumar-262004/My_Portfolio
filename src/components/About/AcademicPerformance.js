import React from "react";
import { Table } from "react-bootstrap";

function AcademicPerformance() {
  return (
    <div className="academic-performance">
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th>Education Level</th>
            <th>Marks / CGPA</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Xth Standard</td>
            <td>456/500</td>
            <td>91.2%</td>
          </tr>
          <tr>
            <td>XIIth Standard</td>
            <td>555.56/600</td>
            <td>92.59%</td>
          </tr>
          <tr>
            <td>Semester 1</td>
            <td>CGPA: 9.8</td>
            <td>Percentage: 98%</td>
          </tr>
          <tr>
            <td>Semester 2</td>
            <td>CGPA: 8.67</td>
            <td>Percentage: 86.7%</td>
          </tr>
          <tr>
            <td>Semester 3</td>
            <td>CGPA: 7.33</td>
            <td>Percentage: 73.3%</td>
          </tr>
          <tr>
            <td>Semester 4</td>
            <td>CGPA: 8.18</td>
            <td>Percentage: 81.8%</td>
          </tr>
          <tr>
            <td>Semester 5</td>
            <td>CGPA: 8.52</td>
            <td>Percentage: 85.2%</td>
          </tr>
          <tr>
            <td>Semester 6</td>
            <td>CGPA: 9.12</td>
            <td>Percentage: 91.2%</td>
          </tr>
          <tr>
            <td>Semester 7</td>
            <td>CGPA: </td>
            <td>Percentage: </td>
          </tr>
          <tr>
            <td>Semester 8</td>
            <td>CGPA: </td>
            <td>Percentage: </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AcademicPerformance;
