import React from 'react'
import isDbConnect from './_lib/database/db.connection';
const Home = async () => {
  await isDbConnect()
  return (
    <div>{process.env.name || 'ok'}</div>
  )
}

export default Home;