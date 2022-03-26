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
				<GenericCard text="Welcome to Diet Optimizer. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum" style={{ width: '15em' }} />
				<img src={logo} className="homeBackground" />
				<div className="SearchBar">
					<GenericCard
						text={
							<SearchBar />
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
