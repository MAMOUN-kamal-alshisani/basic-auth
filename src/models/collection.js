'use strict'; 

class Collection {
    constructor(model){
        this.model = model;
    }

    async getAll(){
        let allData = await this.model.findAll();
        return allData;
    }

    async getOne(userName){
        let Data  = await this.model.findOne({where : { userName }});
        return Data;
    }

    async create(modelInfo){
        let newRecord = await this.model.create(modelInfo);
        return newRecord;
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