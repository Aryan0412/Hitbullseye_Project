import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Notes Keeper App</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
						
					)
				}
				className='save'
			>
				Switch Mode
			</button>
		</div>
	);
};

export default Header;
