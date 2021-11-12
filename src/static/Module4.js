import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar  } from '@mui/x-data-grid';
import Container from 'react-bootstrap/Container';
import Typography from '@mui/material/Typography';
// import { useDemoData } from '@mui/x-data-grid-generator';
import CustomToolbar from './CustomToolbar.js';

function Module4({ Item, rows, rowData, setRowData }) {

    const columns = [
      { field: 'col15', headerName: 'Image', width: 100, renderCell: (params) => (
          <img src={params.value} height="80"></img>
        ),
      },
      { field: 'col1', headerName: 'Botanical Name', width: 200, renderCell: (params) => (
        <em>{params.value}</em>
      ),
      },
      { field: 'col2', headerName: 'Common Name', width: 200 },
      { field: 'col3', headerName: 'Plant type', width: 125 },
      { field: 'col5', headerName: 'Pollinators', width: 125 },
      { field: 'col12', headerName: 'Flower Colour', width: 125 },
      { field: 'col13', headerName: 'Soil Moisture', width: 125 },
      { field: 'col14', headerName: 'Sun Requirements', width: 125 },
      { field: 'col20', headerName: 'Season Start', width: 125 },
      { field: 'col21', headerName: 'Season End', width: 125 },
    ]
  
    return (
      <Container fluid>
        <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
          The plants listed in the table below are native to your region and will support pollinators.
          Click on the <em>'Columns'</em> button at the top left to toggle columns off and on, and click on the 
          <em>'Filters'</em> button if you want to filter your list of plants even further. Once you're happy
          with your list, click the <em>'Export'</em> button to download your final list of plants.
        </Typography>
        <br></br>
        <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
        Search for local native plant nurseries in your area and bring your list. If there aren’t
        any native plant nurseries in your region, bring your list to your local garden centre or
        plant nursery and see if they can match up some of these plants. Encouraging garden centres
        and local nurseries to stock more local native plants will help pollinators, people, and the
        planet.
        </Typography>
        <br></br>
        <div style={{ height: 500, width: '100%' }}>
          <DataGrid
            columns={columns}
            rowHeight={100}
            rows={rowData}
            components={{
              Toolbar: CustomToolbar,
            }}
          />
        </div>
      </Container>
    );
}

export default Module4