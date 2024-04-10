import React from 'react';
import ChildComponent from './ChildComponent'; // Corrected import path to match file name

class ParentComponent extends React.Component {
  render() {
    const dataToPass = {
      prop1: 'Value1',
      prop2: 'Value2'
    };

    return (
      <div>
        <ChildComponent data={dataToPass} />
      </div>
    );
  }
}

export default ParentComponent;