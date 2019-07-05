import React, { Component } from 'react';
import './Post.scss';

class Post extends Component {
    state = {

    }

    render() {
        return (
                <article className="post">
                    <div className="post-media">
                        <a href="/">
                            <img src={this.props.img} alt="Cat" />
                        </a>
                    </div>
                    <div className="post-content">
                        <h2 className="title">
                            <a href="/">{this.props.title}</a>
                        </h2>

                        <div className="post-details">
                            <a href="/" className="post-date">5&nbsp;Июня,&nbsp;2019</a>
                            <a href="/" className="post-views">1543&nbsp;просмотров</a>
                            <a href="/" className="post-comments">849&nbsp;комментариев</a>
                        </div>

                        <div className="post-disc">
                            <p>
                                {this.props.description}
                            </p>
                        </div>
                    </div>
            </article>
        );

    }
}
export default Post;