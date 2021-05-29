import { useMoralisCloudQuery } from './hooks/CloudQuery';


export const Balance = () => {
       const options = {
            params: { userAddress: "0x4C0000d2C6737D4a2db334c691Ab299ed813A5C7" }
        };

   
   
    
        const { data } = useMoralisCloudQuery("getTransactions", options);
        console.log(data);
     
    
};