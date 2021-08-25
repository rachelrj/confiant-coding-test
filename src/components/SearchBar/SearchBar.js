import React from 'react';
import {TextField, Button} from '@material-ui/core';
import SearchTypes from '../../common/SearchTypes';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import search from '../../api/ApiUtils';

const SearchBar = (props) => {
  const language = SearchTypes[props.value];
  const placeholder = `Search ${language}`;
  const [fieldInfo, setSearchFieldInfo] = React.useState({
    error: false,
    helperText: '',
    fieldValue: '',
  });

  async function handleSubmit(event) {
    event.preventDefault();
    if (!fieldInfo.error) {
      const response = await search(fieldInfo.fieldValue, language);
      if (response && response.data && response.data.items) {
        props.showResults(response.data.items);
      }
    }
  }

  const handleChange = (e) => {
    const newInput = e.target.value;
    if (!newInput || newInput.trim().length === 0 ) {
      setSearchFieldInfo({
        error: true,
        helperText: 'You must include at least one search term.',
        fieldValue: newInput,
      });
    } else if (newInput.length >= 256) {
      setSearchFieldInfo({
        error: true,
        helperText: 'Searches must be no longer than 256 characters.',
        fieldValue: newInput,
      });
    } else {
      setSearchFieldInfo({
        error: false,
        helperText: '',
        fieldValue: newInput,
      });
    }
  };

  return (
    <>
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label={placeholder}
          onChange={handleChange}
          error={fieldInfo.error}
          inputProps={{'data-testid': 'content-input'}}
          helperText={fieldInfo.helperText}
          fullWidth
        />
        <Button
          type="submit"
          color="primary"
          size="large"
          startIcon={<SearchIcon />}
          onClick={handleSubmit}
          disabled={fieldInfo.error}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

SearchBar.propTypes = {
  children: PropTypes.node,
  value: PropTypes.any.isRequired,
  showResults: PropTypes.func.isRequired,
};

export default SearchBar;
