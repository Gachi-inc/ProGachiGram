import React, { useEffect, useState } from "react";
import { userApi } from 'utils/api';

const renderTextInfo = (hash, verified) => {
    if(hash) {
        if(verified){
            return{
                status: 'success',
                message: 'Аккаунт успешно подтверждён!'
            };
        } else {
            return{
                status: "error",
                message: 'Ошибка при подтверждении аккаунта.'
            } 
        }
    } else {
        return{
            status: "success",
            message: 'Ссылка с подтверждением аккаунта отправлена по указанному вами E-mail адресу.'
        } 
    }
}

const CheckEmailInfo = ({location, history}) => {
    const [verified, setVerified] = useState(false);
    const hash = location.search.split('hash=')[1];
    const info = renderTextInfo(hash, verified);
    useEffect(() => {
        if (hash){
            userApi.verifyHash(hash)
            .then(({data}) => {
                if (data.status === 'success'){
                    setVerified(true);
                }
            });
        }
    })

    return (
        <div>
            <h1>{info.status === 'success' ? 'Готово!' : 'Ошибка'}</h1>
            <h2>{info.message}</h2>
        </div>
    );
}

export default CheckEmailInfo;