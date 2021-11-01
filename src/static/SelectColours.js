import React, { useEffect, useState, setState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';

export default function SelectColours({ filterColours, colours, setColours }) {

    return (
        <Autocomplete
            multiple
            id="tags-outlined"
            // limitTags={10}
            value={colours}
            options={filterColours}
            getOptionLabel={(option) => option.label}
            onChange={(e, v) => {

                var colourList = filterColours.map(obj => obj.label)

                console.log(colourList)
                console.log(e)
                console.log(v)

                if (colourList.includes(e.target.innerHTML)) { // i.e. if a tag is added

                    setColours(v)

                } else { // i.e. if all tags are removed

                    setColours(filterColours)

                }

            }}
            filterSelectedOptions
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip
                        key={index}
                        data-tag-index={index}
                        tabIndex={-1}
                        label={option.label}
                        onDelete={() => {

                            setColours(colours => [...colours.filter(obj => obj.label != option.label)])

                        }}
                    />
                ))
            }
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
                    placeholder="Select one or more colours"
                  />
                );
              } }
        />
    );

  }