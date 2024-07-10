import { useState } from "react";

const ContactInfo = () => {

  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    alert('Thank you for your feedback!');
    setFeedback('');
  };
  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact Us</h2>
      <p className="text-lg text-center mb-6 text-gray-600">
        We would love to hear from you! Whether you have a question about our products, need assistance, or just want to provide feedback, feel free to reach out to us.
      </p>
      <div className="flex flex-col md:flex-row justify-around items-center mb-6">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold text-gray-700">Email</h3>
          <p className="text-gray-600">support@fitflex.com</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold text-gray-700">Phone</h3>
          <p className="text-gray-600">+1 (555) 123-4567</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold text-gray-700">Address</h3>
          <p className="text-gray-600">123 FitFlex Avenue<br />Fitness City, FC 12345</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="text-center">
        <div className="mb-4">
          <textarea
            className="w-full p-4 rounded-lg shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Your feedback..."
            value={feedback}
            onChange={handleFeedbackChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Send Us a Message
        </button>
      </form>
    </div>
  );
};

export default ContactInfo;
