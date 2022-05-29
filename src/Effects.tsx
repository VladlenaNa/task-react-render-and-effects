import { useCallback, useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';
//полдня читать статьи, чтобы написать 3 строчки кода - это работа программиста...
export function Effects(props: { sourceId: string }) {
    const [msg, setMsg] = useState('-1');
    const [sourceId, setSourceId] = useState(props.sourceId);
    const callback = useCallback((msg) => {
        setMsg(msg);
    }, []);
    useEffect(() => {
        console.log(props.sourceId, sourceId)
        setSourceId(props.sourceId);
        subscribe(props.sourceId, callback);
        setMsg('-1')
        return ()=>{
            unsubscribe(props.sourceId, callback)
        }
    }, [props.sourceId]);
    return <div>{sourceId}: {msg}</div>;
}