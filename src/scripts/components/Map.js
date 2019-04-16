import React from 'react';

class Map extends React.Component {
    render() {
        return (
            <div id={'map'}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13520.366630886405!2d34.779882238434546!3d32.093808377499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4bee9d4423d3%3A0x652da0f046dd57b5!2sYehuda+Hamaccabi%2C+Tel+Aviv-Yafo!5e0!3m2!1sen!2sil!4v1551891651605"
                    width="100%" height="650" frameBorder="0" style={{border:0, display: 'block'}} allowFullScreen/>
            </div>
        )
    }
}

export default Map;