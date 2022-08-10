import React from 'react'
import { useParams } from 'react-router-dom'

export default function MessagePage() {
    const { id } = useParams();
  return (
    <div>MessagePage</div>
  )
}
