import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { words } from '../../words';

interface IWord {
  name?: string;
  en?: string[];
  cs?: string[];
  audio?: number[];
  words?: IWord[];
  checked?: boolean;
}

interface ISelectNodeProps {
  node: IWord;
  margin: number;
  parentChecked?: boolean;
}

interface ISelectNodeState {
  checked: boolean;
}

export class SelectNode extends React.Component<ISelectNodeProps, ISelectNodeState> {
  state = {
    checked: false
  };

  onClick(e: any) {
    this.setState({ ...this.state, checked: e.target.checked });
    this.forceUpdate();
  }

  update() {

  }

  componentDidUpdate(prevProps: ISelectNodeProps) {
    if (prevProps.parentChecked !== this.props.parentChecked) {
      this.setState({ ...this.state, checked: this.props.parentChecked! });
    }
  }

  render() {
    const children =
      typeof this.props.node.words![0].name !== 'undefined'
        ? this.props.node.words!.map((node, i) => (
          <SelectNode key={i} node={node} margin={this.props.margin + 20} parentChecked={this.state.checked} />
        ))
        : [];
    return (
      <div>
        <FormControlLabel
          control={<Checkbox checked={this.state.checked} onChange={this.onClick.bind(this)}></Checkbox>}
          label={this.props.node.name}
          style={{ marginLeft: this.props.margin }}
        ></FormControlLabel>
        {children}
      </div>
    );
  }
}
