import styles from './photo.module.css'

interface PhotoProps {
    src: string;
    alt: string;
    side: number;
}

function Photo({ src, alt, side }: PhotoProps) {
    return (
        (side === 0 ?
            <div className={`${styles.imageContainer} ${styles.leftAlign}`}>
                <img className={styles.image} src={src} alt={alt} />
            </div>
            :
            <div className={`${styles.imageContainer} ${styles.rightAlign}`}>
                <img className={styles.image} src={src} alt={alt} />
            </div>
        )
    )
}

export default Photo