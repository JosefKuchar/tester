import React from "react";

import { words } from "../../words";
import { SelectNode } from "./SelectNode";
import { CardContent, Card } from "@material-ui/core";

interface IWord {
  name?: string;
  en?: string[];
  cs?: string[];
  audio?: number[];
  words?: IWord[];
}

interface IWordSelectProps {
  updateIncluded: (uuid: string, state?: boolean) => void;
  included: string[];
}

export class WordSelect extends React.Component<IWordSelectProps, {}> {
  render() {
    return (
      <Card>
        <CardContent>
          {words.map((chapter, i) => (
            <SelectNode
              updateIncluded={this.props.updateIncluded}
              included={this.props.included}
              key={i}
              margin={0}
              node={chapter}
            />
          ))}
        </CardContent>
      </Card>
    );
  }
}
