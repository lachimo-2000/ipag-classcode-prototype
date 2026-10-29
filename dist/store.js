import {initialState} from './engine.js';
let dbPromise;
export function openDB(){if(!dbPromise)dbPromise=new Promise((resolve,reject)=>{const q=indexedDB.open('ipag-classcode-prototype-v1',1);q.onupgradeneeded=()=>q.result.createObjectStore('app');q.onsuccess=()=>resolve(q.result);q.onerror=()=>reject(q.error)});return dbPromise}
export async function transact(fn){const db=await openDB();return new Promise((resolve,reject)=>{const tx=db.transaction('app','readwrite'),store=tx.objectStore('app');let result,error;const q=store.get('state');q.onsuccess=()=>{try{const s=q.result||initialState();result=fn(s);store.put(s,'state')}catch(e){error=e;tx.abort()}};tx.oncomplete=()=>{channel?.postMessage('updated');resolve(result)};tx.onabort=()=>reject(error||tx.error||new Error('Không thể lưu dữ liệu.'));tx.onerror=()=>{error=tx.error}})}
export async function read(){const db=await openDB();return new Promise((resolve,reject)=>{const q=db.transaction('app').objectStore('app').get('state');q.onsuccess=()=>resolve(q.result);q.onerror=()=>reject(q.error)})}
export async function reset(){const db=await openDB();return new Promise((resolve,reject)=>{const tx=db.transaction('app','readwrite');tx.objectStore('app').put(initialState(),'state');tx.oncomplete=()=>{channel?.postMessage('updated');resolve()};tx.onabort=()=>reject(tx.error)})}
const channel=typeof BroadcastChannel!=='undefined'?new BroadcastChannel('ipag-classcode-v1'):null;
export function onUpdate(fn){if(channel)channel.onmessage=fn}
