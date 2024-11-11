const layout = {
    addTicketInput: (map) => {
        return `<li>
                    <label for="${map.id}">${map.label}</label>
                    <input id="${map.id}" name="${map.id}" type="${map.type}" placeholder="${map.placeholder}" ${map.limit}>
        </li>`;
    },
    addTicketSelect: (map) => {
        return `<li>
                    <label for="${map.id}">${map.label}</label>
                    <select name="${map.id}" id="${map.id}"></select>
        </li>`;
    },
    addTicketTextarea: (map) => {
        return `<li>
                    <label for="${map.id}">${map.label}</label>
                    <textarea id="${map.id}" name="${map.id}" placeholder="${map.placeholder}"></textarea>
        </li>`;
    },
    addOption: (map) => {
        return `<option value="${map.value}">${map.value}</option>`;
    },
    searchResultItem: (map) => { // img-fluid
        return `<li class="col-4">
                    <div class="card">
                        <div class="card-wrapper">
                            <i class="card-tag1">${map.area}</i>
                            <i class="card-tag2">${map.rate}</i>
                            <div class="image-wrapper">
                                <img class="" src="${map.imgUrl}" alt="travel_1">                            
                            </div>
                        </div>
                        <div class="content">
                            <h2 class="header">${map.name}</h2>
                            <div class="body">
                            ${map.description}
                            </div>
                            <div class="footer">
                                <div class="item"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" class="bi bi-exclamation-circle-fill exclamation"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                                    </svg> <span class="h4">剩下最後 ${map.group} 組</span> </div>
                                <div class="item"> <span class="h4">TWD</span> <span class="h3">$${map.price}</span> </div>
                            </div>
                        </div>
                    </div>
                </li>`;
    }
}