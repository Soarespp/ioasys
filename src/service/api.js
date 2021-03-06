import axios from "axios";

export async function getOtherPage(token, page) {
    let apiUrlGet = `https://books.ioasys.com.br/api/v1/books?page= ${page}&amount=20`
    try {
        axios.get(apiUrlGet, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
            .then(
                respget => {
                    return respget.data;
                }
            );
    } catch (err) {
        console.log('error get', err)
    };
}

