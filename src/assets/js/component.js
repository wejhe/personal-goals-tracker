import logoIce from '/src/assets/img/logoIce.svg';

const navbar = {
    background: "bg-brand-gradient",
    img: logoIce,
    title: "Personal Goals Tracker",
    color: "text-ice",

    inflate: function(elementId) {
        document.getElementById(elementId).innerHTML += `
        <nav class="navbar ${this.background}">
            <div class="container-fluid">
                <div class="container">
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

const summary = {
    numOfActiveGoals: "3",
    overallProgress: "85",
    subtitle: "You're doing great and one step closer to your goals!",

    inflate: function(elementId) {
        document.getElementById(elementId).innerHTML += `
        <div class="cotainer-fluid py-5">
            <div class="container">
                <div class="row">
                    <div class="col me-5">
                        <h1 class="fw-bold text-shrink">You have ${this.numOfActiveGoals} active goals</h1>
                        <p>${this.subtitle}</p>
                        <button type="button" class="btn btn-brand rounded-3 me-2">
                            <i class="bi bi-plus-lg me-2"></i>
                            Add New Goal
                        </button>
                        <button type="button" class="btn btn-outline-brand rounded-3">Reset Progress</button>
                    </div>
                    <div class="col card text-ice rounded-4 border border-0 bg-brand-svg ms-5">
                        <div class="card-body">
                            <h4 class="fw-bold">Overall Progress</h4>
                            <p>You've done ${this.overallProgress}% of your entire milestones</p>
                            <div class="progress mt-3 mb-2" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: ${this.overallProgress}%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

window.navbar = navbar;
window.summary = summary;