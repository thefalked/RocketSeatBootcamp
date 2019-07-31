import React, { Component } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

export default class Repository extends Component {
  state = {
    repository: {},
    issues: [],
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    // api.github.com/repos/rocketseat/unform
    // api.github.com/repos/rocketseat/unform/issues

    // const response = await api.get(`/repos${repoName}`)
    // const issues = await api.get(`/repos${repoName}/issues`)
    // Em vez de fazer 1 de cada vez, deste modo faz as duas ao mesmo tempo
    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`),
      {
        params: {
          state: 'open',
          per_page: 5,
        },
      },
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  render() {
    const { repository, issues, loading } = this.state;
    return <h1>Repository</h1>;
  }
}
