import axios from "axios";

const host = 'http://10.10.10.105:8080/api/v1/qna'
// const host = 'http://localhost:8080/api/v1/qna'


export const getQNAList = async (page) => {

    const pageValue = (Number)(page || 1) // 없으면 1

    const res = await axios.get(`${host}/list?page=${pageValue}`)
    console.log(res.data)

    return res.data
}

export const deleteQNA = async (qno) => {

    const res = await axios.post(`${host}/delete/${qno}`)

    console.log(res.data)

    return res.data
}

export const getQNAOne = async (qno) => {

    const res = await axios.get(`${host}/read/${qno}`);
    console.log(res.data)
    return res.data;
}

export const updateQNA = async (qno, qna) => {

    const res = await axios.post(`${host}/update/${qno}`, qna, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return res.data;
}
