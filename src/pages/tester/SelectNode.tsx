import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

interface IWord {
  name?: string;
  en?: string[];
  cs?: string[];
  audio?: number[];
  words?: IWord[];
  checked?: boolean;
  uuid?: string;
}

interface ISelectNodeProps {
  node: IWord;
  margin: number;
  updateIncluded: (uuid: string, state?: boolean) => void;
  included: string[];
}

export class SelectNode extends React.Component<ISelectNodeProps, {}> {
  onClick(e: any) {
    this.props.updateIncluded(this.props.node.uuid!);
  }

  render() {
    const children =
      typeof this.props.node.words![0].name !== 'undefined'
        ? this.props.node.words!.map((node, i) => (
          <SelectNode included={this.props.included} updateIncluded={this.props.updateIncluded} key={i} node={node} margin={this.props.margin + 20} />
        ))
        : [];
    return (
      <div>
        <FormControlLabel
          control={<Checkbox checked={this.props.included.includes(this.props.node.uuid as string)} onChange={this.onClick.bind(this)}></Checkbox>}
          label={this.props.node.name}
          style={{ marginLeft: this.props.margin }}
        ></FormControlLabel>
        {children}
      </div>
    );
  }
}
