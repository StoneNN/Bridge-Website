import styles from './trailnotice.css';
import TeamList from'./index';
import * as index from './index';
const {TeamData}= index;
export default function() {
  return (
    <div className={styles.normal}>
      <TeamList
         TeamData={TeamData}
        />
    </div>
  );
}
