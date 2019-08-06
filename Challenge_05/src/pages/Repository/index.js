import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner, IssueList, Pagination, Button } from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    state: 'open',
    repoName: undefined,
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    this.setState({ repoName });
    // api.github.com/repos/rocketseat/unform
    // api.github.com/repos/rocketseat/unform/issues

    // const response = await api.get(`/repos${repoName}`)
    // const issues = await api.get(`/repos${repoName}/issues`)
    // Em vez de fazer 1 de cada vez, deste modo faz as duas ao mesmo tempo
    const { page } = this.state;

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues?page=${page}`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  handleSelect = async e => {
    this.setState({ state: e.target.value, loading: true });
    const { repoName, page } = this.state;

    const state = e.target.value;

    const issues = await api.get(`/repos/${repoName}/issues?page=${page}`, {
      params: {
        state,
        per_page: 5,
      },
    });

    this.setState({
      state,
      issues: issues.data,
      loading: false,
    });
  };

  handleBackPage = async e => {
    e.preventDefault();
    this.setState({ loading: true });

    const { state, repoName, page } = this.state;

    const issues = await api.get(`/repos/${repoName}/issues?page=${page - 1}`, {
      params: {
        state,
        per_page: 5,
      },
    });

    this.setState({
      page: page - 1,
      issues: issues.data,
      loading: false,
    });
  };

  handleNextPage = async e => {
    e.preventDefault();
    this.setState({ loading: true });

    const { state, repoName, page } = this.state;

    const issues = await api.get(`/repos/${repoName}/issues?page=${page + 1}`, {
      params: {
        state,
        per_page: 5,
      },
    });

    this.setState({
      page: page + 1,
      issues: issues.data,
      loading: false,
    });
  };

  render() {
    const { repository, issues, loading, state, page } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }
    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssueList>
          <select value={state} onChange={this.handleSelect}>
            <option value="open">Aberta</option>
            <option value="all">Todas</option>
            <option value="closed">Fechadas</option>
          </select>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {/* LABELS */}
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>

        <Pagination>
          <Button
            className="back-page"
            onClick={this.handleBackPage}
            firstPage={page === 1}
          >
            <FaAngleLeft color="black" size={20} />
          </Button>
          <Button className="next-page" onClick={this.handleNextPage}>
            <FaAngleRight color="black" size={20} />
          </Button>
        </Pagination>
      </Container>
    );
  }
}
