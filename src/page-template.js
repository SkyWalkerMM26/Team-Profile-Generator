// Generate the team from index.js

const team = (crew) => {
    const createManager = (manager) => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.role()}</h2>
            <h3 class="card-title">${manager.name()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email()}">${manager.email()}</a></li>
                <li class="list-group-item">Office number: ${manager.officeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };



}