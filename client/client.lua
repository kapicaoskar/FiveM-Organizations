

ESX = nil

Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
        Citizen.Wait(1000)
    end
end)



RegisterNetEvent('Oskar-Arcade:Setup')
AddEventHandler('Oskar-Arcade:Setup', function()
SetNuiFocus(true,true)
SendNUIMessage({ type = 'OPEN_ARCADE' })
end)



