import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <p className="text-xs font-mono font-medium uppercase tracking-wider text-amber-400 mb-3">// Get in touch</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start a conversation
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Ready to deploy your agent system? Let&apos;s talk.
          </p>
        </div>
        <div className="mt-12">
          <div className="flex justify-center">
             <div className="glass-card w-full max-w-sm p-6 text-center relative">
                 <span className="hud-corner tl"></span>
                 <span className="hud-corner br"></span>
                 <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-400/25 mb-4 text-amber-400">
                    <Mail className="h-5 w-5" />
                 </div>
                 <h3 className="text-sm font-medium text-white">Email us</h3>
                 <p className="mt-2 text-sm text-slate-400">
                   codycodesit@pak-innovations.net
                 </p>
                 <p className="mt-1 text-sm text-slate-400">
                   elijah.f@pak-innovations.net
                 </p>
             </div>
          </div>

          <form action="https://formsubmit.co/codycodesit@pak-innovations.net" method="POST" className="mt-12 grid grid-cols-1 gap-y-5">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://www.wolf-pakinnovations.com/contact" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="py-2.5 px-4 block w-full bg-white/5 border border-white/10 text-white rounded-lg focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 placeholder-slate-600 transition-colors text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="py-2.5 px-4 block w-full bg-white/5 border border-white/10 text-white rounded-lg focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 placeholder-slate-600 transition-colors text-sm"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="py-2.5 px-4 block w-full bg-white/5 border border-white/10 text-white rounded-lg focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 placeholder-slate-600 transition-colors text-sm"
                placeholder="Tell us about your project..."
                defaultValue={''}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium text-slate-950 bg-gradient-to-r from-amber-400 to-red-500 hover:from-amber-300 hover:to-red-400 transition-all shadow-lg shadow-red-500/20"
              >
                Send message <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
