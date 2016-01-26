import React from 'react';
import Animal from './animal';
import Slick from 'react-slick';
import '../../css/app.scss';

const slickSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
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

    render() {
        return (
            <Slick {...slickSettings}>
                {animals.map((animal, i) => {
                    return <div key={i}><Animal {...animal} /></div>
                })}
            </Slick>
        )
    }
}
