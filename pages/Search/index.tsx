import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import download from "../../public/Static/images/download.png";
import { fetchCurrentWord } from "../fetch";
import ResultsObjects from "../../components/ResultObjects";
import { useState } from "react";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function SearchPage(props: any) {
  const [clicked, setClicked] = useState<boolean>(false);
  const [currentUserSearch, setCurrentUserSearch] = useState<string>("");
  const [resultsObject, setResultsObject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const Loader = (
    <ClipLoader size={25} aria-label="Loading Spinner" data-testid="loader" />
  );

  //we create an async function that calls inside of it the fetchCurrentWord function
  const fetchUserSearch = async () => {
    //adding a loader so that we do the fetching correctly

    //if clicked state is true which means that the user clicked the button, this async function will run

    //we store in the userSearch variable the result of the promise that the fetchCurrentWord brings back.Very important to notice is that
    //the argument that it takes is the state that changes every time the user clickes something else in the input element!So the argument
    //is a state itself!
    setIsLoading(true);
    setClicked(true);
    const userSearch = await fetchCurrentWord(currentUserSearch);
    // Update State
    if (userSearch?.result) {
      //setting the global state with the variable that stores the result of the fetching function so that it can be used everywhere
      //in the component else set the result as null meaning empty!
      setResultsObject(userSearch);
    } else {
      setResultsObject(null);
    }
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <div>
        <Head>
          <title>Search Page</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Static/images/chucky2.png" />
        </Head>
        <main className={styles.searchpage}>
          <header className={styles.header}>
            <Image className={styles.logo} alt="logo" src={download}></Image>
            <div>
              <Link href="/">
                <button className={styles.button} type="button">
                  Home Page
                </button>
              </Link>
              <Link href="/Categories">
                <button className={styles.button} type="button">
                  Categories
                </button>
              </Link>
            </div>
          </header>
          <div style={{ flexDirection: "row" }}>
            <h3 className={styles.title}>Search Page</h3>
            <h3 style={{ textAlign: "center" }}>
              Use a keyword to find the joke you are looking for!
            </h3>
            <div className={styles.formdiv} style={{ width: "100%" }}>
              <div className={styles.searchform}>
                <input
                  type="text"
                  className={styles.searchforminput}
                  // when the input is changes from the user 2 things happen : the clicked state turns to true and the userSearch
                  // state accepts a new value which is the user's input!
                  onChange={(event) => {
                    //when the user changes the input the clicked state also changes because it must be pushed again to work!
                    setClicked(false);
                    setCurrentUserSearch(event.target.value);
                  }}
                />
                <button
                  className={styles.searchformbutton}
                  onClick={() => fetchUserSearch()}
                >
                  <i className="fa fa-search"></i>Search Joke
                </button>
              </div>
              {/* this component will take props all of it's parent's states and
            will do it's own calculations internally.This is a kind of
            separation of concerns pattern so that each component has it's own
            logic. */}
              {isLoading === true ? (
                Loader
              ) : (
                <ResultsObjects
                  currentUserSearch={currentUserSearch}
                  setCurrentUserSearch={setCurrentUserSearch}
                  clicked={clicked}
                  setClicked={setClicked}
                  resultsObject={resultsObject}
                  setResultsObject={setResultsObject}
                ></ResultsObjects>
              )}
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}
