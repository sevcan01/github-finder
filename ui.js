class UI {
    constructor() {
        this.profile = document.getElementById('profile')
        this.reposArea = document.getElementById('repos')
        this.alertArea = document.getElementById('alert')
    }

    showProfile(data) {
        console.log(data)
        this.profile.innerHTML = `
<div class="row border p-3 my-4">
<div class="col-md-3">
    <img class="img-fluid rounded shadow" src=${data.avatar_url}>
    <a target='_blank' href=${data.html_url} class="btn btn-primary my-4 w-100">Profili Göster</a>
</div>
<div class="col-md-9">
    <span class="badge bg-primary fs-6 mt-1">Acik Repolar: ${data.public_repos}</span>
    <span class="badge bg-secondary fs-6 mt-1">Acik Girisler: ${data.public_gists}</span>
    <span class="badge bg-success fs-6 mt-1">Takipciler: ${data.followers}</span>
    <span class="badge bg-info fs-6 mt-1">Takip Edilenler: ${data.following}</span>

    <ul class="list-group mt-5">
        <li class="list-group-item">Hakkinda: ${data.bio}</li>
        <li class="list-group-item">Sirket: ${data.company}</li>
        <li class="list-group-item">Website: ${data.blog}</li>
        <li class="list-group-item">Konum: ${data.location}</li>
        <li class="list-group-item">Hesap Olusturma: ${new Date(data.created_at).toLocaleDateString()}</li>
    </ul>
</div>
</div>
`
    }

    showRepos(repos) {
        let outlet = '';
        repos.forEach((repo) => {

            console.log(repo);
            outlet += `
    <div class="border row p-3 mb-4">
    <div class="col-md-6">
        <a href=${repo.html_url}>${repo.name}</a>
    </div>
    <div class="col-md-6">
        <span class="badge bg-primary">Yildiz : ${repo.stargazers_count}</span>
        <span class="badge bg-secondary">Izleyenler :${repo.watchers}</span>
        <span class="badge bg-success">Forks : ${repo.forks}</span>
    </div>
</div>
    
    `

        })

        this.reposArea.innerHTML = outlet;
    }

    showAlert(message, classname) {

        const div = document.createElement('div');

        div.classList.add('alert');

        div.classList.add(classname)

        div.innerText = message;

        this.alertArea.appendChild(div)

        setTimeout(() => {
            div.remove();
        }, 3000);
    }

}


export default UI