import axios from "axios";

async function GetData(token) {
    console.log('GetData', token)
    let apiUrlGet = 'https://books.ioasys.com.br/api/v1/books?page=1&amount=25&category=biographies';
    try {
        axios.get(apiUrlGet, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
            .then(
                respget => {
                    console.log("Response do GET: ", respget.data);
                    return respget.data.data;
                    //console.log("Response do GET: ", respget.data.data[0].title);
                }
            );
    } catch (err) {
        console.log('error get', err)
    };
}

export { GetData };
