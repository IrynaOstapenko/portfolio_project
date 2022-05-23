import sanityClient from '@sanity/client';

export  default sanityClient({
	projectId: 'hepvg5nh',
	dataset: 'production',
	apiVersion: '2022-05-10', 
	useCdn: false,
	withCredentials: true 
});