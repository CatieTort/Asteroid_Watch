import React, {Component} from 'react';
import space from './images/space.jpg';

class Jumbo extends Component {
    render(){
        return(
			<div>
				<div className="jumbotron">
					<h1 className="display-3 description">
						Asteroid Watch!
					</h1>
						<p className="lead text-primary description">
							Asteroids are rocky, airless worlds that orbit our sun, but are too small to be called planets. Tens of thousands of these minor planets are gathered in the main asteroid belt, a vast doughnut-shaped ring between the orbits of Mars and Jupiter. Asteroids that pass close to Earth are called near-earth objects.
						</p>

						<h5 className="lead text-warning">Data brought to live via NASA API</h5>

				</div>
			</div>
        );
    }
}

export default Jumbo;
