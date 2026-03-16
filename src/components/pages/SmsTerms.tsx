import React from 'react';

interface SmsTermsProps {
  onBack: () => void;
}

export const SmsTerms: React.FC<SmsTermsProps> = ({ onBack }) => {
  return (
    <div className="section-padding bg-white">
      <div className="container-main max-w-3xl">
        <button
          onClick={onBack}
          className="text-scarlet hover:text-scarlet-600 font-medium mb-8 inline-flex items-center"
        >
          &larr; Back to Home
        </button>

        <h1 className="mb-4">SMS Terms &amp; Conditions</h1>
        <p className="text-lg text-gray-600 mb-2">Buckeye Physical Therapy</p>
        <p className="text-gray-500 mb-10">Last updated: March 16, 2026</p>

        <div className="prose prose-gray max-w-none">
          {/* Intro */}
          <p className="text-gray-600 mb-8">
            Buckeye Physical Therapy, PLLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) may send SMS (text)
            messages to patients and caregivers for the purpose of appointment reminders, scheduling,
            care-related follow-ups, and general health-related communication. By opting in to our SMS
            program, you agree to the terms outlined below.
          </p>

          {/* 1. How We Collect Opt-In Consent */}
          <h2 className="text-xl font-semibold mt-10 mb-4">How We Collect Opt-In Consent</h2>
          <p className="text-gray-600 mb-4">
            We obtain your consent to send SMS messages through one or more of the following methods:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>
              <strong>Website contact or scheduling form:</strong> You enter your phone number and check a
              consent checkbox indicating you agree to receive text messages from Buckeye Physical Therapy.
            </li>
            <li>
              <strong>In-person verbal opt-in:</strong> You provide verbal consent to receive text messages
              at the time of your evaluation or appointment.
            </li>
            <li>
              <strong>Paper intake forms:</strong> You sign an intake form at the time of service that includes
              consent to receive SMS communications.
            </li>
          </ul>
          <p className="text-gray-600 mb-6 italic">
            Images of paper opt-in forms are available upon request.
          </p>

          {/* 2. What You Consent To */}
          <h2 className="text-xl font-semibold mt-10 mb-4">What You Consent To</h2>
          <p className="text-gray-600 mb-4">
            By opting in, you consent to receive the following types of text messages:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Appointment reminders and confirmations</li>
            <li>Scheduling updates and cancellations</li>
            <li>Follow-up care instructions</li>
            <li>General practice communications</li>
          </ul>

          {/* 3. Message Frequency */}
          <h2 className="text-xl font-semibold mt-10 mb-4">Message Frequency</h2>
          <p className="text-gray-600 mb-6">
            Message frequency varies based on your care schedule. You may receive up to 4 messages per month.
          </p>

          {/* 4. Message and Data Rates */}
          <h2 className="text-xl font-semibold mt-10 mb-4">Message and Data Rates</h2>
          <p className="text-gray-600 mb-6">
            Message and data rates may apply depending on your mobile carrier and plan.
          </p>

          {/* 5. How to Opt Out */}
          <h2 className="text-xl font-semibold mt-10 mb-4">How to Opt Out</h2>
          <p className="text-gray-600 mb-4">
            You can opt out of receiving SMS messages at any time:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>
              Reply <strong>STOP</strong> to any message to unsubscribe immediately.
            </li>
            <li>
              Reply <strong>HELP</strong> for assistance.
            </li>
            <li>
              You may also contact us directly at{' '}
              <a href="tel:9564765310" className="text-scarlet hover:text-scarlet-600">(956) 476-5310</a> or{' '}
              <a href="mailto:buckeyephysicaltherapy@gmail.com" className="text-scarlet hover:text-scarlet-600">
                buckeyephysicaltherapy@gmail.com
              </a>.
            </li>
          </ul>
          <p className="text-gray-600 mb-6">
            After you send STOP, you may receive one final confirmation message. You will not receive
            any further SMS messages from us unless you opt in again.
          </p>

          {/* 6. No Third-Party Sharing */}
          <h2 className="text-xl font-semibold mt-10 mb-4">No Third-Party Sharing</h2>
          <p className="text-gray-600 mb-6">
            <strong>We do not share, sell, or transfer your phone number or SMS opt-in information to any
            third-party entities for marketing purposes.</strong> We only share information with service
            providers as necessary to deliver messages (for example, our messaging platform), and as
            required by law.
          </p>

          {/* 7. Privacy Policy */}
          <h2 className="text-xl font-semibold mt-10 mb-4">Privacy Policy</h2>
          <p className="text-gray-600 mb-6">
            For full details on how we collect, use, and protect your personal information, please review our{' '}
            <a href="/privacy" className="text-scarlet hover:text-scarlet-600 underline font-medium">
              Privacy Policy
            </a>.
          </p>

          {/* 8. Contact Information */}
          <h2 className="text-xl font-semibold mt-10 mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-2">
            <strong>Buckeye Physical Therapy, PLLC</strong>
          </p>
          <p className="text-gray-600 mb-2">Edinburg, TX</p>
          <p className="text-gray-600 mb-2">
            Email:{' '}
            <a href="mailto:buckeyephysicaltherapy@gmail.com" className="text-scarlet hover:text-scarlet-600">
              buckeyephysicaltherapy@gmail.com
            </a>
          </p>
          <p className="text-gray-600 mb-8">
            Phone:{' '}
            <a href="tel:9564765310" className="text-scarlet hover:text-scarlet-600">
              (956) 476-5310
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
