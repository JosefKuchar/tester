import React from "react";
import { Typography, Link } from "@material-ui/core";
import { Page } from "..";

export class AboutPage extends React.Component<{}, {}> {
  render() {
    return (
      <Page title="About">
        <Typography>
          Made by Josef Kuchař - <Link href="//josefkuchar.com">Website</Link>
        </Typography>
      </Page>
    );
  }
}
