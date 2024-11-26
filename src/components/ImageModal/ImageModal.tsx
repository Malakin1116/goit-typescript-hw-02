// import Modal from "react-modal";
// import { useEffect } from "react";

// import css from "./ImageModal.module.css";

// Modal.setAppElement("#root");

// type ImageModalProps = {
//   isOpen: boolean;
//   onRequestClose: () => void;
//   imageUrl: string | null;
// };

// export default function ImageModal({
//   isOpen,
//   onRequestClose,
//   imageUrl,
// }: ImageModalProps) {
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent): void => {
//       if (e.key === "Escape") {
//         onRequestClose();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [onRequestClose]);

//   if (!imageUrl) return null;

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       className={css.modalContent}
//       overlayClassName={css.modalOverlay}
//       shouldCloseOnOverlayClick={true}
//     >
//       <button className={css.closeButton} onClick={onRequestClose}>
//         ✖
//       </button>
//       <img src={imageUrl} alt="Large" className={css.modalImage} />
//     </Modal>
//   );
// }
