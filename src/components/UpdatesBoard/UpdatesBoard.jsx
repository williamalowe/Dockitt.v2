import UpdateItem from "./UpdateItem";
import styles from "./UpdatesBoard.module.css";

const UpdatesBoard = () => {
  return (
    <div className={styles.updates}>
      <div className={styles.header}>
        <h3>Updates</h3>
      </div>
      <div className={styles.updateList}>
        <UpdateItem
          user="This is a demo"
          task=""
          description="THIS COMPONENT CURRENTLY DOES NOT FUNCTION AND IS ONLY SHOWN FOR DISPLAY PURPOSES."
        />
        <UpdateItem
          user="user002"
          task="1717582688834"
          description="Task has returned to in progress from under review."
        />
        <UpdateItem
          user="user001"
          task="1717556928701"
          description="Task has been cancelled"
        />
        <UpdateItem
          user="user001"
          task="1717565900129"
          description="Task has been updated from backlog to in progress."
        />
      </div>
    </div>
  );
};

export default UpdatesBoard;
