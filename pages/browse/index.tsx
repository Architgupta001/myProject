import Gallery from "react-photo-gallery";
import { Images } from "./Images";
import { useState, useCallback } from "react";
import Navbar from "../../components/NavBar/Navbar";
import Carousel, { Modal, ModalGateway } from "react-images";

const Browse = (props:any) => {

// 	const [currentImage, setCurrentImage] = useState(0);
//   const [viewerIsOpen, setViewerIsOpen] = useState(false);

//   const openLightbox = useCallback((event: any, {photo , index}) => {
//     setCurrentImage(index);
//     setViewerIsOpen(true);
//   }, []);

//   const closeLightbox = () => {
//     setCurrentImage(0);
//     setViewerIsOpen(false);
//   };

	const [state, setState] = useState({
		currentImage: 0,
		setCurrentImage: 0,
		viewerIsOpen: false,
		setViewerIsOpen: false,
	})

	const openLightbox = useCallback((event:any, { photo, index }) => {
		setState({...state, setCurrentImage: index, setViewerIsOpen: true});
	}, [state]);

	const closeLightbox = () => {
		setState({...state, setCurrentImage: 0,setViewerIsOpen: false })
	};

	return (
		<>
		<Navbar />
		<div style={{marginTop: "4rem"}}></div>

		<div style={{padding: "1rem"}}>
			<center style={{marginTop: "-1rem"}}><h1>Image Gallery</h1></center>
				<Gallery photos={Images} onClick={() => openLightbox} />

			<ModalGateway >
				{state.viewerIsOpen ? (
				<Modal onClose={() =>closeLightbox}>
					<Carousel
					currentIndex={state.currentImage}
					views={props.photos.map((x:any) => ({
						...x,
						srcset: x.srcSet,
						caption: x.title
					}))}
					/>
				</Modal>
				) : null}
			</ModalGateway>
		  
		</div>

		</>
	)
}

export default Browse;