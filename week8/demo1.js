/* create a function that takes a list of object
 and display property,
  and valuse propery, 
  and returns a select with option. */

  function getSelectHTML(list=[], display="", value=""){
    return"";
}

inputData =[
    {id: 1, name: "one"},
    {id: 1, name: "two"}
]

expextedOutput = `<select><option value='2'>two</select>`
result1 = getSelectHTMLFromObjectList(inputData, "name", "id")
console.log(result1 === expectedOuput ? "pass" : "fail")