import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function AcademicPerformance() {
  const tableStyle = {
    backgroundColor: 'transparent',
    border: '2.2px solid #F7EEDD',
    borderCollapse: 'collapse',
    width: '100%',
    marginBottom: '20px'
  };

  const thStyle = {
    backgroundColor: 'transparent',
    color: '#008DDA',
    fontWeight: 'bold',
    padding: '12px',
    border: '1px solid #F7EEDD',
    textAlign: 'center' // Changed to center
  };

  const tdStyle = {
    backgroundColor: 'transparent',
    color: '#EEF7FF',
    padding: '12px',
    border: '1px solid #F7EEDD',
    textAlign: 'center' // Changed to center
  };

  const overallRowStyle = {
    backgroundColor: 'transparent',
    color: '#008DDA',
    fontWeight: 'bold',
    padding: '12px',
    border: '1px solid #F7EEDD',
    textAlign: 'center' // Changed to center
  };

  // SGPA data for the graph
  const sgpaData = [
    { semester: 'Sem 1', sgpa: 9.80 },
    { semester: 'Sem 2', sgpa: 8.67 },
    { semester: 'Sem 3', sgpa: 7.33 },
    { semester: 'Sem 4', sgpa: 8.18 },
    { semester: 'Sem 5', sgpa: 8.52 },
    { semester: 'Sem 6', sgpa: 9.12 },
    { semester: 'Sem 7', sgpa: 9.13 },
    { semester: 'Sem 8', sgpa: 10.0 }
  ];

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          backgroundColor: '#008DDA',
          padding: '10px',
          border: '2px solid #F7EEDD',
          borderRadius: '5px',
          color: '#EEF7FF'
        }}>
          <p style={{ margin: 0 }}>{`${label}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  // Responsive styles for mobile
  const containerStyle = {
    padding: '20px',
    '@media (max-width: 768px)': {
      padding: '10px'
    }
  };

  const graphContainerStyle = {
    marginBottom: '30px',
    padding: '20px',
    border: '2.2px solid #F7EEDD',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    minHeight: '400px',
    // Mobile responsive adjustments
    '@media (max-width: 768px)': {
      padding: '10px',
      minHeight: '350px'
    }
  };

  return (
    <div className="academic-performance" style={containerStyle}>
      {/* Add CSS for mobile responsiveness */}
      <style jsx>{`
        .academic-performance {
          padding: 20px;
        }
        
        .graph-container {
          margin-bottom: 30px;
          padding: 20px;
          border: 2.2px solid #F7EEDD;
          border-radius: 8px;
          background-color: transparent;
          min-height: 400px;
        }
        
        .responsive-table {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        
        @media (max-width: 768px) {
          .academic-performance {
            padding: 10px;
          }
          
          .graph-container {
            padding: 10px;
            min-height: 350px;
          }
          
          .graph-title {
            font-size: 16px !important;
            margin-bottom: 15px !important;
          }
          
          table {
            font-size: 14px;
          }
          
          th, td {
            padding: 8px !important;
          }
        }
        
        @media (max-width: 480px) {
          .academic-performance {
            padding: 5px;
          }
          
          .graph-container {
            padding: 8px;
            min-height: 300px;
          }
          
          .graph-title {
            font-size: 14px !important;
          }
          
          table {
            font-size: 12px;
          }
          
          th, td {
            padding: 6px !important;
          }
        }
      `}</style>

      {/* Table for X and XII */}
      <div className="responsive-table">
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Education Level</th>
              <th style={thStyle}>Marks</th>
              <th style={thStyle}>Percentage</th>
            </tr>
          </thead>
          <tbody>
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
            <tr>
              <td style={tdStyle}>B.Tech ECE</td>
              <td style={tdStyle}>CGPA : 8.72</td>
              <td style={tdStyle}>87.2%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 style={{ 
        color: "white", 
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        College Academics
      </h4>

      {/* SGPA Graph */}
      <div className="graph-container" style={graphContainerStyle}>
        <h5 className="graph-title" style={{ 
          color: '#008DDA', 
          textAlign: 'center', 
          marginBottom: '20px', 
          fontWeight: 'bold',
          fontSize: '18px'
        }}>
          Semester-wise SGPA Trend
        </h5>
        <ResponsiveContainer width="100%" height={300} minHeight={250}>
          <LineChart
            data={sgpaData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#F7EEDD" opacity={0.3} />
            <XAxis 
              dataKey="semester" 
              stroke="#EEF7FF"
              fontSize={12}
              fontWeight="bold"
              interval={0}
              angle={0}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              domain={[4, 10]}
              stroke="#EEF7FF"
              fontSize={12}
              fontWeight="bold"
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="sgpa" 
              stroke="#008DDA" 
              strokeWidth={3}
              dot={{ 
                fill: '#F7EEDD', 
                stroke: '#008DDA', 
                strokeWidth: 2, 
                r: 6 
              }}
              activeDot={{ 
                r: 8, 
                fill: '#008DDA',
                stroke: '#F7EEDD',
                strokeWidth: 2
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AcademicPerformance;
