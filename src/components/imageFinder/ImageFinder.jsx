import React, { Component } from 'react';
import { getImages } from '../../services/ImagesService';

import Container from '../container/Container';
import Loader from '../shared/loader/Loader';
import Modal from '../shared/modal/Modal';
import MyButton from '../shared/button/MyButton';
import ImageGallery from '../imageGallery/ImageGallery';
import ImageSearchbar from '../imageSearchBar/ImageSearchBar';
import './ImageFinder.css';

class ImageFinder extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    largeImage: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.setState({ isLoading: true });
      const images = await getImages(this.state.query);
      this.setState({ images: images.hits, isLoading: false });
      return;
    }
    if (this.state.page !== prevState.page) {
      this.setState({ isLoading: true });
      const images = await getImages(this.state.query, this.state.page);
      this.setState(prev => ({
        images: [...prev.images, ...images.hits],
        isLoading: false,
      }));
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  onInputQuery = async query => {
    this.setState({ query, page: 1 });
  };

  loadMore = async () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  toggleModal = url => {
    if (!url) {
      url = null;
    }
    this.setState({ showModal: !this.state.showModal, largeImage: '' });
  };

  addLargeImg = largeImgUrl => {
    this.setState({ largeImage: largeImgUrl, showModal: true });
  };

  render() {
    return (
      <Container>
        <div className="imageGrid">
          <ImageSearchbar onChange={this.onInputQuery} />
          <ImageGallery
            images={this.state.images}
            addLargeImg={this.addLargeImg}
          />
          {this.state.isLoading && <Loader />}
          {!!this.state.images.length && !this.state.isLoading && (
            <MyButton
              style={{
                width: 150,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              onClick={this.loadMore}
            >
              Load More
            </MyButton>
          )}
          {this.state.showModal && (
            <Modal active={this.state.showModal} setActive={this.toggleModal}>
              <img
                className="largeImg"
                src={this.state.largeImage}
                alt="Large img"
              />
            </Modal>
          )}
        </div>
      </Container>
    );
  }
}

export default ImageFinder;
