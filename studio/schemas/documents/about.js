export default {
	title: 'About',
	name: 'about', 
	type: 'document',
	fields: [
		{
			title: 'Intro',
			name: 'intro',
			type: 'string',
		},
		{
			title: 'Main image',
			name: 'mainImage',
			type: 'image'
		},
		{
			title: 'About me',
			name: 'aboutMe',
			type: 'text'
		},
		{
			title: 'CV',
			name: 'cv',
			type: 'file'
		},
		{
			title: 'GitHub Link Main',
			name: 'gitHubLinkMain',
			type: 'string'
		}
	]
}