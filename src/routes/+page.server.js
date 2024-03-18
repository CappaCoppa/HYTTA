// src/routes/api/send-mail.js
import Mailgun from 'mailgun.js';
import formData from 'form-data';

// Initialize Mailgun
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
	username: 'api',
	key: import.meta.env.VITE_MAILGUN_API_KEY // Ensure you're using VITE_ prefix to expose the variable to your client
});

export const actions = {
	default: async ({ request }) => {
		try {
			// Parse the incoming form data
			const form = await request.formData();
			const fname = form.get('fname');
			const lname = form.get('lname');
			const tel = form.get('tel');
			const email = form.get('email');
			const message = form.get('message');
			const htmlContent = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Email Content</title>
                <style>
                    body { font-family: Arial, sans-serif; }
                    .email-container { padding: 20px; }
                    .header { color: #333; }
                    .info { margin-bottom: 20px; }
                    .label { font-weight: bold; }
                </style>
                </head>
                <body>
                <div class="email-container">
                    <h1 class="header">New Message Received</h1>
                    <div class="info">
                        <div><span class="label">Vardas:</span> ${fname}</div>
                        <div><span class="label">Pavardė:</span> ${lname}</div>
                        <div><span class="label">Telefono numeris:</span> ${tel}</div>
                        <div><span class="label">Elektroninis paštas:</span> ${email}</div>
                    </div>
                    <div class="message">
                        <h2 class="header">Message:</h2>
                        <p>${message}</p>
                    </div>
                </div>
                </body>
                </html>
                `;

			await mg.messages.create('hytta.lt', {
				from: 'Hytta  <enquiries@hytta.lt>',
				to: 'hytta.build@gmail.com',
				subject: 'Hytta - Pranešimas',
				html: htmlContent
			});

			return {
				status: 303,
				success: 'Pranešimas buvo sėkmingai išsiųstas.'
			};
		} catch (error) {
			console.log(error);
			// Handle the error
			return {
				status: 500, // Internal Server Error
				body: {
					error: 'Failed to send email.'
				}
			};
		}
	}
};
