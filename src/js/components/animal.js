import React from 'react';
import '../../css/animal.scss';

class Animal extends React.Component {
    render() {
        return (
            <div className="animal">
                <img src={this.props.picture} alt={this.props.title} className="animal__img" />
                <div className="animal__sticker">
                    <h1 className="animal__title">{this.props.title}</h1>
                </div>
            </div>
        )
    }
}

Animal.propTypes = {
    picture: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
}

export default Animal;
