export class BaseLogger{
    log(data){
        console.log("Base Logger" + data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Elastic Logger" + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Mono Logger" + data)
    }
}