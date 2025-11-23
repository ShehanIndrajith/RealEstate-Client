'use client'

import React, { useState } from 'react'
import { CalculatorIcon } from 'lucide-react'
import { Button } from '../ui/Button'
export const RentalCalculator = () => {
  const [monthlyRent, setMonthlyRent] = useState('850000')
  const [deposit, setDeposit] = useState('170000')
  const [duration, setDuration] = useState('12')
  const [maintenance, setMaintenance] = useState('5000')
  const calculateTotal = () => {
    const rent = parseFloat(monthlyRent) || 0
    const dep = parseFloat(deposit) || 0
    const dur = parseFloat(duration) || 0
    const maint = parseFloat(maintenance) || 0
    const totalRent = rent * dur
    const totalMaintenance = maint * dur
    const total = totalRent + dep + totalMaintenance
    return {
      totalRent: totalRent.toLocaleString(),
      monthlyPayment: rent.toLocaleString(),
      totalCost: total.toLocaleString(),
    }
  }
  const results = calculateTotal()
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-sm border border-blue-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
          <CalculatorIcon size={20} className="text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Rental Calculator</h3>
      </div>
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Purchase Price ($)
          </label>
          <input
            type="text"
            value={monthlyRent}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMonthlyRent(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Down Payment ($)
          </label>
          <input
            type="text"
            value={deposit}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDeposit(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Duration (months)
          </label>
          <input
            type="text"
            value={duration}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDuration(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Maintenance ($)
          </label>
          <input
            type="text"
            value={maintenance}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMaintenance(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          />
        </div>
      </div>
      <Button fullWidth className="mb-6">
        Calculate
      </Button>
      <div className="bg-white rounded-xl p-4 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Monthly Payment</span>
          <span className="font-bold text-gray-900">
            ${results.monthlyPayment}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Loan Amount</span>
          <span className="font-bold text-gray-900">${results.totalRent}</span>
        </div>
        <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
          <span className="text-gray-900 font-semibold">Total Cost</span>
          <span className="text-2xl font-bold text-blue-600">
            ${results.totalCost}
          </span>
        </div>
      </div>
    </div>
  )
}
