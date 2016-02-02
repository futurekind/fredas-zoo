import React from 'react';
import '../../css/animal.scss';

class Animal extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if(this.refs.sound) {
            this.refs.sound.play();
            this.refs.sound.pause();
        }
    }

    render() {
        const animalImgStyle = {
            backgroundImage: `url(${this.props.picture})`,
        }

        return (
            <div className="animal" onClick={this.handleClick}>
                <div className="animal__img" style={animalImgStyle} />
                <div className="animal__sticker">
                    <h1 className="animal__title">{this.props.title}</h1>
                </div>
                {this.renderAudio()}
            </div>
        )
    }

    renderAudio() {
        if(this.props.sound) {
            return (
                <audio ref="sound">
                    <source src={this.props.sound} type="audio/wav"/>
                </audio>
            )
        }
    }

    handleClick() {
        if(this.refs.sound) {
            this.refs.sound.play();
        }
    }
}

Animal.propTypes = {
    picture: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    sound: React.PropTypes.string.isRequired,
}

export default Animal;
