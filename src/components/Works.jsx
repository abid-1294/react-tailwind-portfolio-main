import React from 'react';
import works from '../data/works'
import SectionTitle from './SectionTitle';
import WorkItem from './WorkItem';

function Works() {
	return (
		<div id='worked' className="py-12">
			<SectionTitle>My Works</SectionTitle>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
				{works.map(works => (
					<WorkItem
						key={works.title}
						imgUrl={works.imgUrl}
						title={works.title}
						tech={works.tech}
						workUrl={works.workUrl}
					/>
				))}
			</div>
		</div>
	);
}

export default Works;
