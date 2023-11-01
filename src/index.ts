import axios from 'axios';

interface Notify {
  service: string;
  context: any;
  env: string;
  url: string;
}
export const notifyChannel = ({ service, context, env, url }: Notify) => {
  axios.post(url,{text: `${service}::${env} - error context ${context}`}).then((data)=>{
      console.log({message: data?.statusText});
  }).catch((e)=>{
      console.log({error: e, logLevel: 'error'})
  })
};