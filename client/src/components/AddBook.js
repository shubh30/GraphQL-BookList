import React from 'react';
import { gql, useQuery } from '@apollo/client';

const getAuthorsQuery = gql`
	{
		authors {
			name
			id
		}
	}
`

const DisplayAuthors = () => {
	const {
		loading,
		data
	} = useQuery(getAuthorsQuery)
	if (loading) {
		return (<option disabled>Loading authors</option>)
	} else {
		return data.authors.map(author => {
			return (
				<option key={author.id} value={author.id}>{author.name}</option>
			)
		})
	} 
}

function AddBook(props) {
	return (
		<div>
			<form id="add-book">
				<div className="field">
					<label>Book name:</label>
					<input type="text" />
				</div>
				<div className="field">
					<label>Genre:</label>
					<input type="text" />
				</div>
				<div className="field">
					<label>Author:</label>
					<select>
						<option>Select author</option>
						{ DisplayAuthors() }
					</select>
				</div>
				<button>+</button>

		</form>
		</div>
	);
}

export default AddBook;