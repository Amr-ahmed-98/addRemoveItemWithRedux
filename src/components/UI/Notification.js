import classes from "./Notification.module.css";
const Notification = (props) => {
  let initialClass = "";
  if (props.status === "success") {
    initialClass = classes.success;
  }
  if (props.status === "error") {
    initialClass = classes.error;
  }
  const mainClass = `${classes.content} ${initialClass}`;
  return (
    <section className={mainClass}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};
export default Notification;
