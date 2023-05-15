import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
    selectbutton: {
      border: '2px solid gold',
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: 'Montserrat',
      cursor: 'pointer',
      backgroundColor: (selected)=> selected ? 'white' : '',
      color: (selected)=>  selected ? 'black' : '',
      fontWeight: (selected)=> selected ? 700 : 500,
      '&:hover': {
        backgroundColor: 'gold',
        color: 'black',
      },
      width: '22%',
    },
  
}));

const SelectButton = ({ children, selected, onClick }) => {

  const classes = useStyles();

  return (<span onClick={onClick} className={classes.selectbutton}>{children}</span>);
};

export default SelectButton;
