exports = async function(in_MålerId, in_Aarstall, in_MånedNr) {
  const collection = context.services.get("mongodb-atlas").db("tricker_db").collection("Måling");
  
  const startOfTheMonth = new Date(in_Aarstall, in_MånedNr - 1, 1);
  const endOfTheMonth = new Date(in_Aarstall, in_MånedNr, 0, 23, 59, 59, 999);

  const result = await collection.aggregate([
    {
      $match: {
        MålerId: in_MålerId,
        Tidspunkt: {
          $gte: startOfTheMonth,
          $lte: endOfTheMonth
        }
      }
    },
    {
      $group: {
        _id: null,
        totalEnergiForbruk: { $sum: "$EnergiForbruk" }
      }
    }
  ]).toArray();

  if (result.length > 0) {
    return result[0].totalEnergiForbruk;
  }

  return 0;
}
