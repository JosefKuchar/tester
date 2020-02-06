import React from 'react';
import Input from '@material-ui/core/Input';
import { Typography, Card, CardContent, TextareaAutosize, Divider } from '@material-ui/core';
import { words } from '../../words';
import { Page } from '..';
import { WordSelect } from './WordSelect';

interface IWord {
  name?: string;
  en?: string[],
  cs?: string[],
  audio?: number[],
  words?: IWord[],
}

interface ITesterState {
  input: string;
  current: IWord;
  correct: string;
  included: string[];
}

export class TesterPage extends React.Component<{}, ITesterState> {
  state = {
    input: '',
    current: { en: ['foo'], cs: ['bar'] } as IWord,
    correct: '',
    included: [],
  };

  handleInput(e: any) {
    if (e.key === 'Enter') {
      if (this.state.current.en!.filter(word => word.toLowerCase() === this.state.input.toLowerCase()).length > 0) {
        this.selectRandomWord();
      } else {
        this.setState({
          ...this.state,
          correct: this.state.current.en!.join('/'),
          input: '',
        });
      }
    }
  }

  handleChange(e: any) {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  }

  componentDidMount() {
    console.log(words);
    this.selectRandomWord();
  }

  selectRandomWord() {
    this.setState({
      ...this.state,
      input: '',
      correct: '',
      current: words[0].words[Math.floor(Math.random() * words[0].words.length)]
    });
  }

  render() {
    return (
      <Page title="Tester">
        <Card>
          <CardContent style={{ textAlign: 'center' }}>
            <Typography variant="h5">{this.state.current.cs!.join(', ')}</Typography>
            <Typography variant="h5" style={{ color: 'red' }}>{this.state.correct}</Typography>
            <Input onKeyPress={this.handleInput.bind(this)} value={this.state.input} onChange={this.handleChange.bind(this)} autoFocus={true}></Input>
          </CardContent>
        </Card>
        <Typography variant="h4" gutterBottom>Words included</Typography>
        <WordSelect></WordSelect>
      </Page>
    );
  }
}
