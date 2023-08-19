import axios from 'axios';

interface Notify {
  service: string;
  context: any;
  env: string;
  url: string;
}
export const notifyChannel = ({ service, context, env, url }: Notify) => {
  const data = { text: `${service}::${env} - error context ${context}` };
  axios.post(url,JSON.stringify(data)).then((data)=>{
      console.log({message: data?.statusText});
  }).catch((e)=>{
      console.log({error: e, logLevel: 'error'})
  })
};