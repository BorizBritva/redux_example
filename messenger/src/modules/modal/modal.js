import React from 'react';
import { Link } from 'react-router-dom';
export default class Modal extends React.Component {

    showList() {
        if (this.props.comments) {
            return this.props.comments.map((item, i) => {
                return (
                    <li key={i} className="modalList-elem">
                        <div className="modalList-comment">
                            <span className="comment-mail">
                            {item.email.toLowerCase()}
                            </span>
                            <span className="comment-name">
                            {item.name}
                            </span>
                        </div>
                        <div className="comment-txt">
                            {item.body}
                        </div>
                    </li>
                )
            })
        }
    }

    render() {
        return(
            <div className={`modal ${this.props.active ? 'active' : ''}`} onClick={this.props.closeModal}>
                <div className="container">
                <div className="modalWrap">
                    <div className="title__block">
                        <span className="modal-username">{this.props.username}</span>
                        <span className="modal-title">{this.props.title}</span>
                    </div>
                    <div className="modal-body">{this.props.body}</div>
                    <ul className="modalList">
                        {this.showList()}
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}
