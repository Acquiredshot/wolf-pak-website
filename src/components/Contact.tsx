import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <p className="text-sm font-medium text-violet-600 mb-3">Get in touch</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Start a conversation
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Ready to deploy your agent system? Let&apos;s talk.
          </p>
        </div>
        <div className="mt-12">
          <div className="flex justify-center">
             <div className="glass-card w-full max-w-sm p-6 text-center">
                 <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 border border-violet-200 mb-4 text-violet-600">
                    <Mail className="h-5 w-5" />
                 </div>
                 <h3 className="text-sm font-medium text-slate-900">Email us</h3>
                 <p className="mt-2 text-sm text-slate-600">
                   codycodesit@pak-innovations.net
                 </p>
                 <p className="mt-1 text-sm text-slate-600">
                   elijah.f@pak-innovations.net
                 </p>
             </div>
          </div>
          
          <form action="https://formsubmit.co/codycodesit@pak-innovations.net" method="POST" className="mt-12 grid grid-cols-1 gap-y-5">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://www.wolf-pakinnovations.com/contact" />
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="py-2.5 px-4 block w-full bg-white/80 border border-violet-200 text-slate-900 rounded-lg focus:ring-1 focus:ring-violet-500 focus:border-violet-500 placeholder-slate-400 transition-colors text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="py-2.5 px-4 block w-full bg-white/80 border border-violet-200 text-slate-900 rounded-lg focus:ring-1 focus:ring-violet-500 focus:border-violet-500 placeholder-slate-400 transition-colors text-sm"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="py-2.5 px-4 block w-full bg-white/80 border border-violet-200 text-slate-900 rounded-lg focus:ring-1 focus:ring-violet-500 focus:border-violet-500 placeholder-slate-400 transition-colors text-sm"
                placeholder="Tell us about your project..."
                defaultValue={''}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 transition-all shadow-lg shadow-violet-500/20"
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
