/* eslint-disable no-unused-vars */
import "../Home/Css/Card.css";
function Card(props) {
  const Classes = "Card" + props.className;
  return <div className={Classes}>{props.children}</div>;
}

export default Card;
