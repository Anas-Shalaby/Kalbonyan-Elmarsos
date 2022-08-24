import Card from "../UI/Card";
import React, { useState } from "react";
import styles from "../UI/Card.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredAge, setenteredAge] = useState("");
  const [error, setMessage] = useState("");

  const AddUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setMessage({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty value)",
      });
      return;
    }

    if (+enteredAge < 1) {
      setMessage({
        title: "Invalid age",
        message: "Please enter a valid age (>0))",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    setenteredUsername("");
    setenteredAge("");
  };
  const FetchUserInputText = (event) => {
    setenteredUsername(event.target.value);
  };

  const FetchUserInputAge = (event) => {
    setenteredAge(event.target.value);
  };

  const errorHandle = () => {
    setMessage(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandle}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={FetchUserInputText}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={FetchUserInputAge}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
