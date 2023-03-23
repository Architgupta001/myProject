import styles from "./Banner.module.scss";
import Image from "next/dist/client/image";
import bannerScreenshot from "../../public/images/banner-screenshot.png";
import Link from "next/dist/client/link";

const Banner = () => {
	return (
		<div className={styles.bannerContainer}>
			<div className={styles.bannerComponentLeft}>
				<p style={{fontSize: "2.25rem"}}>Automate your creative process</p>
				<p style={{fontSize: "1.75rem"}}>Book your free demo today</p>
				<br />
				<form action="">
					<input type="email" name="email" id="email" placeholder="Enter your email ID"/>
					<br /><br />
					<button type="submit">Book free trial</button>
						<Link href="browse">
						
							<button style={{marginLeft: "1.75rem"}}>
							Browse Images
							</button>
						
						</Link>
				</form>
			</div>
			<div className={styles.BannerComponentRight}>
				<Image src={bannerScreenshot} alt="screenshot of the sample image flow" layout='intrinsic' objectFit='contain' />
			</div>
		</div>
	)
}
export default Banner;