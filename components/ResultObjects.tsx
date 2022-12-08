import styles from "../styles/Home.module.css";

const ResultsObjects = (props: any) => {
  if (props.clicked) {
    if (
      props.currentUserSearch.length >= 3 &&
      props.currentUserSearch.length <= 120 &&
      props.resultsObject !== null
    ) {
      console.log(props.resultsObject);
      return (
        <div className={styles.jokediv}>
          <ul>
            {props.resultsObject?.result?.map((joke: any, index: number) => {
              return <li key={index}>{joke?.value}</li>;
            })}
          </ul>
        </div>
      );
    }
    if (props.currentUserSearch !== "" && props.resultsObject === null) {
      console.log("no such keyword");
      // setClicked(false);
      return (
        <div className={styles.nojoke}>There is no joke with this keyword!</div>
      );
    }
    if (props.currentUserSearch === "") {
      console.log("no word entry from user");
      return <div className={styles.noWordGiven}>Please type a keyword!</div>;
    }
  }

  //it must have a return statement cause it's a react component
  return <></>;
};

export default ResultsObjects;
