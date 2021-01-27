// Here we can create axios instance
// with interceptors for auth tokens logic
// but we just simulate an slowly backend application

function post () {
    return new Promise((resolve) => {
        setTimeout(() => {
            const response = {
                status: '200',
                data: 'Always succesful POST response :)'
            }
            resolve(response)
        }, 1000)
    })
}

function get () {
    return new Promise((resolve) => {
        setTimeout(() => {
            const response = {
                status: '200',
                data: 'Always succesful GET response :)'
            }
            resolve(response)
        }, 500)
    })
}

// put, patch, delete ...

export const ApiService = {
    post,
    get
}