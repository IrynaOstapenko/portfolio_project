export default {
	title: 'Project',
	name: 'project', 
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string'
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title'
			}
		},
        {
			title: 'GitHub Link',
			name: 'gitHubLink',
			type: 'string'
		},
        {
			title: 'Netlify Link',
			name: 'netlifyLink',
			type: 'string'
		},
		{
			title: "Description",
			name: "description",
			type: "text"
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
			fields: [
                {
                    title: 'Caption',
                    name: 'caption',
                    type: 'text'
                }
            ] 
		},
        {
			title: 'Collaborators',
			name: 'collaborators',
			type: 'array',
			of: [{ 
				type: 'reference', 
				to: [{ type: 'collaborator' }] 
			}]
		}
	]
}