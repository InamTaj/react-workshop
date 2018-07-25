import React from 'react';
import PropTypes from 'prop-types';

import './RepoCard.css';

const RepoCard = ({repo}) => {
  return (
      <div className="card repo">
        <h4 className="repo-title"><a href={repo.html_url}>{repo.name}</a></h4>
        <table>
          <tbody>
          <tr>
            <td><strong>Description</strong></td>
            <td>{repo.description ? repo.description : 'N/A'}</td>
          </tr>
          <tr>
            <td><strong>Default Branch</strong></td>
            <td><code>{repo.default_branch}</code></td>
          </tr>
          <tr>
            <td><strong>Language</strong></td>
            <td>{repo.language ? repo.language : 'N/A'}</td>
          </tr>
          <tr>
            <td><strong>Last Updated at</strong></td>
            <td>{repo.updated_at}</td>
          </tr>
          <tr>
            <td><strong>License</strong></td>
            <td>{repo.license ? repo.license.name : 'N/A'}</td>
          </tr>
          <tr>
            <td><strong>Stars</strong></td>
            <td>{repo.stargazers_count}</td>
          </tr>
          <tr>
            <td><strong>Open Issues</strong></td>
            <td>{repo.open_issues_count}</td>
          </tr>
          <tr>
            <td><strong>Public</strong></td>
            <td>{repo.private ? 'No' : 'Yes'}</td>
          </tr>
          <tr>
            <td><strong>URL</strong></td>
            <td><a href={repo.html_url}>{repo.html_url}</a></td>
          </tr>
          </tbody>
        </table>
      </div>
  );
};

RepoCard.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoCard;
