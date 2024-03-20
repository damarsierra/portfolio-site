import Photo from './photo/photo';
import styles from './photo-gallery.module.css'

const photos: { src: string, alt: string }[] = [
    {
        src: "https://lh3.googleusercontent.com/pw/AP1GczMxHIh8igSKtFCFbK8LnLaLCc6C4GTT_-c46WSdSu358fXigwdn-3f3hObSTR4OK5GGESpK1uK4Q6pkK1Yb_4duGTZKO_10yCkl_pKUnfse-vp-KhVSsBCGLNX-Jydg4c6pILhaNdhcA8LhN96WdhPoNA=w3332-h1874-s-no?authuser=0",
        alt: "Image of the Marietta Diner"
    },
    {
        src: "https://lh3.googleusercontent.com/pw/AP1GczPJchjxYx932__YqTICysE4GiHMbCBgN9sHIKXPyVRV5f7Vc1i1rY-joPbIVvgUIqzXgpoxeI5gcXwkjp60HNjES0NxG2Ewihbb847hvRk5AAmGx9u6zGbNhBe3n-DVfIvDCdfTH_4wZPMSFa0HPqva=w1116-h1874-s-no?authuser=0",
        alt: "Image of pines at the Chattahoochee River Park"
    }
]

function PhotoGallery() {
    return (
        <div className={styles.galleryContainer}>
            {photos.map((photo, i) =>
            (i % 2 ?
                <Photo key={i} src={photo.src} alt={photo.alt} side={0} />
                :
                <Photo key={i} src={photo.src} alt={photo.alt} side={1} />
            )
            )}
        </div>
    )
}

export default PhotoGallery;