import React, { Component } from 'react';

import { fetchPictures } from 'services/app';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export default class App extends Component {
  state = {
    pictures: [],
    isLoading: false,
    error: null,
    page: 1,
    searchText: [],
    modal: {
      isOpen: false,
      data: null,
    },
  };

  onOpenModal = modalData => {
    this.setState({
      modal: {
        isOpen: true,
        data: modalData,
      },
    });
  };

  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        data: null,
      },
    });
  };

  handleLoadMore = () => {
    const { searchText, page } = this.state;
    this.loadPictures(searchText, page + 1, true);

    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  handleSubmitForm = event => {
    event.preventDefault();

    const { search } = event.target.elements;

    this.loadPictures(search.value);

    this.setState({ searchText: search.value });

    this.setState({
      page: 1,
    });
  };

  loadPictures = async (searchText = '', page = 1, append = false) => {
    try {
      this.setState({ isLoading: true });
      const { hits } = await fetchPictures(searchText, page);
      this.setState(prevState => {
        return {
          pictures: append ? [...prevState.pictures, ...hits] : hits,
        };
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.loadPictures();
  }

  render() {
    return (
      <div className="App">
        <Searchbar handleSubmitForm={this.handleSubmitForm} />
        <ImageGallery
          pictures={this.state.pictures}
          onOpenModal={this.onOpenModal}
        />
        {this.state.isLoading && <Loader />}
        {this.state.pictures.length ? (
          <Button title={'Load more'} onClick={this.handleLoadMore} />
        ) : (
          false
        )}

        {this.state.modal.isOpen && (
          <Modal
            onCloseModal={this.onCloseModal}
            data={this.state.modal.data}
          />
        )}
      </div>
    );
  }
}
