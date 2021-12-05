import React, { useEffect, useState, setState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';

export default function SelectFilter({ filterOptions, stateVar, setStateVar, placeholder }) {

    return (
        <Autocomplete
            multiple
            id="tags-outlined"
            // limitTags={10}
            value={stateVar}
            options={filterOptions}
            getOptionLabel={(option) => option.label}
            onChange={(e, v) => {

                var optionList = filterOptions.map(obj => obj.label)

                if (optionList.includes(e.target.innerHTML)) { // i.e. if a tag is added

                    setStateVar(v)

                } else { // i.e. if all tags are removed

                    setStateVar([])

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

                            setStateVar(stateVar => [...stateVar.filter(obj => obj.label != option.label)])

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
                    placeholder={placeholder}
                  />
                );
              } }
        />
    );

  }