fx_version 'adamant'

game 'gta5'
lua54 'yes'

author 'https://github.com/kapicaoskar'

server_scripts {
    '@oxmysql/lib/MySql.lua',
    'config.lua',
    'server/server.lua'
}

client_scripts {
    'config.lua',
    'client/client.lua'
}

ui_pages {
    'public/index.html'
}

files {
    'public/index.html',
    'public/css/style.css',
    'public/js/index.js'
}

escrow_ignore {
    'config.lua'
}

