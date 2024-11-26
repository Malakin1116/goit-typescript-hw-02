import { useState, useEffect } from "react";
import { fetchUser } from "../api";

import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import ImageModal from "./ImageModal/ImageModal";

import css from "./App.module.css";

export default function App() {
  type Photo = {
    id: string;
    urls: { small: string };
    alt_description: string | null;
  };

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [allPages, setAllPages] = useState<number>(999);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    if (searchTerm === "") {
      return;
    }
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetchUser(searchTerm, page);
        setPhotos((prevPhotos) => [...prevPhotos, ...res.articles]);
        setAllPages(res.totalPages);
      } catch (err) {
        setError(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchTerm, page]);

  const handleSearch = (newTopic: string) => {
    setSearchTerm(newTopic);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.div_for_all}>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery img={photos} onImageClick={openModal} />
      {loading && <Loader />}

      {page >= allPages && <p>End OF IMG</p>}
      {error && <ErrorMessage />}
      {photos.length > 0 && !loading && page < allPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImage}
      />
    </div>
  );
}
