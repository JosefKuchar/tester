import React from 'react'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography'
import { words } from './words';

interface IWord {
  en: string[];
  cs: string[];
}

interface ITesterState {
  input: string;
  current: IWord;
  correct: string;
}

export class Tester extends React.Component<{}, ITesterState> {
  state = {
    input: '',
    current: { en: ['foo'], cs: ['bar'] } as IWord,
    correct: '',
  }

  handleInput(e: any) {
    if (e.key === 'Enter') {
      if (this.state.current.en.filter(word => word.toLowerCase() === this.state.input.toLowerCase()).length > 0) {
        this.selectRandomWord();
      } else {
        this.setState({
          ...this.state,
          correct: this.state.current.en.join('/'),
          input: '',
        })
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
    this.selectRandomWord()
  }

  selectRandomWord() {
    this.setState({
      ...this.state,
      input: '',
      correct: '',
      current: words[Math.floor(Math.random() * words.length)]
    })
  }

  render() {
    return (
      <div>
        <Typography variant="h5">{ this.state.current.cs.join(', ') }</Typography>
        <Typography variant="h5" style={{ color: 'red'}}>{this.state.correct}</Typography>
        <Input onKeyPress={this.handleInput.bind(this)} value={this.state.input} onChange={this.handleChange.bind(this)}></Input>
      </div>
    )
  }
}
