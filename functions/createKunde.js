exports = function({query, headers, body}, response){
  const result = context.services
    .get("mongodb-atlas")
    .db("tricker_db")
    .collection("kunde")
    .insertOne(JSON.parse(body.text()));
    
    return result;
  
};