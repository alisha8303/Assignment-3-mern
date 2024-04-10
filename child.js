import React from 'react';

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    const { prop1, prop2 } = this.props.data;
    this.prop1 = prop1;
    this.prop2 = prop2;
  }

  render() {
    return (
      <div>
        <p>Prop 1: {this.prop1}</p>
        <p>Prop 2: {this.prop2}</p>
      </div>
    );
  }
}

export default ChildComponent;
