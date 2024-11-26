// import css from "./ImageGallery.module.css";
// import ImageCard from "./ImageCard/ImageCard";

// type Image = {
//   urls: {
//     small: string;
//     regular: string;
//   };
//   alt_description: string | null;
// };

// type ImageGalleryProps = {
//   img: Image[];
//   onImageClick: (imageUrl: string) => void;
// };

// export default function ImageGallery({ img, onImageClick }: ImageGalleryProps) {
//   if (!img || img.length === 0) {
//     return null;
//   }

//   return (
//     <ul className={css.ul}>
//       {img.map((e, index) => (
//         <li key={index} className={css.li}>
//           <ImageCard
//             src={e.urls.small}
//             alt={e.alt_description}
//             onImageClick={() => onImageClick(e.urls.regular)}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }
