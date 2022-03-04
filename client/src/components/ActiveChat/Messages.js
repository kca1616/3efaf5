import React from 'react';
import { Box, Avatar } from '@material-ui/core';
import { SenderBubble, OtherUserBubble } from '.';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';


const useStyles = makeStyles(() => ({
  readLastMessage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
}));

const Messages = (props) => {
  const { messages, otherUser, userId } = props;
  const userMessages = messages.filter((message) => message.senderId === userId);
  const lastSent = userMessages[userMessages.length - 1];
  const classes = useStyles();

  const renderAvatar = (message, time) => {
    if (message.senderId === userId && lastSent.read && message.id === lastSent.id) {
      return (
        <div className={classes.readLastMessage}>
          <SenderBubble key={message.id} text={message.text} time={time} />
          <Avatar
            alt={otherUser.username}
            src={otherUser.photoUrl}
            className={classes.avatar}
          />
        </div>
      )
    } else {
      return (
        <SenderBubble key={message.id} text={message.text} time={time} />
      )
    }
  }

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');

        return message.senderId === userId ? (
          renderAvatar(message, time)
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
