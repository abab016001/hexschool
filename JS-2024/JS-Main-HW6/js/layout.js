function Layout() {
    this.SearchItem = (param) => {
        return `<li class="col-4">
                    <div class="card">
                        <div class="img-wapper">
                            <i class="tag1">${param.area}</i>
                            <i class="tag2">${param.rate}</i>
                            <div class="image-container">
                                <img src="${param.imgUrl}" alt="">                            
                            </div>
                        </div>
                        <div class="content-wapper d-flex flex-column">
                            <h2 class="title">${param.name}</h2>
                            <div class="content">
                                ${param.description}
                            </div>
                            <div class="footer">
                                <div class="flex-y-center">
                                    <i class="bi bi-exclamation-circle"></i>
                                    <h4 class="group">剩下最後 ${param.group} 組</h4>
                                </div>
                                <div class="flex-y-center">
                                    <span class="me-1">TWD</span>
                                    <h3 class="price">$${_toPrice(param.price)}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>`;
    };

    function _toPrice(price, defaultVal) {
        if (defaultVal!=null && Number(price) == NaN) {
            return defaultVal;
        }
        return Number(price).toLocaleString();
    }
}