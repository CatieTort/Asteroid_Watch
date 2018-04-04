import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

class SpaceTable extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
			<div className="table-container text-white bg-dark mb-3">

				<div className="space-table">
						<div className="space-table__img-block--1">
							<img src={require('./images/rock.png')} alt="spinning asteroid" className="spinny-rock"/>
						</div>
					<h3 className="text-success description" id="title">Astroids Passing Near Earth</h3>
					<div className="space-table__img-block--2">
						<img src={require('./images/rock.png')} alt="spinning asteroid" className="spinny-rock"/>
					</div>
				</div>

				<Table hover className="table">
					<thead>
						<tr>
							<th className="table-heading" scope="col">Name</th>
							<th className="table-heading" scope="col">Date Of Closest Approach</th>
							<th className="table-heading" scope="col">Estimated Diameter in km <br/>(min - max)</th>
							<th className="table-heading" scope="col">Velocity (mph)</th>
							<th className="table-heading" scope="col">Closest Distance To Earth (miles)</th>
						</tr>
					</thead>
					<tbody>
						{this.props.asteroids.map((asteroid)=> {
							return(
								<tr className="table-dark" key= {asteroid.id}>
									<td className="content-text">{asteroid.name}</td>
									<td className="content-text">{asteroid.date}</td>
									<td className="content-text">{asteroid.diameterMin} - {asteroid.diameterMax}</td>
									<td className="content-text">{asteroid.velocity}</td>
									<td className="content-text">{asteroid.distance}</td>
								</tr>
							)
						})}
					</tbody>
				</Table>

			</div>
        );
    }
}

export default SpaceTable;
