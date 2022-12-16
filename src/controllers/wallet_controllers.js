import models from '../models/db.js'

const postWallet = async (req, res) => {
    const { numWallet } = req.body
    try{

        let found = await models.wallet.findOne({wallet: numWallet})

        if(!found){
            models.wallet.create({
                wallet: numWallet
            })
            res.send('Success')

        } 

        res.send('Wallet alredy exist')

    }catch(err){
        console.log(err)
    }

}

export { postWallet }