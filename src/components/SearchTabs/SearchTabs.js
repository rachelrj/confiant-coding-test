import React from 'react';
import {AppBar, Tabs, Tab} from '@material-ui/core';
import TabPanel from '../TabPanel/TabPanel';
import SearchBar from '../SearchBar/SearchBar';
import ResultTable from '../ResultTable/ResultTable';
import SearchTypes from '../../common/SearchTypes';

function SearchTabs() {
  const [searchDetails, setSearchDetails] = React.useState({
    value: 0,
    results: {},
  });

  function a11yProps(index) {
    return {
      'id': `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event, newValue) => {
    setSearchDetails({
      value: newValue,
      results: {},
    });
  };
  const showResults = (requestResults) => {
    if (requestResults.data && requestResults.data.items) {
      if (requestResults.data.items.length > 0) {
        setSearchDetails({
          results: requestResults.data.items,
          value: searchDetails.value,
        });
      } else {
        setSearchDetails({
          results: {
            'error': 'No results to show.',
          },
          value: searchDetails.value,
        });
      }
    } else {
      setSearchDetails({
        results: {
          'error': 'There was an error encountered.',
        },
        value: searchDetails.value,
      });
    }
  };

  return (
    <>
      <AppBar position="static">
        <Tabs
          value={searchDetails.value}
          onChange={handleChange}
          aria-label='Three tabs for search: javascript, html, & css.'
        >
          {SearchTypes.map((name, index) =>
            <Tab
              className={'tabLabel'}
              key={index}
              label={SearchTypes[index]}
              {...a11yProps(index)}
            />)}
        </Tabs>
      </AppBar>
      {SearchTypes.map((name, index) =>
        <TabPanel
          key={index}
          value={searchDetails.value}
          index={index}>
          <SearchBar value={searchDetails.value} showResults={showResults}/>
        </TabPanel>,
      )}
      <ResultTable results={searchDetails.results}/>
    </>
  );
}

export default SearchTabs;
