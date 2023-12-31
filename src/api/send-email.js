import nodemailer from 'nodemailer';

export async function post(request) {
	const { name, surname, email, number, message } = request.body;

	// Configure Nodemailer to use Gmail's SMTP server
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'hytta.build@gmail.com', // Your Gmail address
			pass: 'Hyttabuild123@' // Gmail password or App password if 2FA is enabled
		}
	});

	const mailOptions = {
		from: email, // Sender's email, as provided in the form
		to: 'info@hytta.lt', // Your Cloudflare-managed email address
		subject: `New Message from ${name} ${surname}`,
		text: `Name: ${name}\nSurname: ${surname}\nEmail: ${email}\nPhone Number: ${number}\nMessage: ${message}`,
		html: `<p>Name: ${name}</p><p>Surname: ${surname}</p><p>Email: ${email}</p><p>Phone Number: ${number}</p><p>Message: ${message}</p>`
	};

	try {
		await transporter.sendMail(mailOptions);
		return {
			status: 200,
			body: { message: 'Email sent successfully' }
		};
	} catch (error) {
		console.error(error); // It's good practice to log the error for debugging
		return {
			status: 500,
			body: { error: 'Failed to send email' }
		};
	}
}
