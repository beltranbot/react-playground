import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"

const AddUser = props => {
  const addUserHandler = (event) => {
    event.preventDefaul();
  }
  // applying 2 css classes
  return (
    <Card className={classes.input}> 
      <form onSubmit={addUserHandler}>
        <label htlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htlFor="age">Age (years)</label>
        <input id="age" type="number"></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
};

export default AddUser;
