import React from "react";
import { Table } from "react-bootstrap";

function AcademicPerformance() {
  const tableStyle = {
    backgroundColor: 'transparent',
    border: '2.2px solid #F7EEDD',
  };

  const thStyle = {
    backgroundColor: 'transparent',
    color: '#008DDA',
    fontWeight: 'Bold'  
  };

  const tdStyle = {
    backgroundColor: 'transparent',
    color: '#EEF7FF',
    
  };

  return (
    <div className="academic-performance">
      {/* Table for X and XII */}
      <Table striped bordered hover responsive="sm" style={tableStyle}>
        <thead style={tableStyle}>
          <tr>
            <th style={thStyle}>Education Level</th>
            <th style={thStyle}>Marks</th>
            <th style={thStyle}>Percentage</th>
          </tr>
        </thead>
        <tbody style={tableStyle}>
          <tr>
            <td style={tdStyle}>Xth Standard</td>
            <td style={tdStyle}>456/500</td>
            <td style={tdStyle}>91.2%</td>
          </tr>
          <tr>
            <td style={tdStyle}>XIIth Standard</td>
            <td style={tdStyle}>555.56/600</td>
            <td style={tdStyle}>92.59%</td>
          </tr>
        </tbody>
      </Table>
      <h4 style={{ color: "white" }}>
          College Academics
        </h4>
      {/* Table for College Semesters */}
      <Table striped bordered hover responsive="sm" style={tableStyle}>
        <thead style={tableStyle}>
          <tr>
            <th style={thStyle}>Semester</th>
            <th style={thStyle}>CGPA/10</th>
            <th style={thStyle}>Percentage/100</th>
          </tr>
        </thead>
        <tbody style={tableStyle}>
          <tr>
            <td style={tdStyle}>Semester 1</td>
            <td style={tdStyle}>9.8</td>
            <td style={tdStyle}>98%</td>
          </tr>
          <tr>
            <td style={tdStyle}>Semester 2</td>
            <td style={tdStyle}>8.67</td>
            <td style={tdStyle}>86.7%</td>
          </tr>
          <tr>
            <td style={tdStyle}>Semester 3</td>
            <td style={tdStyle}>7.33</td>
            <td style={tdStyle}>73.3%</td>
          </tr>
          <tr>
            <td style={tdStyle}>Semester 4</td>
            <td style={tdStyle}>8.18</td>
            <td style={tdStyle}>81.8%</td>
          </tr>
          <tr>
            <td style={tdStyle}>Semester 5</td>
            <td style={tdStyle}>8.52</td>
            <td style={tdStyle}>85.2%</td>
          </tr>
          <tr>
            <td style={tdStyle}>Semester 6</td>
            <td style={tdStyle}>9.12</td>
            <td style={tdStyle}>91.2%</td>
          </tr>
          <tr>
            <td style={tdStyle}>Semester 7</td>
            <td style={tdStyle}>9.13</td>
            <td style={tdStyle}>91.3%</td>
          </tr>
          <tr>
            <td style={tdStyle}>Semester 8</td>
            <td style={tdStyle}>TBA</td>
            <td style={tdStyle}>TBA</td>
          </tr>
          <tr>
            <td style={thStyle}>Overall CGPA & Percentage </td>
            <td style={thStyle}>8.63</td>
            <td style={thStyle}>86.3%</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AcademicPerformance;
