import React from "react";
import Input from "@material-ui/core/Input";
import { Typography, Card, CardContent } from "@material-ui/core";
import { words } from "../../words";
import { Page } from "..";
import { WordSelect } from "./WordSelect";

interface IWord {
  name?: string;
  en?: string[];
  cs?: string[];
  audio?: number[];
  words?: IWord[];
  uuid?: string;
  parent?: IWord;
}

interface ITesterState {
  input: string;
  current: IWord;
  correct: string;
  included: string[];
  list: IWord[];
}

export class TesterPage extends React.Component<{}, ITesterState> {
  state = {
    input: "",
    current: { en: ["foo"], cs: ["bar"] } as IWord,
    correct: "",
    included: [] as string[],
    list: [] as IWord[]
  };

  handleInput(e: any) {
    if (e.key === "Enter") {
      if (
        this.state.current.en!.filter(
          word => word.toLowerCase() === this.state.input.toLowerCase()
        ).length > 0
      ) {
        this.selectRandomWord();
      } else {
        this.setState({
          ...this.state,
          correct: this.state.current.en!.join("/"),
          input: ""
        });
      }
    }
  }

  updateIncluded(uuid: string, state?: boolean) {
    if (typeof state === "undefined") {
      state = !this.state.included.includes(uuid);
    }

    let uuids = [uuid];
    this.updateChildren(words, uuid, uuids, false);
    let current = this.findNode(words, uuid) as IWord;
    while (typeof current.parent !== "undefined") {
      uuids.push(current.parent.uuid!);
      current = current.parent;
    }
    if (state) {
      // Add to included
      this.setState(
        {
          ...this.state,
          included: [...this.state.included, ...uuids]
        },
        this.buildList
      );
    } else {
      // Remove from included
      this.setState(
        {
          ...this.state,
          included: this.state.included.filter(
            element => !uuids.includes(element)
          )
        },
        this.buildList
      );
    }
  }

  updateChildren(
    array: IWord[],
    uuid: string,
    uuids: string[],
    update: boolean
  ) {
    array.forEach(node => {
      if (typeof node.words !== "undefined") {
        if (update) {
          uuids.push(node.uuid!);
        }
        let nextUpdate = update || node.uuid! === uuid;
        this.updateChildren(node.words, uuid, uuids, nextUpdate);
      }
    });
  }

  findNode(array: IWord[], uuid: string): null | IWord {
    let found: null | IWord = null;
    array.forEach(node => {
      if (typeof node.words !== "undefined") {
        if (node.uuid === uuid) {
          found = node;
          return;
        }
        found = found || this.findNode(node.words, uuid);
      }
    });
    return found;
  }
  tree(array: IWord[]) {
    let list: any[] = [];

    array.forEach((node, index) => {
      if (typeof node.cs !== "undefined") {
        list.push(node);
      }

      if (
        typeof node.words !== "undefined" &&
        this.state.included.includes(node.uuid!)
      ) {
        list.push(...this.tree(node.words));
      }
    });

    return list;
  }

  buildList() {
    this.setState(
      { ...this.state, list: this.tree(words) },
      this.selectRandomWord
    );
  }

  handleChange(e: any) {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  }

  componentDidMount() {
    this.selectRandomWord();
  }

  selectRandomWord() {
    if (this.state.list.length === 0) {
      this.setState({
        ...this.state,
        input: "",
        correct: "",
        current: {
          en: [""],
          cs: ["Select some words from the list below!"]
        } as IWord
      });
    } else {
      this.setState({
        ...this.state,
        input: "",
        correct: "",
        current: this.state.list[
          Math.floor(Math.random() * this.state.list.length)
        ]
      });
    }
  }

  render() {
    return (
      <Page title="Tester">
        <Card>
          <CardContent style={{ textAlign: "center" }}>
            <Typography variant="h5">
              {this.state.current.cs!.join(", ")}
            </Typography>
            <Typography variant="h5" style={{ color: "red" }}>
              {this.state.correct}
            </Typography>
            <Input
              onKeyPress={this.handleInput.bind(this)}
              value={this.state.input}
              onChange={this.handleChange.bind(this)}
              autoFocus={true}
            ></Input>
          </CardContent>
        </Card>
        <Typography variant="h4" gutterBottom>
          Words included
        </Typography>
        <WordSelect
          updateIncluded={this.updateIncluded.bind(this)}
          included={this.state.included}
        ></WordSelect>
      </Page>
    );
  }
}
