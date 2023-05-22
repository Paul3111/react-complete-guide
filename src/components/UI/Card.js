import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className; // notice the white space 'card '
  return <div className={classes}>{props.children}</div>;
};

export default Card;