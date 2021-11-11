import React from 'react'
import { DataGrid, GridToolbarContainer, GridToolbarExport, GridToolbarColumnsButton, GridToolbarFilterButton } from '@mui/x-data-grid';

function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
        <br></br>
        <GridToolbarColumnsButton />
        <br></br>
        <GridToolbarFilterButton />
      </GridToolbarContainer>
    );
}

export default CustomToolbar