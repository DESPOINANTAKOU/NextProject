import Image from "next/image";
import Link from "next/link";
import download from "../../public/Static/images/download.png";
import styles from "../../styles/Home.module.css";

export default function Header () : any {
    return (
<header className={styles.header}>
          {" "}
          <Image className={styles.logo} alt="logo" src={download}></Image>
          <div>
            <Link href="/Categories">
              <button className={styles.button} type="button">
                Categories
              </button>
            </Link>
            <Link href="/Search">
            <button className={styles.button} type="button">
              Search
            </button>
            </Link>
          </div>
        </header>
    )
};