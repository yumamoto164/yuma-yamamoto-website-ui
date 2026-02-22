import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  const socialLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:your.email@example.com",
      color: "hover:text-red-600",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "hover:text-gray-900",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-600",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl mb-4 text-gray-900">Get In Touch</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities, collaborations, or just a
          friendly chat about technology. Feel free to reach out!
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-3 p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition-all ${link.color} group`}
              >
                <div className="group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <span className="text-sm text-gray-700">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Or send me a direct message</p>
            <a
              href="mailto:your.email@example.com"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
