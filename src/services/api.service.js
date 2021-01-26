// Here we can create axios instance
// with interceptors for auth tokens logic
// but we just simulate an slowly backend application


function post () {
    return new Promise((resolve) => {
        setTimeout(() => {
            const response = {
                status: '200',
                data: 'Always succesful request :)'
            }
            resolve(response)
        }, 1000)
    })
}

export const ApiService = {
    post
}