export default function PrivacyPolicy() {
    return(
         <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-sm text-gray-500">Effective Date:{new Date().getFullYear()}</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <p>
          We may collect basic information such as your name, email address, and usage data when you
          interact with our website or application.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6">
          <li>To improve our services</li>
          <li>To communicate with you</li>
          <li>To provide customer support</li>
          <li>To ensure security and prevent fraud</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Data Sharing</h2>
        <p>
          We do not sell or share your personal data with third parties, except when legally required
          or necessary to provide essential services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
        <p>
          We may use cookies to enhance your browsing experience. You can choose to disable cookies
          through your browser settings.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
        <p>
          We take reasonable steps to protect your data from unauthorized access, disclosure, or loss.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal information. Please contact us
          at 014 585 9663 to make a request.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Please check this page regularly to stay
          informed about any changes.
        </p>
      </section>
    </div>
    )
}