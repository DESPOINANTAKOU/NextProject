import styles from "../styles/Home.module.css";

//the component that has all the logic as far as the decision of it's rendering or not.
const ResultsObjects = (props: any) => {
  //this condition must be true to continue!The button must be clicked by the user.
  if (props.clicked) {
    if (props.resultsObject !== null && props.currentUserSearch !== "") {
      console.log(props.resultsObject);
      return (
        <div className={styles.jokediv}>
          <ul className={styles.searchUl}>
            <h3 style={{ color: "#ff80d5", textAlign: "center" }}>
              <span style={{ color: "#ff80d5" }}>&#33; </span>Number of jokes
              for this keyword are: {props.resultsObject?.total}
            </h3>
            {props.resultsObject?.result?.map((joke: any, index: number) => {
              return (
                <li className={styles.searchUlLi} key={index}>
                  {" "}
                  {index + 1} {")"} {joke?.value}
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else if (props.currentUserSearch !== "" && props.resultsObject === null) {
      console.log("no such keyword");
      return (
        <div className={styles.nojoke}>There is no joke with this keyword!</div>
      );
    } else if (props.currentUserSearch === "") {
      console.log("no word entry from user");
      return <div className={styles.noWordGiven}>Please type a keyword!</div>;
    }
  }

  //inside this component's logic we don't change the state of the button because this is something we do in the parent component.
  //Here it is enough that we get inside the ifs only if the state clicked is true!

  //it must have a return statement cause it's a react component
  return <></>;
};

export default ResultsObjects;
