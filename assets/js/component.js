const navbar = {
    background: "bg-brand-gradient",
    img: "/assets/img/logoIce.svg",
    title: "Personal Goals Tracker",
    color: "text-ice",

    inflate: function(elementId) {
        document.getElementById(elementId).innerHTML += `
        <nav class="navbar ${this.background}">
            <div class="container">
                <div class="container-fluid">
                    <div class="row" style="margin-top: 0.16rem;">
                        <div class="col ${this.color} fs-4 fw-bold d-flex align-items-center justify-content-start mb-1">
                            <img src="${this.img}" height="40px" class="d-inline me-3">
                            <div class="d-inline">${this.title}</div>
                        </div>
                        <div class="col ${this.color} d-flex align-items-center justify-content-end mb-1">
                            <i class="bi bi-code me-2"></i>
                            <i class="fw-light">developed by wejhe</i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        `
    }
}