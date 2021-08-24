'use strict'; 

class Collection {
    constructor(model){
        this.model = model;
    }

    async getAll(){
        let allData = await this.model.findAll();
        return allData;
    }

    async signin(userName){
        let Data  = await this.model.findOne({where : { userName }});
        return Data;
    }

    async signup(modelData){
        let newData = await this.model.create(modelData);
        return newData;
    }

    async update(modelData , userName){
        let Data = await this.model.findOne({where : {userName}});
        let updatedData = await Data.update(modelData);
        return updatedData;
    }

    async delete(userName){
        await this.model.destroy({where : {userName}});
    }

}

module.exports = Collection;