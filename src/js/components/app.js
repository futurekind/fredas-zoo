import React from 'react';
import Animal from './animal';
import Slick from 'react-slick';
import '../../css/app.scss';

const slickSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
}

const animals = [
    {
        picture: require('../../assets/animals/images/horse.jpg'),
        title: 'Pferd',
        sound: require('../../assets/animals/sounds/horse.wav')
    },
    {
        picture: require('../../assets/animals/images/cow.jpg'),
        title: 'Kuh',
        sound: require('../../assets/animals/sounds/cow.wav')
    },
    {
        picture: require('../../assets/animals/images/dog.jpg'),
        title: 'Hund',
        sound: require('../../assets/animals/sounds/dog.wav')
    },
    {
        picture: require('../../assets/animals/images/duck.jpg'),
        title: 'Ente',
        sound: require('../../assets/animals/sounds/duck.wav')
    },
    {
        picture: require('../../assets/animals/images/goat.jpg'),
        title: 'Ziege',
        sound: require('../../assets/animals/sounds/goat.wav')
    },
    {
        picture: require('../../assets/animals/images/pig.jpg'),
        title: 'Schwein',
        sound: require('../../assets/animals/sounds/pig.wav')
    },
    {
        picture: require('../../assets/animals/images/rooster.jpg'),
        title: 'Hahn',
        sound: require('../../assets/animals/sounds/rooster.wav')
    },
    {
        picture: require('../../assets/animals/images/sheep.jpg'),
        title: 'Schaaf',
        sound: require('../../assets/animals/sounds/sheep.wav')
    },
    {
        picture: require('../../assets/animals/images/cat.jpg'),
        title: 'Katze',
        sound: require('../../assets/animals/sounds/cat.wav')
    },

]

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            audioLoaded: false,
            animals: []
        }
    }

    componentDidMount() {
        animals.map(a => this.preloadAudio(a));
    }

    render() {
        return (
            <Slick {...slickSettings}>
                {animals.map((animal, i) => {
                    return <div key={i}><Animal {...animal} /></div>
                })}
            </Slick>
        )
    }

    renderAnimals() {
        if(this.state.audioLoaded) {
            return (
                <Slick {...slickSettings}>
                    {animals.map((animal, i) => {
                        return <div key={i}><Animal {...animal} /></div>
                    })}
                </Slick>
            )
        }
    }

    preloadAudio(animal) {
        if(animal.sound !== '') {
            let audio = new Audio();
            audio.src = animal.sound;
            audio.addEventListener('canplaythrough', () => {
                let newAnimals = this.state.animals;
                newAnimals.push(animal);
                this.setState({animals: newAnimals});
            })

        }
    }
}
