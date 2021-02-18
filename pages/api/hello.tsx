/*
	API DEMO
	This allows an api to be built directly on the frontend
	Useful for future expansion
*/

export default (req, res) => {
  	res.status(200).json({ name: 'Hi there! :D' })
}
