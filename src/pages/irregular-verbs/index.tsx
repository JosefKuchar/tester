import React from "react";
import { Page } from "..";
import {
  Typography,
  Card,
  Input,
  CardContent,
  TextField
} from "@material-ui/core";
import { irregularVerbs } from "../../irregularVerbs";

interface IVerb {
  en: string[][];
  cs: string[];
}

interface IIrregularVerbsPageState {
  focused: number;
  inputs: string[];
  current: IVerb;
  msg: string;
}
export class IrregularVerbsPage extends React.Component<
  {},
  IIrregularVerbsPageState
> {
  inputRefs: any;

  constructor(props: any) {
    super(props);
    this.inputRefs = Array(3)
      .fill(0)
      .map(() => React.createRef());
    this.state = {
      focused: 0,
      inputs: Array(3).fill("") as string[],
      current: { en: [["a"], ["b"], ["c"]], cs: ["d"] } as IVerb,
      msg: ""
    };
  }

  handleChange(e: any, inputNum: number) {
    this.setState({
      ...this.state,
      inputs: this.state.inputs.map((input, i) =>
        i === inputNum ? e.target.value : input
      )
    });
  }

  handlePress(e: any, inputNum: number) {
    const inputVal = this.state.inputs[inputNum];
    if (
      e.key === "Enter" ||
      e.key === " " ||
      ((e.which | e.keyCode) === 229 &&
        inputVal.charAt(inputVal.length - 1) === " ")
    ) {
      if (inputNum === 2) {
        this.checkInput();
      } else {
        this.setState({
          ...this.state,
          inputs: this.state.inputs.map(input => input.trim())
        });
        this.inputRefs[inputNum + 1].current.focus();
      }
    }
  }

  componentDidMount() {
    this.resetFocus();
    this.selectRandomVerb();
  }

  checkInput() {
    if (
      this.state.inputs.every((input, i) =>
        this.state.current.en[i].includes(input.trim().toLowerCase())
      )
    ) {
      this.selectRandomVerb();
    } else {
      this.setState({
        ...this.state,
        msg: this.state.current.en
          .map(variation => variation.join("/"))
          .join(", "),
        inputs: Array(3).fill("")
      });
    }
    this.resetFocus();
  }

  selectRandomVerb() {
    this.setState({
      ...this.state,
      current:
        irregularVerbs[Math.floor(Math.random() * irregularVerbs.length)],
      inputs: Array(3).fill(""),
      msg: ""
    });
  }

  resetFocus() {
    this.inputRefs[0].current.focus();
  }
  render() {
    const versions = ["Infinitive", "Past Simple", "Past Participle"];

    return (
      <Page title="Irregular verbs tester">
        <Card>
          <CardContent style={{ textAlign: "center" }}>
            <Typography variant="h5">
              {this.state.current.cs.join(", ")}
            </Typography>
            <Typography variant="h5" style={{ color: "red" }}>
              {this.state.msg}
            </Typography>
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <TextField
                  key={i}
                  inputRef={this.inputRefs[i]}
                  label={versions[i]}
                  style={{ margin: "0 10px" }}
                  value={this.state.inputs[i]}
                  onChange={(e: any) => this.handleChange(e, i)}
                  onKeyUp={(e: any) => this.handlePress(e, i)}
                ></TextField>
              ))}
          </CardContent>
        </Card>
      </Page>
    );
  }
}
