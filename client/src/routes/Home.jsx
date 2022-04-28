import React from 'react';
import '../static/css/Home.css';
import GenericCard from '../components/GenericCard';
import GenericButton from '../components/GenericButton';
import SearchBar from '../components/SearchBar';
import logo from '../static/images/tableMunchies.svg';


function Home() {
	return (
		<div className="homeBg">
			<div className="headerHome">
				<GenericCard text="Welcome to Diet Optimizer. Start by finding a restaurant or typing some calories!" style={{ width: '15em' }} />
				<img src={logo} className="homeBackground" />
				<div className="SearchBar">
					<GenericCard
						text={
							<SearchBar placeholder="Type here!" />
						}
						style={{ width: '15em' }}
					/>
					<GenericButton text={'GO'} pathto={'./Results'} />
				</div>
			</div>
		</div>
	);
}

export default Home;
