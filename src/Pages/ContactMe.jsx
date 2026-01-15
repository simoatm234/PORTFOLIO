import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Mail,
  MapPin,
  CheckCircle2,
  MessageSquare,
  User,
  Building2,
  Globe,
  Briefcase,
  UserCircle,
} from 'lucide-react';

export default function ContactMe() {
  const [state, handleSubmit] = useForm('mvzzgwra');

  const [isCompany, setIsCompany] = useState(false);

  if (state.succeeded) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white dark:bg-slate-800 p-12 rounded-[3rem] shadow-2xl text-center max-w-md border border-emerald-100 dark:border-emerald-500/20"
        >
          <div className="bg-emerald-100 dark:bg-emerald-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
            Message Sent!
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            Thank you! I've received your message and will get back to you soon.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="w-full py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-bold hover:scale-105 transition-transform"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-slate-50 dark:bg-[#0b0f1a] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">
            Get In Touch
          </h4>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
            Let's Start a <span className="text-blue-600">Project</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Info Side */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-blue-100 dark:bg-blue-500/10 p-4 rounded-2xl text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">
                      Email Me
                    </p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white break-all">
                      atmsimo598@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-indigo-100 dark:bg-indigo-500/10 p-4 rounded-2xl text-indigo-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">
                      Location
                    </p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                      Casablanca, Morocco
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-slate-800/50 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-slate-200 dark:border-slate-700 shadow-2xl space-y-8"
            >
              {/* Toggle Section */}
              <div className="space-y-4">
                <p className="text-sm font-black uppercase tracking-widest text-slate-400 ml-2">
                  I am reaching out as a:
                </p>
                <div className="flex p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl gap-2">
                  <button
                    type="button"
                    onClick={() => setIsCompany(false)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${
                      !isCompany
                        ? 'bg-white dark:bg-slate-800 text-blue-600 shadow-sm'
                        : 'text-slate-500'
                    }`}
                  >
                    <UserCircle size={18} /> Individual
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsCompany(true)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${
                      isCompany
                        ? 'bg-white dark:bg-slate-800 text-blue-600 shadow-sm'
                        : 'text-slate-500'
                    }`}
                  >
                    <Building2 size={18} /> Company
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 ml-2">
                    <User size={16} className="text-blue-500" />{' '}
                    {isCompany ? 'Contact Person' : 'Full Name'}
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:border-blue-500 transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 ml-2">
                    <Mail size={16} className="text-blue-500" /> Email Address
                  </label>
                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    placeholder="example@mail.com"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:border-blue-500 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Conditional Company Fields */}
              <AnimatePresence>
                {isCompany && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="grid md:grid-cols-2 gap-6 overflow-hidden"
                  >
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 ml-2">
                        <Briefcase size={16} className="text-blue-500" />{' '}
                        Company Name
                      </label>
                      <input
                        id="company_name"
                        name="company_name"
                        placeholder="Acme Inc."
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 ml-2">
                        <Globe size={16} className="text-blue-500" /> Website
                        URL
                      </label>
                      <input
                        id="website"
                        name="website"
                        placeholder="https://company.com"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:border-blue-500 transition-all"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 ml-2">
                  <MessageSquare size={16} className="text-blue-500" /> Your
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:border-blue-500 transition-all resize-none"
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={state.submitting}
                className="w-full py-5 bg-slate-900 dark:bg-blue-600 text-white font-black rounded-2xl shadow-xl hover:bg-blue-600 transition-all disabled:opacity-50"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
