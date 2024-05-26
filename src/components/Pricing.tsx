import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export default function Pricing() {
  return (
    <Container className="pb-16 pt-20 lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl text-center">
        Upgrade to Pro Plan
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 text-center">
        Unlock all features and maximize your productivity with our Pro Plan. Choose the plan that best suits your needs.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-slate-900">Monthly</h2>
          <p className="mt-4 text-slate-700">$15 per month</p>
          <p className="mt-2 text-slate-700">+ 10% of profits at the end of each billing cycle</p>
          <div className="mt-6">
            <Button href="/checkout?plan=monthly">Choose Monthly Plan</Button>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-slate-900">6 Months</h2>
          <p className="mt-4 text-slate-700">$75 for 6 months</p>
          <p className="mt-2 text-slate-700">+ 10% of profits at the end of each billing cycle</p>
          <div className="mt-6">
            <Button href="/checkout?plan=6months">Choose 6 Months Plan</Button>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-slate-900">12 Months</h2>
          <p className="mt-4 text-slate-700">$132 for 12 months</p>
          <p className="mt-2 text-slate-700">+ 10% of profits at the end of each billing cycle</p>
          <div className="mt-6">
            <Button href="/checkout?plan=12months">Choose 12 Months Plan</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}
