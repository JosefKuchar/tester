import React from 'react';
import { Typography } from '@material-ui/core';

interface IPageProps {
  title: string;
}

export class Page extends React.Component<IPageProps, {}> {
  render() {
    return <div>
      <Typography variant="h3" gutterBottom>{this.props.title}</Typography>
      {this.props.children}
    </div>;
  }
}
