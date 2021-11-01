import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';
import CustomToolbar from './CustomToolbar.js';

function Module4({ Item, rows, rowData, setRowData }) {

    const columns = [
      { field: 'col1', headerName: 'Botanical Name', width: 150 },
      { field: 'col2', headerName: 'Common Name', width: 150 },
      { field: 'col3', headerName: 'Plant type', width: 150 },
      { field: 'col4', headerName: 'soil texture', width: 150 },
      { field: 'col5', headerName: 'Pollinators', width: 150 },
      { field: 'col6', headerName: 'Also a host', width: 150 },
      { field: 'col7', headerName: 'Palatability to Deer', width: 150 },
      { field: 'col8', headerName: 'additional information', width: 150 },
      { field: 'col9', headerName: 'Height Units', width: 150 },
      { field: 'col10', headerName: 'Height Lower', width: 150 },
      { field: 'col11', headerName: 'Height Upper	', width: 150 },
      { field: 'col12', headerName: 'image_url', width: 150 },
      { field: 'col13', headerName: 'Flower Colour', width: 150 },
      { field: 'col14', headerName: 'Flower Season Start', width: 150 },
      { field: 'col15', headerName: 'Flower Season End', width: 150 },
      { field: 'col16', headerName: 'Ecoregion code', width: 150 },
      { field: 'col17', headerName: 'Ecoregion name', width: 150 }
    ]
  
    return (
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          columns={columns}
          rows={rowData}
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </div>
    );
}

export default Module4