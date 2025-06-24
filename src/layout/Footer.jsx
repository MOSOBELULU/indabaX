import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Quick Links */}
          <div className="text-white">
            <h4 className="text-lg font-semibold mb-4">{t("footer.quickLinks.title")}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">{t("footer.quickLinks.home")}</a></li>
              <li><a href="/aboutus" className="hover:underline">{t("footer.quickLinks.about")}</a></li>
              <li><a href="/register" className="hover:underline">{t("footer.quickLinks.register")}</a></li>
              <li><a href="/contact" className="hover:underline">{t("footer.quickLinks.contact")}</a></li>
            </ul>
          </div>

          {/* More Info */}
          <div className="text-white">
            <h4 className="text-lg font-semibold mb-4">{t("footer.moreInfo.title")}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/faqspage" className="hover:underline">{t("footer.moreInfo.faqs")}</a></li>
              <li><a href="/careers" className="hover:underline">{t("footer.moreInfo.careers")}</a></li>
              <li><a href="/gallery" className="hover:underline">{t("footer.moreInfo.gallery")}</a></li>
              <li><a href="/codeofconduct" className="hover:underline">{t("footer.moreInfo.codeOfConduct")}</a></li>
              <li><a href="/privacypolicy" className="hover:underline">{t("footer.moreInfo.privacy")}</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-white">
            <h4 className="text-lg font-semibold mb-4">{t("footer.newsletter.title")}</h4>
            <p className="text-sm mb-3">{t("footer.newsletter.description")}</p>
            <form className="flex flex-col sm:flex-row sm:items-center gap-2">
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="w-full px-3 py-2 border border-white rounded-md text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-black text-sm font-medium rounded-md"
              >
                {t("footer.newsletter.subscribe")}
              </button>
            </form>
          </div>

          
          <div className="text-white flex flex-col gap-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} IndabaX São Tomé. {t("footer.rights")}
            </p>
            <div className="flex items-center gap-4 text-xl">
              <a
                href="https://web.facebook.com/deepindaba/?ref=br_rs&_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/deepindaba"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/deep-learning-indaba/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
