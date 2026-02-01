import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export function SupabaseConnectionTest() {
  const [status, setStatus] = useState<'checking' | 'connected' | 'error'>('checking')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const testConnection = async () => {
      try {
        const { data, error } = await supabase.from('companies').select('count').limit(1)
        if (error) {
          setStatus('error')
          setError(error.message)
        } else {
          setStatus('connected')
        }
      } catch (err) {
        setStatus('error')
        setError(err instanceof Error ? err.message : 'Unknown error')
      }
    }

    testConnection()
  }, [])

  if (status === 'checking') {
    return <div className="p-4 bg-blue-50 border border-blue-200 rounded">Checking Supabase connection...</div>
  }

  if (status === 'error') {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded">
        <h3 className="font-semibold text-red-800">Supabase Connection Error</h3>
        <p className="text-red-600">{error}</p>
        <p className="text-sm text-red-500 mt-2">
          Make sure your .env file has valid VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
        </p>
      </div>
    )
  }

  return (
    <div className="p-4 bg-green-50 border border-green-200 rounded">
      <h3 className="font-semibold text-green-800">✅ Supabase Connected</h3>
      <p className="text-green-600">Connection successful!</p>
    </div>
  )
}