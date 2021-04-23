import '../Styles/Global.scss';

import { Header } from "../components/Header";
import { Player } from "../components/Player";

import styles from '../Styles/App.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  );
}

export default MyApp
