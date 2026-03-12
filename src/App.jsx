import React, { useEffect } from 'react'
import Dashboard from './entrepreneur-challenge.jsx'
import { storage } from './storage.js'
// Bind our storage shim on window so the component can use window.storage
export default function App(){
  useEffect(()=>{ window.storage = storage; },[])
  return <Dashboard />
}
