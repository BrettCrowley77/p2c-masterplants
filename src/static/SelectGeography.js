import React, { useEffect, useState, setState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';

export default function SelectGeography({ activeStep, geography, setGeography, codes, setCodes, map, getUniqueFeatures, idList, postalcodes }) {

    const handleSelectGeography = (event, value) => {

        var uniqueIds = []

        for (var i in value) {
            uniqueIds = [...uniqueIds, ...value[i].FIELD2.split(', ')].map(Number)
        }

        uniqueIds = [... new Set(uniqueIds)].filter(obj => idList.includes(obj))

        // console.log(uniqueIds)

        if (activeStep == 1 && geography.length > 0) {
       
            for (var i in geography) {

                map.current.removeFeatureState({
                    source: "ecoregions",
                    id: getUniqueFeatures(map.current.querySourceFeatures('ecoregions', {'source-layer': 'outline'}), 'ECOREGION').find(obj => parseInt(obj.properties.ECOREGION) == geography[i]).id,
                });

            }
    
        }
    
        if (activeStep == 1 && uniqueIds.length > 0) {

            for (var i in uniqueIds) {

                map.current.setFeatureState({
                    source: 'ecoregions',
                    id: getUniqueFeatures(map.current.querySourceFeatures('ecoregions', {'source-layer': 'outline'}), 'ECOREGION').find(obj => parseInt(obj.properties.ECOREGION) == uniqueIds[i]).id,
                  }, {
                    clicked: true
                });

            }
    
        }

        // setGeography(uniqueIds)

    }

    const handleDelete = chipToDelete => () => {
        console.log(chips)
        // setCodes([...codes.filter(obj => obj.FIELD1 == option.FIELD1)])
    }

    return (
        <Autocomplete
            multiple
            id="tags-outlined"
            value={codes}
            options={postalcodes}
            getOptionLabel={(option) => option.FIELD1}
            onChange={(e, v) => {
                handleSelectGeography(e, v);
                setCodes(v);
            }}
            filterSelectedOptions
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip
                        key={index}
                        data-tag-index={index}
                        tabIndex={-1}
                        label={option.FIELD1}
                        onDelete={() => {
                            setCodes([...codes.filter(obj => obj.FIELD1 != option.FIELD1)])
                        }}
                    />
                ))
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Postal Code"
                    placeholder="Select one or more postal codes"
                />
            )}
        />
    );

  }