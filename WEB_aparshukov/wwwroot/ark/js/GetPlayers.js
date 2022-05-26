export default class ServerInfo {
    #rows
    constructor() {
    }
    async render(divServerInfo) {
        const response = await fetch("https://sm.aparshukov.ru/api/onlineplayers", {
            method: "GET",
            headers: { "Accept": "application/json" }
        });
        if (response.ok === true) {

            const onlinePlayers = await response.json();
            onlinePlayers.forEach(server => {
                //console.log(server);
                if (server.isConnected) {
                    const iplist = document.createElement("div");
                    iplist.setAttribute("class", "iplist");
                    iplist.append(this.#getName(server));
                    iplist.append(this.#getMap(server));
                    iplist.append(this.#getIp(server));
                    iplist.append(this.#getVersion(server));
                    iplist.append(this.#getStatus(server));
                    iplist.append(this.#getPlayers(server));
                    divServerInfo.appendChild(iplist);
                    
                }
                else {
                    const iplist = document.createElement("div");
                    iplist.setAttribute("class", "iplist");
                    iplist.append(this.#getName(server));
                    iplist.append("Статус сервера:");
                    const font = document.createElement("font");
                    font.setAttribute("style", "color: red;float: right;");
                    font.append("Недоступен");
                    iplist.appendChild(font);
                    divServerInfo.appendChild(iplist);
                }
            });
        }
        else divServerInfo.append("Невозможно получить данные:" + response.statusText);
    }
    #getPlayers(server) {
        
        const p = document.createElement("span");
        if (server.players.length == 0) {
            p.innerHTML = "Список игроков(0): <br>Нет игроков";
        }
        else {
            server.players.forEach(player => {
                
                p.append("Активных игроков:");
                p.innerHTML = `Активных игроков:<b style=\"float: right;color: greenyellow;\">${server.players.length}</b>
                                <br> ${player.user}`
            });
        }
        
        return p;
    }
    #getStatus(server) {
        const p = document.createElement("span");
        p.append("Статус:");
        const span = document.createElement("span");
        span.setAttribute("style", "color: greenyellow; float: right;");
        span.append("Работает");
        p.appendChild(span);

        p.appendChild(document.createElement('br'));
        return p;
    }
    #getVersion(server) {
        const p = document.createElement("span");
        p.append("Карта:");
        const span = document.createElement("b");
        span.setAttribute("style", "color: red; float: right;");
        span.append(server.version);
        p.appendChild(span);

        p.appendChild(document.createElement('br'));
        return p;
    }
    #getIp(server) {
        const p = document.createElement("span");
        p.append("Адрес:");
        const a = document.createElement("a");
        a.setAttribute("style", "color: white; float: right;");
        a.setAttribute("href", `steam://connect/${server.remoteIP}:${server.remotePort}`);
        a.append(`${server.remoteIP}:${server.remotePort}`);
        //remoteIP": "62.165.30.122",
        //"remotePort": 27018
        p.appendChild(a);
        p.appendChild(document.createElement('br'));
        return p;
    }
    #getName(server) {
        const p = document.createElement("p");
        p.setAttribute("style", "text-align: center; width: 100%;");
        const b = document.createElement("b");
        b.append(server.name);
        p.appendChild(b);
        return p;
    }
    #getMap(server) {
        const p = document.createElement("span");
        p.append("Карта:");
        const span = document.createElement("span");
        span.setAttribute("style", "color: white; float: right;");
        span.append(server.map);
        p.appendChild(span);
        
        p.appendChild(document.createElement('br'));
        return p;
    }
}
