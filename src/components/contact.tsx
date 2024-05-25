import Image from 'next/image'
import { Container } from '@/components/Container'
import { FaEnvelope, FaTelegramPlane, FaFacebookF, FaTwitter } from 'react-icons/fa'

export default function Contacts() {
  return (
    <Container className="pb-16 pt-20 lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl text-center">
        Get in Touch
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 text-center">
        We'd love to hear from you! Reach out to us via email, Telegram, Facebook, or X.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <FaEnvelope className="h-8 w-8 text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-900 mt-4">Email</h2>
          <p className="mt-4 text-slate-700">You can email us at:</p>
          <a href="mailto:contact@example.com" className="mt-2 text-blue-600 hover:underline">
            contact@example.com
          </a>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <FaTelegramPlane className="h-8 w-8 text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-900 mt-4">Telegram</h2>
          <p className="mt-4 text-slate-700">Join our Telegram community:</p>
          <a href="https://t.me/yourtelegram" className="mt-2 text-blue-600 hover:underline">
            @yourtelegram
          </a>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <FaFacebookF className="h-8 w-8 text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-900 mt-4">Facebook</h2>
          <p className="mt-4 text-slate-700">Follow us on Facebook:</p>
          <a href="https://www.facebook.com/yourpage" className="mt-2 text-blue-600 hover:underline">
            @yourfacebookpage
          </a>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <FaTwitter className="h-8 w-8 text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-900 mt-4">X (Twitter)</h2>
          <p className="mt-4 text-slate-700">Follow us on X:</p>
          <a href="https://twitter.com/yourhandle" className="mt-2 text-blue-600 hover:underline">
            @yourhandle
          </a>
        </div>
      </div>
    </Container>
  )
}
