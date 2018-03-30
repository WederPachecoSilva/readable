import React from 'react';
import { ThumbUp, ThumbDown, Message } from 'material-ui-icons';
import MoreVertIcon from 'material-ui-icons/MoreVert';

import { Badge, IconButton } from 'material-ui';

const CardHeaderAction = ({
  likeCount,
  commentCount,
  openMenu,
  dislikeCount,
  votePost,
}) => (
  <React.Fragment>
    <Badge
      style={{ margin: '1em' }}
      badgeContent={likeCount}
      onClick={() => votePost('upVote')}
      color="primary"
    >
      <ThumbUp />
    </Badge>
    <Badge
      badgeContent={dislikeCount}
      onClick={() => votePost('downVote')}
      color="primary"
    >
      <ThumbDown />
    </Badge>
    <Badge
      style={{ margin: '1em' }}
      badgeContent={commentCount}
      color="primary"
    >
      <Message />
    </Badge>
    <MoreVertIcon onClick={openMenu} />
  </React.Fragment>
);

export default CardHeaderAction;
