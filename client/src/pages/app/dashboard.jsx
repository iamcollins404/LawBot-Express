import React from 'react'
import MainLayout from '../../components/layouts/mainLayout'
import DashboardHome from '../../components/app/dashboard'

function dashboard() {
  return (
    <div>
      <MainLayout>
        <div className="">
          <DashboardHome />
        </div>
      </MainLayout>
    </div>
  )
}

export default dashboard