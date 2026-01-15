import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="relative py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 bg-slate-950/80 backdrop-blur-md font-mono">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-widest text-white sm:text-4xl uppercase animate-glitch">
            <span className="text-cyan-500">//</span> INITIATE_CONTACT
          </h2>
          <p className="mt-4 text-lg leading-6 text-slate-400 font-sans">
            Secure channel open. Awaiting data packet.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
             {/* Info Cards */}
             <div className="group rounded-sm bg-slate-900/50 border border-slate-800 p-6 text-center hover:border-cyan-500/50 transition-colors duration-300 clip-corner">
                 <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-none bg-slate-800 border border-slate-700 mb-4 text-cyan-500 group-hover:text-cyan-400 group-hover:shadow-[0_0_10px_#0ea5e9] transition-all">
                    <Mail className="h-5 w-5" />
                 </div>
                 <h3 className="text-sm font-bold text-white uppercase tracking-wider">SECURE_MAIL</h3>
                 <p className="mt-2 text-sm text-cyan-500/80">
                   codycodesit@pak-innovations.net
                 </p>
             </div>
             <div className="group rounded-sm bg-slate-900/50 border border-slate-800 p-6 text-center hover:border-cyan-500/50 transition-colors duration-300 clip-corner">
                 <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-none bg-slate-800 border border-slate-700 mb-4 text-cyan-500 group-hover:text-cyan-400 group-hover:shadow-[0_0_10px_#0ea5e9] transition-all">
                    <Phone className="h-5 w-5" />
                 </div>
                 <h3 className="text-sm font-bold text-white uppercase tracking-wider">VOICE_LINK</h3>
                 <p className="mt-2 text-sm text-cyan-500/80">+1 (555) 123-4567</p>
             </div>
          </div>
          
          <form action="https://formsubmit.co/codycodesit@pak-innovations.net" method="POST" className="mt-12 grid grid-cols-1 gap-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000/#contact" /> {/* Update this to your production URL later */}
            
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-cyan-500/70 uppercase tracking-widest">
                ID_Tag / Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="py-3 px-4 block w-full shadow-sm bg-slate-900 border-slate-800 text-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 rounded-none border placeholder-slate-700 transition-all font-mono tracking-wider"
                  placeholder="OPERATIVE NAME"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-cyan-500/70 uppercase tracking-widest">
                Comm_Link / Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm bg-slate-900 border-slate-800 text-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 rounded-none border placeholder-slate-700 transition-all font-mono tracking-wider"
                  placeholder="operative@domain.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-cyan-500/70 uppercase tracking-widest">
                Data_Payload
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm bg-slate-900 border-slate-800 text-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 rounded-none border placeholder-slate-700 transition-all font-mono tracking-wider"
                  placeholder="Enter mission parameters..."
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-4 border border-cyan-500 rounded-none shadow-[0_0_15px_rgba(6,182,212,0.1)] text-base font-bold text-black bg-cyan-500 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 transition-all duration-300 hover:tracking-[0.2em] clip-corner uppercase"
              >
                TRANSMIT DATA <Send className="ml-2 w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
