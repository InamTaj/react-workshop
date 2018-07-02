import React, {Component, Fragment} from 'react';
import ReactLoader from 'react-loading';
import axios from 'axios';

import ErrorLoading from './ErrorLoading/ErrorLoading';
import Searchbox from './Searchbox/Searchbox';
import Card from './Card/Card';

import './GitDashboard.css';

class GitDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: true,
      errorLoading: false,
      searchQuery: '',
      cardType: '',
    };

    this.loadUsers = this.loadUsers.bind(this);
    this.loadUserRepos = this.loadUserRepos.bind(this);
    this.onQueryChange = this.onQueryChange.bind(this);
  }

  componentWillMount() {
    this.loadUsers();
  }

  loadUsers() {
    this.setState({
      cardType: 'user',
    });

    axios.get('https://api.github.com/users')
        .then(({data}) => {
          this.setState({
            isLoading: !this.state.isLoading,
            cardType: 'user',
            data,
          });
        })
        .catch(response => {
          console.error('Error while fetching Users..', response);
          this.setState({
            isLoading: !this.state.isLoading,
            cardType: '',
            errorLoading: response,
          });
        });
  }

  loadUserRepos(repoURL) {
    this.setState({
      isLoading: !this.state.isLoading,
      cardType: 'repo',
    });

    // load repos
    axios.get(repoURL)
        .then(({data}) => {
          this.setState({
            isLoading: !this.state.isLoading,
            data,
          });
        })
        .catch(response => {
          console.error('Error while fetching Repos..', response);
          this.setState({
            isLoading: !this.state.isLoading,
            errorLoading: response,
          });
        });
  }

  onQueryChange(event) {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  render() {
    const { isLoading, errorLoading, data, searchQuery, cardType } = this.state;
    const shouldShowResults = !isLoading && !errorLoading;
    const onClickHandler = cardType === 'user' ? this.loadUserRepos : null;

    return (
        <div className="git-dashboard">
          <h4 className="title">Git Dashboard</h4>
          {
            isLoading && <ReactLoader color="#000000" type="spin" className="loader" />
          }
          {
            errorLoading && <ErrorLoading error={errorLoading} />
          }
          {
            shouldShowResults &&
              (
                  <Fragment>
                    <Searchbox query={searchQuery} onChangeCB={this.onQueryChange}/>
                    {
                      searchQuery && data.filter((user) => user.login.indexOf(searchQuery) > -1)
                        .map((user, index) =>
                            <Card key={index} data={user} cardType={cardType} onClick={onClickHandler} />)
                    }
                    {
                      !searchQuery && data.map((user, index) =>
                        <Card key={index} data={user} cardType={cardType} onClick={onClickHandler} />)
                    }
                  </Fragment>
              )
          }
        </div>
    );
  }
}

export default GitDashboard;
