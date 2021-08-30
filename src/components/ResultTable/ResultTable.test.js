import ResultTable from "./ResultTable";
import React from 'react';
import renderer from 'react-test-renderer';

test('Renders table', () => {
    const component = renderer.create(
      <ResultTable results={[{
        name: 'name',
        path: 'path',
        html_url: 'url',
      }]} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
