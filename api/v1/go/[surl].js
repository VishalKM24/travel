import dbConnect from '../../../../src/Utils/DBConnect';
import UrlSchema from '../../../../src/Models/UrlSchema';

dbConnect();

export default async function GetEmails(req,res) {
    const {method, query: { email }} = req;

    switch (method) {
		case 'GET':
			const data = await UrlSchema.findOne({ "Email": email }, (err, data) => {
				if (err) {
					res.status(500).json({ success: false, message: err })
				}
				res.status(200).json({ success: true, data: data })
			})
			break;
		default:
			res.status(400).json({ message: "We only support GET requests on this api" });
			break;
	}
}