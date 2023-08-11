let count=0
let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("countel")
console.log(countEl)
function Increment(){
  count+=1
  console.log(count)
  countEl.textContent=count
}
function save(){
  let countStr = count + " - "
  saveEl.textContent+=countStr
  countEl.textContent=0
  count = 0
  console.log(count)
}
