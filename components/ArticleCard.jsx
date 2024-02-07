import Image from "next/image";
import EyeIcon from "../components/icons/EyeIcon";
import HeartIcon from "../components/icons/HeartIcon";
import CommentIcon from "../components/icons/CommentIcon";
import styles from "../styles/ArticleCard.module.css";

const ArticleCard = ({ article }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" className={styles.container}>
      full stack egnieer 2010-2013
      <div className={styles.content}>
        <h3 className={styles.title}> article title </h3>
        <p>article description</p>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <EyeIcon className={styles.icon} /> article 1
        </div>
        <div className={styles.stat}>
          <HeartIcon className={styles.icon} /> article 2
        </div>
        <div className={styles.stat}>
          <CommentIcon className={styles.icon} /> article 3
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
