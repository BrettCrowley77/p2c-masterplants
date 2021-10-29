import React, { useEffect, useState, setState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';

export default function SelectGeography({ activeStep, geography, setGeography, codes, setCodes, map, getUniqueFeatures, idList, postalcodes }) {

    const handleSelectGeography = (event, value) => {

        if (activeStep == 1 && geography.length > 0) {
       
            for (var i in geography) {

                map.current.removeFeatureState({
                    source: "ecoregions",
                    id: getUniqueFeatures(map.current.querySourceFeatures('ecoregions', {'source-layer': 'outline'}), 'ECOREGION').find(obj => parseInt(obj.properties.ECOREGION) == geography[i]).id,
                });

            }
    
        }

    }

    return (
        <Autocomplete
            multiple
            id="tags-outlined"
            // limitTags={10}
            value={codes}
            options={postalcodes}
            getOptionLabel={(option) => option.FIELD1}
            onChange={(e, v) => {
                handleSelectGeography(e, v);
                setCodes(v);
                console.log(e.target.innerHTML.length)

                if (e.target.innerHTML.length == 3) { // i.e. if a tag is added

                    console.log(e)
                    console.log(e.target.innerHTML.length)

                    var newGeography = [... new Set([...geography, ...postalcodes.filter(obj => obj.FIELD1 == e.target.innerHTML)[0].FIELD2.split(', ').map(Number)].filter(obj => idList.includes(obj)))]
                    setGeography(newGeography)

                    if (activeStep == 1 && map.current) {
       
                        for (var i in newGeography) {
            
                            map.current.setFeatureState({
                                source: "ecoregions",
                                id: getUniqueFeatures(map.current.querySourceFeatures('ecoregions', {'source-layer': 'outline'}), 'ECOREGION').find(obj => parseInt(obj.properties.ECOREGION) == newGeography[i]).id,
                            }, {
                                clicked: true
                            });
            
                        }
                
                    }

                } else { // i.e. if all tags are removed

                    // console.log('hello!')
                    // console.log(e)
                    setGeography([])

                }

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
                            setCodes(codes => [...codes.filter(obj => obj.FIELD1 != option.FIELD1)])
                            setGeography(geography => [...geography.filter(obj => !option.FIELD2.split(', ').map(Number).includes(obj))])
                        }}
                    />
                ))
            }
            // renderInput={(params) => (
            //     <TextField
            //         {...params}
            //         label="Postal Code"
            //         placeholder="Select one or more postal codes"
            //     />
                
            // )}
            renderInput={ params => {
                const { InputProps, ...restParams } = params;
                const { startAdornment, ...restInputProps } = InputProps;
                return (
                  <TextField
                    { ...restParams }
                    InputProps={ {
                      ...restInputProps,
                      startAdornment: (
                        <div style={ {
                          maxHeight: 150,
                          overflowY: 'auto',
                        } }
                        >
                          {startAdornment}
                        </div>
                      ),
                    } }
                    placeholder="Select one or more postal codes"
                  />
                );
              } }
        />
    );

  }