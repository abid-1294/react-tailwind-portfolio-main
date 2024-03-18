import React from 'react';
import SectionTitle from './SectionTitle';
import ProvideItem from './ProvideItem';
import providesData from '../data/providesData';

function Provide() {
	return (
		<div id='provide' className="py-12">
			<SectionTitle>I Provide</SectionTitle>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{providesData.map(providesData => (
					<ProvideItem
						key={providesData.title}
						title={providesData.title}
						icon={providesData.icon}
						description={providesData.description}
					/>
				))}
			</div>
		</div>
	);
}

export default Provide;
