import style from "./UserList.module.css";

import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className={style.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
