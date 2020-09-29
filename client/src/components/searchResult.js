import { Form, FormControl, Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
      
    },
    inline: {
      display: 'inline',
    },
    // alignItems:{
    //   alignItems:"flex-start"
    // }
  }));

  export default function AlignItemsList(props) {
    const classes = useStyles();
  
    return (
      <List className={classes.root}>
        <Link to={props.path}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={props.first_name+' '+props.last_name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  
                </Typography>
                {`cost:${props.cost}
                  Country:${props.country}
                  City:${props.city} 
                `}
              </React.Fragment>
            }
          />
        </ListItem>
        </Link>
      </List>
      
    );
  }

  