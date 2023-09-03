import React from 'react'
import MainLayout from '../../components/layouts/mainLayout'
import SettingsPages from '../../components/app/settings/'

function Settings() {
    return (
        <div>
            <MainLayout>
               <SettingsPages />
            </MainLayout>
        </div>
    )
}

export default Settings