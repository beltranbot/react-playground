const AddUser = props => {
  const addUserHandler = (event) => {
    event.preventDefaul();
  }

  return (
    <form onSubmit={addUserHandler}>
      <label htlFor="username">Username</label>
      <input id="username" type="text"></input>
      <label htlFor="age">Age (years)</label>
      <input id="age" type="number"></input>
      <button type="submit">Add User</button>
    </form>
  )
};

export default AddUser;
