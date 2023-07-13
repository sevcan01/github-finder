class Github {
    //istek atmak icin gerekli bilgiler
    constructor() {
        this.clientId = '9949bb9016dbe8e3d00f'
        this.clientSecret = 'abf2465e3e625476fed14d3fc69677701323f3fe'
        this.perPage = 10;
        this.sort = "asc"
    }

    //apiden gelen kullanici bilgisini alir
    async getUser(username) {
        const profilResp = await
            fetch(`https://api.github.com/users/${username}?client_id=${this.clientId}&client_screet=${this.clientSecret}`)

        const repoRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.perPage}&sort=${this.sort}&client_id=${this.clientId}&client_screet=${this.clientSecret}`)

        const profile = await profilResp.json()
        const repos = await repoRes.json()
        return {
            profile,
            repos,
        }
    }
}

export default Github;