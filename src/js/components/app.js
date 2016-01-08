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

export default class App extends React.Component {

    render() {
        return (
            <Slick {...slickSettings}>
                <div><Animal picture="http://placehold.it/800x800" title="Pferd"/></div>
                <div><Animal picture="http://placehold.it/800x800" title="Kuh"/></div>
                <div><Animal picture="http://placehold.it/800x800" title="Katze"/></div>
                <div><Animal picture="http://placehold.it/800x800" title="Hund"/></div>
            </Slick>
        )
    }
}
