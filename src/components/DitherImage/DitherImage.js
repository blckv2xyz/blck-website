import styles from "./DitherImage.module.css";

export default function DitherImage({src}){
    return <div className={styles.container}>
        <img src={src} />
    </div>
}
