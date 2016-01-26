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
        picture: 'http://placehold.it/800x800&text=Ferd',
        title: 'Pferd',
        sound: ''
    },
    {
        picture: 'http://placehold.it/800x800&text=Muh',
        title: 'Kuh',
        sound: ''
    },
    {
        picture: 'http://placehold.it/800x800&text=Kratze',
        title: 'Katze',
        sound: require('../../assets/animals/sounds/cat.wav')
    },
    {
        picture: 'http://placehold.it/800x800&text=Wau',
        title: 'Hund',
        sound: ''
    }
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
