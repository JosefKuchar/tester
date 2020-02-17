import React from "react";
import { Page } from "..";
import { Typography, Link } from "@material-ui/core";

export class NotFoundPage extends React.Component<{}, {}> {
  render() {
    return (
      <Page title="Page not found!">
        <Typography>
          <Link href="/">Go to homepage</Link>
        </Typography>
      </Page>
    );
  }
}
