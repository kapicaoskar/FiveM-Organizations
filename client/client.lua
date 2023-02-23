

ESX = nil

Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
        Citizen.Wait(1000)
    end
end)



RegisterNetEvent('OSKAR-ORG:Setup')
AddEventHandler('OSKAR-ORG:Setup', function()
SetNuiFocus(true,true)
SendNUIMessage({ type = 'OPEN_ORGS' })
end)



