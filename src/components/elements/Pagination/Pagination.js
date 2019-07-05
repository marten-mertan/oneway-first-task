import React, { Component } from 'react';
import './Pagination.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

class Pagination extends Component {
    state = {

    }

    render() {
        return (
            <div className="pagination-wrap">
                <ul>
                    <li>
                        <a className="prev page-numbers" href="/">
                            <FontAwesomeIcon icon={faArrowCircleLeft} />
                        </a>
                    </li>
                    <li>
                        <a className="page-numbers" href="/">1</a>
                    </li>
                    <li>
                        <span className="page-numbers current">2</span>
                    </li>
                    <li>
                        <a className="page-numbers" href="/">3</a>
                    </li>
                    <li>
                        <a className="page-numbers" href="/">4</a>
                    </li>
                    <li>
                        <a className="next page-numbers" href="/">
                            <FontAwesomeIcon icon={faArrowCircleRight} />
                        </a>
                    </li>
                </ul>

            </div>
        )
    }
}

export default Pagination