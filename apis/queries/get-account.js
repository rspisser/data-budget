//get account
module.exports = (id) => {
	return ({
	query : `PREFIX : <urn:local:g0v:api:v1:>
PREFIX interval: <http://reference.data.gov.uk/def/intervals/>
PREFIX time: <http://www.w3.org/2006/time#>


SELECT ?code ?name ?amount ?last_amount ?top_partition_label ?second_partition_label ?year ?history_amount
WHERE {
    ?account a :Account;
               :code ?code;
               :name ?name;
          :amount ?amount;
               :last_amount ?last_amount;
               :topPartitionLabel ?top_partition_label;
               :secondPartitionLabel ?second_partition_label.
               
               
    ?account_record a :AccountRecord;
        :code ?code ;
        :year/time:hasBeginning/interval:ordinalYear ?year;
                :amount ?history_amount.
    
  FILTER (?code = "${id}") 
}ORDER BY DESC(?year)

`})
}