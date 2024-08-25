import React from "react";
import { Table } from "react-bootstrap";

function AcademicPerformance() {
  return (
    <div className="academic-performance">
      {/* Table for X and XII */}
      <Table striped bordered hover responsive="sm" style={{ backgroundColor: 'transparent' }}>
        <thead style={{ backgroundColor: 'transparent' }}>
          <tr>
            <th>Education Level</th>
            <th>Marks</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: 'transparent' }}>
          <tr>
            <td>Xth</td>
            <td>456/500</td>
            <td>91.2%</td>
          </tr>
          <tr>
            <td>XIIth</td>
            <td>555.56/600</td>
            <td>92.59%</td>
          </tr>
        </tbody>
      </Table>

      {/* Table for College Semesters */}
      <Table striped bordered hover responsive="sm" style={{ backgroundColor: 'transparent' }}>
        <thead style={{ backgroundColor: 'transparent' }}>
          <tr>
            <th>Semester</th>
            <th>CGPA</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: 'transparent' }}>
          <tr>
            <td>Semester 1</td>
            <td>9.8</td>
            <td>98%</td>
          </tr>
          <tr>
            <td>Semester 2</td>
            <td>8.67</td>
            <td>86.7%</td>
          </tr>
          <tr>
            <td>Semester 3</td>
            <td>7.33</td>
            <td>73.3%</td>
          </tr>
          <tr>
            <td>Semester 4</td>
            <td>8.18</td>
            <td>81.8%</td>
          </tr>
          <tr>
            <td>Semester 5</td>
            <td>8.52</td>
            <td>85.2%</td>
          </tr>
          <tr>
            <td>Semester 6</td>
            <td>9.12</td>
            <td>91.2%</td>
          </tr>
          <tr>
            <td>Semester 7</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Semester 8</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Overall CGPA & Percentage</td>
            <td>8.58</td>
            <td>85.8%</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AcademicPerformance;
