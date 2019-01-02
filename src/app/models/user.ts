export class User{
	constructor(
		public _id: string,
		public email:string,
		public password:string,
		public name: string,
		public job: string,
		public web: string,
		public description: string,
	){}
}