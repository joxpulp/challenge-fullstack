import swaggerJsdoc from 'swagger-jsdoc';

const options = {
	customSiteTitle: 'Edrans Ecommerce Challenge',
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Edrans Ecommerce Challenge',
			version: '0.0.1',
			description:
				'This is a simple CRUD API application made with Express and documented with Swagger',
			contact: {
				name: 'Josue',
				email: 'joxpulp@gmail.com',
			},
		},
		servers: [
			{
				url: 'https://hekitech.herokuapp.com',
				description: 'Frontend and Backend',
			},
		],
	},
	apis: ['src/routes/*'],
};

export const specs = swaggerJsdoc(options);