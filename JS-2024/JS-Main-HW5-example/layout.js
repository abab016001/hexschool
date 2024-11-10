const layout = {
    ticketCard(map) {
        return `<li class="ticketCard">
                <div class="ticketCard-img">
                    <a href="#">
                        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_1.png?raw=true"
                            alt="">
                    </a>
                    <div class="ticketCard-region">${map.area}</div>
                    <div class="ticketCard-rank">${map.rate}</div>
                </div>
                <div class="ticketCard-content">
                    <div>
                        <h3>
                            <a href="#" class="ticketCard-name">${map.name}</a>
                        </h3>
                        <p class="ticketCard-description">
                           ${map.description}
                        </p>
                    </div>
                    <div class="ticketCard-info">
                        <p class="ticketCard-num">
                            <span><i class="fas fa-exclamation-circle"></i></span>
                            剩下最後 <span id="ticketCard-num"> ${map.group} </span> 組
                        </p>
                        <p class="ticketCard-price">
                            TWD <span id="ticketCard-price">$${map.price}</span>
                        </p>
                    </div>
                </div>
            </li>`;
    }
};
