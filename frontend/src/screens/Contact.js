import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_i9cv5rq',
				'template_g6vu5sd',
				e.target,
				'user_V6snipPpYP4SS1Dr0uAd9'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}

	return (
		<div className="row top">
			<div className="col-2">
				<h1>Contact Us</h1>
				<form className="form" onSubmit={sendEmail}>
					<div>
						{/* <input type="hidden" name="contact_number" /> */}
						<label>Name</label>
						<input type="text" name="user_name" />
					</div>
					<div>
						<label>Email</label>
						<input type="email" name="user_email" />
					</div>
					<div>
						{' '}
						<label>Message</label>
						<textarea rows="10" name="message" />
					</div>
					<div>
						<button className="primary block" type="submit" value="Send">
							Send
						</button>
					</div>
				</form>
			</div>
			<div className="col-1">
				<ul>
					<li>
						<div className="card card-body">
							<h2>Location</h2>
							<p>
								<i className="fa fa-map-marker fa-fw"> </i>
								Brgy. Calayo,
								<br />
								Nasugbu, Batangas
								<br />
								Philippines
							</p>
						</div>
					</li>
					<li>
						<div className="card card-body">
							<h2>Email</h2>
							<p>
								<i className="fa fa-envelope fa-fw"> </i>info@gadgetnetics.com
							</p>
						</div>
					</li>
					<li>
						<div className="card card-body">
							<h2>Phone Number</h2>

							<p>
								<i className="fa fa-phone fa-fw"> </i>+63 998 123 1234
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}
