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

const CheckEmailInfo = ({location}) => {
    const hash = location.search.split('hash=')[1];
    const [verified, setVerified] = useState(false);
    const [checking, setChecking] = useState(!!hash);
    const [info, setInfo] = useState(renderTextInfo({ hash, checking, verified }));

    const setStatus = ({ checking, verified }) => {
        setInfo(renderTextInfo({ hash, checking, verified }));
        setVerified(verified);
        setChecking(checking);
    };

    useEffect(() => {
        if (hash) {
        userApi
            .verifyHash(hash)
            .then(() => {
            setStatus({ verified: true, checking: false });
            })
            .catch(() => {
            setStatus({ verified: false, checking: false });
            });
        }
    }, []);

    console.log({ info, checking, verified, hash });

    return (
        <div>
            <h1>{info.status === 'success' ? 'Готово!' : 'Ошибка'}</h1>
            <h2>{info.message}</h2>
        </div>
    );
}

export default CheckEmailInfo;