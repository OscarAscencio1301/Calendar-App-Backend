import jsonwebtoken from 'jsonwebtoken'

export const createJWT = (id: string | number) => {

    const payload = {id}

    return new Promise((resolve, reject) => {

        jsonwebtoken.sign(payload, String(process.env.SECRET), {
            expiresIn: '1h'
        }, (err, token) => {
            if (err) {
                reject(err)
            } else {
                resolve(token)
            }
        })
    })


}
