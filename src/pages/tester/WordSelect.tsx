import React from 'react';

import { words } from '../../words';
import { SelectNode } from './SelectNode';
import { CardContent, Card } from '@material-ui/core';

interface IWord {
  name?: string;
  en?: string[],
  cs?: string[],
  audio?: number[],
  words?: IWord[],
}

function tree(array: IWord[]) {
  array.forEach(node => {
    if (typeof node.name !== 'undefined') {
      console.log(node.name);
    }

    if (typeof node.words !== 'undefined') {
      tree(node.words);
    }
  });
}

export class WordSelect extends React.Component<{}, {}> {
  componentDidMount() {
    console.log(this.props.children);
  }

  render() {
    return <Card><CardContent>
      {words.map((chapter, i) => <SelectNode key={i} margin={0} node={chapter} />)}
    </CardContent></Card>;
  }
}
