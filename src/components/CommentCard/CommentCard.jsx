import React from 'react';
import { Grid, Card, CardHeader, CardContent } from 'material-ui';
import moment from 'moment';
import PropTypes from 'prop-types';

import CommentHeaderAction from './CommentHeaderAction';

const CommentCard = ({ comment, dispatch }) => {
  const { timestamp, body, author } = comment;
  const time = moment(timestamp).format('DD/MM/YYYY, h:mm:ssa');
  return (
    <Grid item md={8} sm={10} xs={8}>
      <Card>
        <CardHeader
          title={author}
          subheader={time}
          action={<CommentHeaderAction dispatch={dispatch} comment={comment} />}
        />
        <CardContent>{body}</CardContent>
      </Card>
    </Grid>
  );
};

CommentCard.propTypes = {
  comment: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default CommentCard;
