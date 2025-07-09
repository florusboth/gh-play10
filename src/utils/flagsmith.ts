import Flagsmith from 'flagsmith-nodejs';

const flagsmith = new Flagsmith({
	environmentKey: process.env.FLAGSMITH_KEY as string,
	requestTimeout: 60
});

export default flagsmith;
