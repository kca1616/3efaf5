import React from "react";
import { Box, Typography, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },

  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },

  previewTextBold: {
    fontSize: 12,
    color: "black",
    letterSpacing: -0.17,
    fontWeight: "bold",
  },

  unreadContainer: {
    padding: "10px"
  }

}));

const ChatContent = ({ conversation, unread, activeConversation }) => {
  const classes = useStyles();

  const { otherUser } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;
  const renderUnread = (activeConversation !== otherUser.username) && (unread>0);
  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={ renderUnread ? classes.previewTextBold : classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>
      {renderUnread &&
        <Badge anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} badgeContent={unread} color="primary">
          <Box className={classes.unreadContainer}>
          </Box>
        </Badge>
      }
    </Box>
  )
};

export default ChatContent;
