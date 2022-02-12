import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;
  // props will always have the content within the opening and closing tabs
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export default Card
